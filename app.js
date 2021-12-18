const countdown = () => {
    const countDate = new Date("January 01, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;
    
    if (textDay < 1) {
        document.querySelector('#already').innerText = "Відкрий мене!";
        document.querySelector('#already').disabled = false;
    }
};

setInterval(countdown, 1000);

// var alert1 = document.getElementById('alertdialog');
// var ready = document.getElementById('already');

function present() {
    window.open();
}
// ready.addEventListener('click', function onOpen() {
//     if (typeof alert1.showModal === "function") {
//         alert1.showModal();
//     } else {
//         alert("The <dialog> API is not supported by this browser");
//     }
// });