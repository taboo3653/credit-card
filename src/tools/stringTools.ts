export const removeAllSpaces = (value: string): string =>
  value.replace(/\s+/g, '');

export const splitByLength = (
  value: string,
  length: number,
): Array<string> =>
  value.match(new RegExp(`.{1,${length}}`, 'g')) || [];

export const hasNotNumber = (value: string): boolean =>
  /[^0-9]/.test(value);
