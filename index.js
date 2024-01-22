function updClock(){   
    const date = new Date()
    const hours = date.getHours().toString().padStart(2, 0);
    const minutes = date.getMinutes().toString().padStart(2, 0);
    const seconds = date.getSeconds().toString().padStart(2, 0);
    const time = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = time;
}

updClock();
setInterval(updClock, 1000);