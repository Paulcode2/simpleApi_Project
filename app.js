const apiKey = "80e4cda4b48a196b1fbdc79fd15423da";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".searchBox input");
const searchBtn = document.querySelector(".searchBox button"); 
const weatherIcon = document.querySelector(".weather-icon")

const checkWeather = async(city) => {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
   
    if(response.status == 404){
        (document.querySelector(".error").style.display = "block")
        document.querySelector(".weather").style.display = "none" 
        setTimeout(() => {
            (document.querySelector(".error").style.display = "none")
        }, 3000);
    }else{
        let data = await response.json();

        // console.log(data)

       
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        document.querySelector(".weather").style.display = "block" 
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})



// checkWeather()
