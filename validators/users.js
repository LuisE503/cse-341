const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const validRoles = ['student', 'organizer', 'admin'];

const validateUser = (user) => {
  if (!user.fullName || typeof user.fullName !== 'string' || user.fullName.trim().length < 3) {
    return { valid: false, message: 'fullName is required and must be at least 3 characters.' };
  }

  if (!user.email || typeof user.email !== 'string' || !emailRegex.test(user.email)) {
    return { valid: false, message: 'A valid email is required.' };
  }

  if (!user.role || typeof user.role !== 'string' || !validRoles.includes(user.role)) {
    return { valid: false, message: 'role is required and must be one of: student, organizer, admin.' };
  }

  if (!user.passwordHash || typeof user.passwordHash !== 'string' || user.passwordHash.length < 8) {
    return { valid: false, message: 'passwordHash is required and must be at least 8 characters.' };
  }

  if (user.isActive !== undefined && typeof user.isActive !== 'boolean') {
    return { valid: false, message: 'isActive must be a boolean when provided.' };
  }

  return { valid: true, message: 'User is valid.' };
};

module.exports = { validateUser, validRoles };
