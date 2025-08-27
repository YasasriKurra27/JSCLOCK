function updateClock() {
    const now = new Date();

    // Digital Clock
    const digital = document.getElementById('digital-clock');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    digital.textContent = `${hours}:${minutes}:${seconds}`;

    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();

    const secondDeg = second * 6; // 360 / 60
    const minuteDeg = minute * 6; // 360 / 60
    const hourDeg = ((hour % 12) + minute / 60) * 30; // 360 / 12

    document.getElementById('second-hand').style.transform = `rotate(${secondDeg-90}deg)`;
    document.getElementById('minute-hand').style.transform = `rotate(${minuteDeg-90}deg)`;
    document.getElementById('hour-hand').style.transform = `rotate(${hourDeg-90      }deg)`;
}

setInterval(updateClock, 1000);
updateClock();
