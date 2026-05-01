// Get the current time from the user's device
const now = new Date();

const seconds = now.getSeconds();
const minutes = now.getMinutes();
const hour = now.getHours();

// Initial rotation (degrees) for each hand based on the current time.
let secondsDegrees = (seconds / 60) * 360;
let minutesDegrees = (minutes / 60) * 360;
let hoursDegrees   = (hour / 12) * 360;

// Cache references to the DOM elements (avoids querying every tick)
const secondC = document.querySelector('.second');
const minuteC = document.querySelector('.minute');
const hourC   = document.querySelector('.hour');

// Called every second to advance each hand by the correct amount:
function setDate() {
    secondsDegrees += 6;
    minutesDegrees += 0.1;
    hoursDegrees   += 1 / 120;

    secondC.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteC.style.transform = `rotate(${minutesDegrees}deg)`;
    hourC.style.transform   = `rotate(${hoursDegrees}deg)`;
}

// Update the clock once per second
setInterval(setDate, 1000);