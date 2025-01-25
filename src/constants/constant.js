export function isValidEmail(email) {
  if (!email) return false;

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const hasValidStructure =
    emailRegex.test(email) &&
    email.indexOf('..') === -1 &&
    email.indexOf('@.') === -1 &&
    email.indexOf('.@') === -1 &&
    email.indexOf('@-') === -1 &&
    email.indexOf('-@') === -1 &&
    email.indexOf('--') === -1 &&
    email[0] !== '_' &&
    email[email.length - 1] !== '_';

  return hasValidStructure;
}
