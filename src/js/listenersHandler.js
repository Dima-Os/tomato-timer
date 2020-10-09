import refs from './refs';

const addListener = callBack =>
  refs.startPauseBtn.addEventListener('click', callBack);

const removeListener = callBack =>
  refs.startPauseBtn.removeEventListener('click', callBack);

export { addListener, removeListener };
