const countdown = () => {
    const countDate = new Date("January 01, 2022 00:00:00").getTime();
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
        already.innerText = "Відкрий мене!";
        already.disabled = false;
    }
    
    if (textDay === 1) {
        document.querySelector('.dnes').innerText = "День";
    }
    if (textDay === 2 || textDay === 3 || textDay === 4) {
        document.querySelector('.dnes').innerText = "Дні";
    } else
        document.querySelector('.dnes').innerText = "Днів";
};

setInterval(countdown, 1000);

function present() {
    window.open('https://sale.karabas.com/b5f556e4256cc27ab4137b41e9f1094a3373da71ab8f63473b56ad2dd246393c.ticket');
}