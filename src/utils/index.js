export function capitalize(text = '') {
  return text?.[0]?.toUpperCase() + text.slice(1);
}
export function emptyObject(object) {
  return Object.keys(object).length === 0;
}
