/** @format */

export const convertToTitleCase = (str: string) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

export const getDataFromLocalStorage = (key: string) => {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key) as string)
    : null;
};

export const setDataToLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};
