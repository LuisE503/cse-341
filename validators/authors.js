const validateAuthor = (author) => {
  // Validate fullName
  if (!author.fullName || typeof author.fullName !== 'string' || author.fullName.trim().length < 3) {
    return { valid: false, message: 'Full name is required and must be at least 3 characters.' };
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!author.email || !emailRegex.test(author.email)) {
    return { valid: false, message: 'A valid email is required.' };
  }

  // Validate country
  if (!author.country || typeof author.country !== 'string' || author.country.trim().length < 2) {
    return { valid: false, message: 'Country is required and must be at least 2 characters.' };
  }

  // Validate birthDate (YYYY-MM-DD format)
  if (!author.birthDate || typeof author.birthDate !== 'string' || author.birthDate.trim().length < 8) {
    return { valid: false, message: 'Birth date is required (format: YYYY-MM-DD).' };
  }

  // Validate primaryGenre
  if (!author.primaryGenre || typeof author.primaryGenre !== 'string' || author.primaryGenre.trim().length < 2) {
    return { valid: false, message: 'Primary genre is required and must be at least 2 characters.' };
  }

  // Validate awardsCount
  if (typeof author.awardsCount !== 'number' || author.awardsCount < 0) {
    return { valid: false, message: 'Awards count must be a non-negative number.' };
  }

  // Validate active
  if (typeof author.active !== 'boolean') {
    return { valid: false, message: 'Active must be a boolean value.' };
  }

  return { valid: true, message: 'Author is valid.' };
};

module.exports = { validateAuthor };
