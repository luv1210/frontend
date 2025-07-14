function getWeather() {
      let city = document.getElementById('cityInput').value;
      let apiKey = 'f83daa9d6894dfe511eb7bdd5e781795';
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.cod === 200) {
            document.getElementById('weatherResult').innerHTML = `
              <h2>${data.name}</h2>
              <p>Temperature: ${data.main.temp}°C</p>
            
            `;
          } else {
            // document.getElementById('weatherResult').
          }
        });
    }