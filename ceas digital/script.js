let ceas = document.querySelector("#ceas");
let hours = document.querySelector("#hour");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let numbOfDay = document.querySelector("#numbOfDAy");
let changeTheme = document.querySelector("#changeTheme");
let body = document.querySelector("#body");

setInterval(function () {
  let date = new Date();
  let hour = date.getHours();
  let mins = date.getMinutes();
  let second = date.getSeconds();
  let days = date.getDay();
  let numbOfDays = date.getDate();
  let months = date.getMonth();
  let years = date.getFullYear();
  let DaysName = "";
  if (hour == 10 || hour == 11 || hour == 1) {
    hours.style.color = "red";
  } else {
    hours.style.color = "white";
  }
  if (mins == 10 || mins == 11 || mins == 1) {
    minutes.style.color = "red";
  } else {
    minutes.style.color = "white";
  }
  switch (days) {
    case 0:
      DaysName = "luni";

    case 1:
      DaysName = "marti";

    case 2:
      DaysName = "miercuri";

    case 3:
      DaysName = "joi";

    case 4:
      DaysName = "vineri";

    case 5:
      DaysName = "sambata";

    case 6:
      DaysName = "duminica";
  }
  hours.innerHTML = hour;
  minutes.innerHTML = mins;
  seconds.innerHTML = second;
  day.innerHTML = DaysName;
  numbOfDay.innerHTML = numbOfDays;
  month.innerHTML = months;
  year.innerHTML = years;
}, 100);
