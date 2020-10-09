import refs from './refs';

export default {
  pausedTime: 0,
  targetTime: Date.now() + 1500000,

  pad(value) {
    return String(value).padStart(2, '0');
  },
  getTime() {
    return this.targetTime - Date.now();
  },
  changeTime(time) {
    refs.mins.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    );
    refs.secs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  },
  stopTime() {
    clearInterval(this.timer);
    this.timer = null;
    this.stoppedTime = Date.now();
    this.stoppedSowedTime = -Date.now() + this.targetTime;
  },
  resumeTime() {
    this.pausedTime += Date.now() - this.stoppedTime;
    this.timer = setInterval(() => {
      this.changeTime(this.getTime() + this.pausedTime);
    }, 1000);
  },
  initTime() {
    this.targetTime = Date.now() + 1500000;
    this.timer = setInterval(() => {
      this.changeTime(this.getTime());
    }, 1000);
  },
  resetTime() {
    this.targetTime = Date.now() + 1500000;
    this.changeTime(1500000);
    this.pausedTime = 0;
  },
};
