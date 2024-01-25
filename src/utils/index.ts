export const isObjectEmpty = (obj: object): boolean => {
  if (!obj) return true;
  const keys = Object.keys(obj);
  return !keys.length;
};
