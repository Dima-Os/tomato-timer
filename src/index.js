import './styles.scss';
import timer from './js/timer';
import refs from './js/refs';
import { addListener, removeListener } from './js/listenersHandler';

const onResumeHandler = () => {
  timer.resumeTime();

  refs.startPauseBtn.textContent = 'Pause';
  refs.clearBtn.setAttribute('disabled', 'disable');

  removeListener(onResumeHandler);
  addListener(onPauseHandler);
};

const onPauseHandler = () => {
  timer.stopTime();

  refs.startPauseBtn.textContent = 'Resume';
  refs.clearBtn.removeAttribute('disabled');

  removeListener(onPauseHandler);
  addListener(onResumeHandler);
};

const onClickHandler = () => {
  if (!timer.timer) timer.initTime();

  refs.startPauseBtn.textContent = 'Pause';

  removeListener(onClickHandler);
  addListener(onPauseHandler);
};

const onClearHandler = () => {
  timer.resetTime();

  refs.startPauseBtn.textContent = 'Start';
  refs.clearBtn.setAttribute('disabled', 'disable');

  removeListener(onPauseHandler);
  addListener(onClickHandler);
};

addListener(onClickHandler);
refs.clearBtn.addEventListener('click', onClearHandler);
