let dateInput = new Date().toISOString().split("T")[0];
document.getElementById("date").setAttribute("min", dateInput);

// Set default time to next hour and disable past times
let now = new Date();
now.setHours(now.getHours() + 1);
now.setMinutes(0);
let timeInput = now.toTimeString().split(" ")[0].substring(0, 5);
document.getElementById("time").value = timeInput;
document.getElementById("time").setAttribute("min", timeInput);

// Typerwriter effect for hero text
let i = 0;
let txt = document.getElementById("typewriter-text").innerText;
document.getElementById("typewriter-text").innerText = "";
let speed = 100;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typewriter-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();