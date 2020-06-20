"use strict";

const days = document.querySelector(".field [data-value = 'days']");
const hours = document.querySelector(".field [data-value = 'hours']");
const minutes = document.querySelector(".field [data-value = 'mins']");
const seconds = document.querySelector(".field [data-value = 'secs']");

class CountdownTimer {
  constructor({ selector: selector, targetDate: date }) {
    this.selector = selector;
    this.targetDate = date.getTime();
    this.currentDate = new Date().getTime();
    this.time = this.targetDate - this.currentDate;
  }

  get days() {
    return Math.floor(this.time / (1000 * 60 * 60 * 24));
  }

  get hours() {
    return Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  }

  get minutes() {
    return Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
  }

  get seconds() {
    return Math.floor((this.time % (1000 * 60)) / 1000);
  }
}

// const timer = new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Jul 17, 2020"),
// });

const setInitialCountdown = function () {
  const timer = new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("Jul 17, 2020"),
  });

  if (timer.seconds < 10) {
    seconds.textContent = 0 + String(timer.seconds);
  } else {
    seconds.textContent = String(timer.seconds);
  }
  // console.log(seconds.textContent);
  if (timer.minutes < 10) {
    minutes.textContent = 0 + String(timer.minutes);
  } else {
    minutes.textContent = String(timer.minutes);
  }
  // console.log("minutes added");
  if (timer.hours < 10) {
    hours.textContent = 0 + String(timer.hours);
  } else {
    hours.textContent = String(timer.hours);
  }
  // console.log("hours added");

  if (timer.days < 10) {
    days.textContent = 0 + String(timer.days);
  } else {
    days.textContent = String(timer.days);
  }
  // console.log("minutes added");
};

const setCountdown = function () {
  const timer = new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("Jul 17, 2020"),
  });

  if (timer.seconds < 10) {
    seconds.textContent = 0 + String(timer.seconds);
  } else {
    seconds.textContent = String(timer.seconds);
  }
  // console.log(seconds.textContent);
  if (timer.seconds === 59) {
    if (timer.minutes < 10) {
      minutes.textContent = 0 + String(timer.minutes);
    } else {
      minutes.textContent = String(timer.minutes);
    }
    // console.log("minutes added");
  }
  if (timer.minutes === 59) {
    if (timer.hours < 10) {
      hours.textContent = 0 + String(timer.hours);
    } else {
      hours.textContent = String(timer.hours);
    }
    // console.log("hours added");
  }
  if (timer.hours === 23) {
    if (timer.days < 10) {
      days.textContent = 0 + String(timer.days);
    } else {
      days.textContent = String(timer.days);
    }
    // console.log("minutes added");
  }
};

setInitialCountdown();
const timerId = setInterval(setCountdown, 1000);

console.log(seconds);

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);
