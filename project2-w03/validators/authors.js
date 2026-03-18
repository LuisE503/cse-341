const requiredFields = [
  'fullName',
  'email',
  'country',
  'birthDate',
  'primaryGenre',
  'awardsCount',
  'active'
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateAuthor = (body) => {
  const missing = requiredFields.filter((field) => body[field] === undefined || body[field] === null || body[field] === '');
  if (missing.length) {
    return { valid: false, message: `Missing required fields: ${missing.join(', ')}` };
  }

  if (typeof body.fullName !== 'string' || body.fullName.trim().length < 3) {
    return { valid: false, message: 'fullName must be a string with at least 3 characters.' };
  }

  if (typeof body.email !== 'string' || !emailRegex.test(body.email)) {
    return { valid: false, message: 'email must be a valid email address.' };
  }

  if (typeof body.country !== 'string' || body.country.trim().length < 2) {
    return { valid: false, message: 'country must be a string with at least 2 characters.' };
  }

  if (typeof body.birthDate !== 'string' || body.birthDate.trim().length < 8) {
    return { valid: false, message: 'birthDate must be a date string, example: 1980-01-25.' };
  }

  if (typeof body.primaryGenre !== 'string' || body.primaryGenre.trim().length < 2) {
    return { valid: false, message: 'primaryGenre must be a string with at least 2 characters.' };
  }

  if (!Number.isInteger(body.awardsCount) || body.awardsCount < 0) {
    return { valid: false, message: 'awardsCount must be an integer greater than or equal to 0.' };
  }

  if (typeof body.active !== 'boolean') {
    return { valid: false, message: 'active must be a boolean value.' };
  }

  return { valid: true };
};

module.exports = {
  validateAuthor
};
