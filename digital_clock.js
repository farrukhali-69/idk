// Digital Clock Program

function updateclock(){
    const now = new Date();
    let hours = now.getHours();
    const meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0)
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const time_string = `${hours}:${minutes}:${seconds} ${meridian}`
    document.getElementById("clock").textContent = time_string;
}

setInterval(updateclock,1000);

updateclock();