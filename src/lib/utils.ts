export function sanitizeNameString(str: string) {
  return toTitleCase(removeExcessiveWhitespace(str));
}

export function toTitleCase(str: string) {
  return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}

export function removeExcessiveWhitespace(str: string) {
  return str.trim().replace(/\s+/g, (_) => " ");
}
