const validateBook = (book) => {
  // Validate title
  if (!book.title || typeof book.title !== 'string' || book.title.trim().length < 2) {
    return { valid: false, message: 'Title is required and must be at least 2 characters.' };
  }

  // Validate genre
  if (!book.genre || typeof book.genre !== 'string' || book.genre.trim().length < 2) {
    return { valid: false, message: 'Genre is required and must be at least 2 characters.' };
  }

  // Validate authorName
  if (!book.authorName || typeof book.authorName !== 'string' || book.authorName.trim().length < 2) {
    return { valid: false, message: 'Author name is required and must be at least 2 characters.' };
  }

  // Validate publishYear
  if (typeof book.publishYear !== 'number' || book.publishYear < 1000 || book.publishYear > 2100) {
    return { valid: false, message: 'Publish year must be a number between 1000 and 2100.' };
  }

  // Validate pages
  if (typeof book.pages !== 'number' || book.pages <= 0) {
    return { valid: false, message: 'Pages must be a positive number.' };
  }

  // Validate language
  if (!book.language || typeof book.language !== 'string' || book.language.trim().length < 2) {
    return { valid: false, message: 'Language is required and must be at least 2 characters.' };
  }

  // Validate inStock
  if (typeof book.inStock !== 'boolean') {
    return { valid: false, message: 'In stock must be a boolean value.' };
  }

  // Validate rating
  if (typeof book.rating !== 'number' || book.rating < 0 || book.rating > 5) {
    return { valid: false, message: 'Rating must be a number between 0 and 5.' };
  }

  return { valid: true, message: 'Book is valid.' };
};

module.exports = { validateBook };
