const countdown = () => {
    const countDate = new Date("January 01, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
    let already = document.querySelector('#already');

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    if (gap >= 0) {
        document.querySelector('.day').innerText = textDay;
        document.querySelector('.hour').innerText = textHour;
        document.querySelector('.minute').innerText = textMinute;
        document.querySelector('.second').innerText = textSecond;
    } else {
        document.querySelector('.hooray').innerText = 'Вітаю, моє маленьке сонечко!!!';
        already.innerText = "Відкрий мене!";
        already.disabled = false;
    }

    if (textDay === 1) {
        document.querySelector('.day-label').innerText = "День";
    } else if (textDay === 2 || textDay === 3 || textDay === 4) {
        document.querySelector('.day-label').innerText = "Дні";
    } else
        document.querySelector('.day-label').innerText = "Днів";
    
    if (textHour === 1) {
        document.querySelector('.hour-label').innerText = "Година";
    } else if (textHour === 2 || textHour === 3 || textHour === 4) {
        document.querySelector('.hour-label').innerText = "Години";
    } else
        document.querySelector('.hour-label').innerText = "Годин";

    if (textMinute === 1) {
        document.querySelector('.minute-label').innerText = "Хвилина";
    } else if (textMinute === 2 || textMinute === 3 || textMinute === 4) {
        document.querySelector('.minute-label').innerText = "Хвилини";
    } else
        document.querySelector('.minute-label').innerText = "Хвилин";


    if (textSecond === 1) {
        document.querySelector('.second-label').innerText = "Секунда";
    } else if (textSecond === 2 || textSecond === 3 || textSecond === 4) {
        document.querySelector('.second-label').innerText = "Секунди";
    } else
        document.querySelector('.second-label').innerText = "Секунд";
};

setInterval(countdown, 1000);

function present() {
    alert("Hello world!");
}