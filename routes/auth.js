const router = require('express').Router();
const passport = require('passport');
const { isOauthConfigured } = require('../config/passport');

const requireOauthConfig = (req, res, next) => {
  if (!isOauthConfigured()) {
    return res.status(500).json({
      message: 'OAuth is not configured. Set GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET.'
    });
  }

  return next();
};

router.get('/login', requireOauthConfig, passport.authenticate('github', { scope: ['user:email'] }));

router.get(
  '/github/callback',
  requireOauthConfig,
  passport.authenticate('github', { failureRedirect: '/auth/login-failed' }),
  (req, res) => {
    res.redirect('/auth/status');
  }
);

router.get('/status', (req, res) => {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    return res.status(200).json({ authenticated: false, user: null });
  }

  return res.status(200).json({
    authenticated: true,
    user: {
      id: req.user._id,
      githubId: req.user.githubId,
      username: req.user.username,
      displayName: req.user.displayName,
      email: req.user.email
    }
  });
});

router.get('/login-failed', (req, res) => {
  res.status(401).json({ message: 'OAuth login failed.' });
});

router.get('/logout', (req, res, next) => {
  req.logout((error) => {
    if (error) {
      return next(error);
    }

    req.session.destroy(() => {
      res.clearCookie('connect.sid');
      return res.status(200).json({ message: 'Logged out successfully.' });
    });
  });
});

module.exports = router;