const apiKey = "c8f1b1b17752b231ca4ce7cf4273f443";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Nairobi";

async function checkWeather() {
   const response = await fetch(apiUrl + `&appid=${apiKey}`);
   var data = await response.json();
   
   console.log(data);

   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temperature").innerHTML = data.main.temp;
   document.querySelector(".humidity").innerHTML = data.main.humidity;
   document.querySelector(".wind").innerHTML = data.wind.speed;
}

checkWeather();