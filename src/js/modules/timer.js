const timer = (id, deadline) => {
  const getTimeRemaining = (endtime) => {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(t / (1000 * 60 * 60 * 24));

    const [hours, minutes, seconds] = new Date(t)
      .toLocaleString("ru-RU", { timeStyle: "medium" })
      .split(":");

    return { t, days, hours, minutes, seconds };
  };

  const setClock = (selector, endtime) => {
    const timer = document.querySelector(selector);
    const days = document.querySelector("#days");

    const updateClock = () => {

      const t = getTimeRemaining(endtime);

      days.textContent = t.days;
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      if (t.total <= 0) {
        days.content = "00";
        hours.content = "00";
        minutes.content = "00";
        seconds.content = "00";

        clearInterval(timeInterval);
      }
    };
    updateClock();
    const timeInterval = setInterval(updateClock, 1000);
  };

  setClock(id, deadline);
};

export default timer;
