import './styles.css';

console.log(Date.now());
console.log(Date.now() - 90000);

const timer = {
  targetDate: `${Date.now() + 1500000}`,
  refs: {
    mins: document.querySelector(`.value[data-value="mins"]`),
    secs: document.querySelector(`.value[data-value="secs"]`),
  },
  pad(value) {
    return String(value).padStart(2, '0');
  },
  getTime() {
    return this.targetDate - Date.now();
  },
  changeTime(time) {
    this.refs.mins.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    );
    this.refs.secs.textContent = this.pad(
      Math.floor((time % (1000 * 60)) / 1000),
    );
  },
  initTime() {
    setInterval(() => {
      this.changeTime(this.getTime());
    }, 1000);
  },
};

console.log(timer.refs.mins);

timer.initTime();
