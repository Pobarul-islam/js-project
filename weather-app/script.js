const apiKey = "4fc82c8605c025330e94b8d6bf806581";
const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
  
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else if (response.status == 200) {

        let data = await response.json();
          console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =
          Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML =
          data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
          data.weather.wind + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        const iconCode = data.weather[0].icon; 
         const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@4x.png`;
         weatherIcon.src = iconUrl;

    
        //  document.querySelector(".error").style.display = "block";
    }
  
}




    
    
    
  searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
  });
