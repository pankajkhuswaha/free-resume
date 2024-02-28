export const saveData = (token, data) => {
  localStorage.setItem(token, JSON.stringify(data));
};

export const fetchData = (token) => {
  return JSON.parse(localStorage.getItem(token) || "null");
};
