const apikey = "9932a2aa63f4196b2903c4d5659b62fb"

let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchbar = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")

const weather_icon = document.querySelector(".weather .weather-icon");

async function checkweather(city){

    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    let data = await response.json();
    console.log(data) ;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) + "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/H";
    document.querySelector(".Humid").innerHTML = data.main.humidity + "%";

    if(data.weather[0].main=="Haze"){
        weather_icon.src="assets/mist.png"
    }
    else if(data.weather[0].main=="Clear"){
        weather_icon.src="assets/clear.png"
    }
    else if(data.weather[0].main =="Rain"){
        weather_icon.src="assets/rain.png"
    }
    else if(data.weather[0].main =="Drizzle"){
        weather_icon.src="assets/drizzle.png"
    }
    else if(data.weather[0].main =="Snow"){
        weather_icon.src="assets/snow.png"
    }
    else if(data.weather[0].main =="Clouds"){
        weather_icon.src="assets/clouds.png"
    }


    document.body.querySelector(".weather").style.display = "block";



   

}
searchbtn.addEventListener("click" , ()=>{
    checkweather(searchbar.value);

})
 
searchbar.addEventListener("keypress" , ()=>{
    if(event.key=="Enter"){
        checkweather(searchbar.value);
    }
   
})




