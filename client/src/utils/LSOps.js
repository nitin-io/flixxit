export const saveToLS = (key, value) => {
  try {
    const dataStr = JSON.stringify(value);
    localStorage.setItem(key, dataStr);
    return "saved succefully";
  } catch (error) {
    console.log(error);
    return "failed to save";
  }
};

export const getFromLS = (key) => {
  try {
    const data = localStorage.getItem(key);
    if (!data) {
      return "no data found with this key";
    }
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
    return "something is wrong";
  }
};
