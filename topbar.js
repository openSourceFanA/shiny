
// CLOCKfunc
//==================
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const date = now.toLocaleDateString();
    document.getElementById("clock").textContent = `${date} | ${time}`;
  }
  
  //update every second
  setInterval(updateClock, 1000);
  updateClock(); //you should run the code