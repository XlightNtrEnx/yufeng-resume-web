export function isoDateStrToDateReplacer(_: string, value: string) {
  if (/^\d{4}-\d{2}-\d{2}T/.test(value)) {
    const date = new Date(value);
    return date;
  }
  return value;
}
