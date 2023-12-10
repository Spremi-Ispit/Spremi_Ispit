export const debounce = (fn, delay) => {
  let id;

  return (...args) => {
    if (id) clearTimeout(id);
    id = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export default debounce;
