

let timerHTML = document.querySelector("time");

let time = 43200;
let timer = setInterval(function () {
    let seconds = time % 60;
    let minutes = time / 60 % 60;
    let hours = time / 3600 % 60;

    if (time <= 0) {
        clearInterval(timer);
    }

    const timeString = `${hours < 10 ? "0" : ""}${Math.trunc(hours)} : ${minutes < 10 ? "0" : ""}${Math.trunc(minutes)} : ${seconds < 10 ? "0" : ""}${Math.trunc(seconds)}`;
    timerHTML.textContent = timeString;
    time--;
}, 1000);