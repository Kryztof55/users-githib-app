export const debounce = (callback, delay) => {
  let timerId;

  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      callback(...args);
      timerId = null;
    }, delay);
  };
};
