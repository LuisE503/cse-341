const requiredFields = [
  'title',
  'genre',
  'authorName',
  'publishYear',
  'pages',
  'language',
  'inStock',
  'rating'
];

const validateBook = (body) => {
  const missing = requiredFields.filter((field) => body[field] === undefined || body[field] === null || body[field] === '');
  if (missing.length) {
    return { valid: false, message: `Missing required fields: ${missing.join(', ')}` };
  }

  if (typeof body.title !== 'string' || body.title.trim().length < 2) {
    return { valid: false, message: 'title must be a string with at least 2 characters.' };
  }

  if (typeof body.genre !== 'string' || body.genre.trim().length < 2) {
    return { valid: false, message: 'genre must be a string with at least 2 characters.' };
  }

  if (typeof body.authorName !== 'string' || body.authorName.trim().length < 2) {
    return { valid: false, message: 'authorName must be a string with at least 2 characters.' };
  }

  if (!Number.isInteger(body.publishYear) || body.publishYear < 1000 || body.publishYear > 2100) {
    return { valid: false, message: 'publishYear must be an integer between 1000 and 2100.' };
  }

  if (!Number.isInteger(body.pages) || body.pages <= 0) {
    return { valid: false, message: 'pages must be a positive integer.' };
  }

  if (typeof body.language !== 'string' || body.language.trim().length < 2) {
    return { valid: false, message: 'language must be a string with at least 2 characters.' };
  }

  if (typeof body.inStock !== 'boolean') {
    return { valid: false, message: 'inStock must be a boolean value.' };
  }

  if (typeof body.rating !== 'number' || body.rating < 0 || body.rating > 5) {
    return { valid: false, message: 'rating must be a number between 0 and 5.' };
  }

  return { valid: true };
};

module.exports = {
  validateBook
};
