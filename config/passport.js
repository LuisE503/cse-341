const GitHubStrategy = require('passport-github2').Strategy;
const { ObjectId } = require('mongodb');
const mongodb = require('../db/connect');

const isOauthConfigured = () =>
  Boolean(process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET);

const mapProfileToUser = (profile) => ({
  githubId: profile.id,
  username: profile.username || null,
  displayName: profile.displayName || profile.username || 'GitHub User',
  email: profile.emails && profile.emails.length > 0 ? profile.emails[0].value : null,
  avatarUrl: profile.photos && profile.photos.length > 0 ? profile.photos[0].value : null,
  updatedAt: new Date()
});

const initializePassport = (passport) => {
  if (!isOauthConfigured()) {
    // Allow app startup while clearly signaling missing OAuth config.
    console.warn('OAuth is not configured. Set GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET.');
    return;
  }

  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_CALLBACK_URL || '/auth/github/callback'
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const oauthUsersCollection = mongodb
            .getDb()
            .db(mongodb.getDatabaseName())
            .collection('oauthUsers');

          const mappedUser = mapProfileToUser(profile);

          await oauthUsersCollection.updateOne(
            { githubId: mappedUser.githubId },
            {
              $set: mappedUser,
              $setOnInsert: { createdAt: new Date() }
            },
            { upsert: true }
          );

          const user = await oauthUsersCollection.findOne({ githubId: mappedUser.githubId });
          return done(null, user);
        } catch (error) {
          return done(error, null);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user._id.toString());
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const oauthUsersCollection = mongodb
        .getDb()
        .db(mongodb.getDatabaseName())
        .collection('oauthUsers');

      const user = await oauthUsersCollection.findOne({ _id: new ObjectId(id) });
      done(null, user || null);
    } catch (error) {
      done(error, null);
    }
  });
};

module.exports = {
  initializePassport,
  isOauthConfigured
};