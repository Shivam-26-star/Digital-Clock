function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
  
    var amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 to 12
  
    minutes = padZero(minutes);
    seconds = padZero(seconds);
  
    var timeString = hours + ":" + minutes + ":" + seconds + " " + amPm;
  
    var date = currentTime.toDateString();
  
    document.getElementById("time").textContent = timeString;
    document.getElementById("date").textContent = date;
  }
  
  function padZero(num) {
    return (num < 10 ? "0" : "") + num;
  }
  
  // Update time every second
  setInterval(updateTime, 1000);
  