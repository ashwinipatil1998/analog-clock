const hourHand = document.getElementById('hour-hand');
const minHand = document.getElementById('min-hand');
const secHand = document.getElementById('sec-hand');

function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours * 30) + (minutes / 2); 
    const minDeg = minutes * 6;
    const secDeg = seconds * 6; 

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    secHand.style.transform = `rotate(${secDeg}deg)`;
}

setInterval(updateClock, 1000);

updateClock();