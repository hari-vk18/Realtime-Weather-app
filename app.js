const apiKey = "81520e06e9343fcb2ce3b13815274136";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const icon = document.querySelector(".weather-icon");

async function wether(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".wether").style.display = "none";
    } else {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            icon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            icon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            icon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            icon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            icon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }

}


const city = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click", () => {
    wether(city.value);
    console.log("DONE")

})
