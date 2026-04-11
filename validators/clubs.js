const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateClub = (club) => {
  if (!club.name || typeof club.name !== 'string' || club.name.trim().length < 2) {
    return { valid: false, message: 'name is required and must be at least 2 characters.' };
  }

  if (!club.category || typeof club.category !== 'string' || club.category.trim().length < 2) {
    return { valid: false, message: 'category is required and must be at least 2 characters.' };
  }

  if (club.description !== undefined && typeof club.description !== 'string') {
    return { valid: false, message: 'description must be a string when provided.' };
  }

  if (club.contactEmail !== undefined && (typeof club.contactEmail !== 'string' || !emailRegex.test(club.contactEmail))) {
    return { valid: false, message: 'contactEmail must be a valid email when provided.' };
  }

  if (club.presidentUserId !== undefined && typeof club.presidentUserId !== 'string') {
    return { valid: false, message: 'presidentUserId must be a string ObjectId when provided.' };
  }

  if (club.isActive !== undefined && typeof club.isActive !== 'boolean') {
    return { valid: false, message: 'isActive must be a boolean when provided.' };
  }

  return { valid: true, message: 'Club is valid.' };
};

module.exports = { validateClub };
