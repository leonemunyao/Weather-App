const apiKey = "";
const apiUrl = "";


const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button")

async function checkWeather(city) {
   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
   var data = await response.json();
   
   console.log(data);

   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°c";
   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
   document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
}


searchButton.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

