function setDaytimeBackground() {
    var element = document.querySelector('.background-image');
    
    if (element) {
      var now = new Date();
      var hour = now.getHours();
  
      if ((hour >= 0 && hour < 6) || (hour >= 22 && hour <= 23)) {
        // Nacht (zwischen 0 Uhr und 6 Uhr sowie zwischen 22 Uhr und 23 Uhr)
        element.style.backgroundImage = 'url("./img/bgs/wb_night.jpg")';
      } else if ((hour >= 6 && hour < 10) || (hour >= 19 && hour < 22)) {
        // Sonnenuntergang (zwischen 6 Uhr und 10 Uhr sowie zwischen 19 Uhr und 22 Uhr)
        element.style.backgroundImage = 'url("./img/bgs/wb_sunset.jpg")';
      } else {
        // Tag (zwischen 10 Uhr und 19 Uhr)
        element.style.backgroundImage = 'url("./img/bgs/wb_day.jpg")';
      }
    }
  }
  
  setDaytimeBackground(); // Setze das Hintergrundbild beim Laden der Seite
  
  // Überprüfe und setze das Hintergrundbild
  setInterval(setDaytimeBackground, 30);
  