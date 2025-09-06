
export const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  if (data === null) {
    return null;
  }
  return data;
};

export const LogoutUser = () => {
  localStorage.removeItem("user");
  return true;
};
