// CONSTANT DECLARATION
const userLocation = document.getElementById('userLocation');
const converter = document.getElementById('converter');
const weatherIcon = document.querySelector('.weatherIcon');
const temperature = document.querySelector('.temperature');
const feelsLike = document.querySelector('.feelsLike');
const description = document.querySelector('.description');
const date = document.querySelector('.date');
const city = document.querySelector('.city');
const HValue = document.querySelector('.HValue');
const WValue = document.querySelector('.WValue');
const SRValue = document.querySelector('.SRValue');
const SSValue = document.querySelector('.SSValue');
const CValue = document.querySelector('.CValue');
const UVValue = document.querySelector('.UVValue');
const PValue = document.querySelector('.PValue');
const Forecast = document.querySelector('.Forecast');


// WEATHER APIS
WEATHER_API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?appid=6fbfaf34a6b217687723315505218c74&units=metric&q=`;
WEATHER_DATA_ENDPOINT = `https://api.openweathermap.org/data/2.5/forecast?appid=6fbfaf34a6b217687723315505218c74&units=metric&q=`

// FUNCTION FOR WEATHER BASED ON CITY
function findUserLocation() {
    Forecast.innerHTML = "";
    fetch(WEATHER_API_ENDPOINT + userLocation.value)
        .then((response) => response.json())
        .then((data) => {
            if (data.cod != '' & data.cod != 200) {
                alert(data.message);
                return;
            }
            else {
                city.innerHTML = data.name + ',' + data.sys.country;
                weatherIcon.style.background = `url(https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)`;
                console.log(data)
                temperature.innerHTML = TempConverter(data.main.temp);
                feelsLike.innerHTML = "Feels like" + data.main.feels_like;
                description.innerHTML = `<i class="fa-brands fa-cloudversify"></i>&nbsp;` + data.weather[0].description;
                HValue.innerHTML = data.main.humidity + "%";
                SSValue.innerHTML = data.coord.lat;
                SRValue.innerHTML = data.coord.lon;
                CValue.innerHTML = data.clouds.all + "%";
                UVValue.innerHTML = data.main.grnd_level;
                PValue.innerHTML = data.main.pressure + "Hpa";
                WValue.innerHTML = data.wind.speed + "m/s";
                forecast();
               
            }
        })
}
// FUNCTION FOR 5 DAYS FORECAST
function forecast() {
    fetch(WEATHER_DATA_ENDPOINT + userLocation.value)
        .then((response) => response.json())
        .then((data) => {
            if (data.cod != '' & data.cod != 200) {
                alert(data.message);
                return;
            }
            else {
               
console.log(data)
                let div1 = document.createElement("div");
                div1.innerHTML += `<h3>${data.list[2].dt_txt}</h3>`
                div1.innerHTML += `<img src="https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png"/>`
                div1.innerHTML += `<p class="forecast-desc">${data.list[2].weather[0].description}</p>`;
                div1.innerHTML += `<span><span>${TempConverter(data.list[2].main.temp_min)}</span>&nbsp;&nbsp;&nbsp;<span>${TempConverter(data.list[0].main.temp_max)}</span></span>`
              

                let div2 = document.createElement("div");
                div2.innerHTML += `<h3>${data.list[10].dt_txt}</h3>`
                div2.innerHTML += `<img src="https://openweathermap.org/img/wn/${data.list[10].weather[0].icon}@2x.png"/>`
                div2.innerHTML += `<p class="forecast-desc">${data.list[10].weather[0].description}</p>`;
                div2.innerHTML += `<span><span>${TempConverter(data.list[10].main.temp_min)}</span>&nbsp;&nbsp;&nbsp;<span>${TempConverter(data.list[0].main.temp_max)}</span></span>`
           

                let div3 = document.createElement("div");
                div3.innerHTML += `<h3>${data.list[18].dt_txt}</h3>`
                div3.innerHTML += `<img src="https://openweathermap.org/img/wn/${data.list[18].weather[0].icon}@2x.png"/>`
                div3.innerHTML += `<p class="forecast-desc>${data.list[18].weather[0].description}"></p>`;
                div3.innerHTML += `<span><span>${TempConverter(data.list[18].main.temp_min)}</span>&nbsp;&nbsp;&nbsp;<span>${TempConverter(data.list[0].main.temp_max)}</span></span>`
               
                let div4 = document.createElement("div");
                div4.innerHTML += `<h3>${data.list[26].dt_txt}</h3>`
                div4.innerHTML += `<img src="https://openweathermap.org/img/wn/${data.list[26].weather[0].icon}@2x.png"/>`
                div4.innerHTML += `<p class="forecast-desc>${data.list[26].weather[0].description}"></p>`;
                div4.innerHTML += `<span><span>${TempConverter(data.list[26].main.temp_min)}</span>&nbsp;&nbsp;&nbsp;<span>${TempConverter(data.list[0].main.temp_max)}</span></span>`
                

                let div5 = document.createElement("div");
                div5.innerHTML += `<h3>${data.list[34].dt_txt}</h3>`
                div5.innerHTML += `<img src="https://openweathermap.org/img/wn/${data.list[34].weather[0].icon}@2x.png"/>`
                div5.innerHTML += `<p class="forecast-desc>${data.list[34].weather[0].description}"></p>`;
                div5.innerHTML += `<span><span>${TempConverter(data.list[34].main.temp_min)}</span>&nbsp;&nbsp;&nbsp;<span>${TempConverter(data.list[0].main.temp_max)}</span></span>`
         
                Forecast.append(div1,div2,div3,div4,div5)
            }
        })

}

// TEMPERATURE CONVERTER FROM CELCIUS TO FRANEHITE 
function TempConverter(temp) {
    let tempValue = Math.round(temp);
    let message = "";
    if (converter.value == "°C") {
        message = tempValue + "<span>" + "\xB0C</span>"
    }
    else {
        let ctof = (tempValue * 9) / 5 + 32;
        message = ctof + "<span>" + "\xB0f</span>"
    }

    return message;
}
// THANKYOU


    

