let APIKey = '118453b6b895cca18310865af7751d77';
let inputCity = document.querySelector('.inputCity')
let submitButton = document.querySelector('.submitCity')
let currentCityDisplay = document.querySelector('.currentCityDisplay')
let fiveDayForecast = document.querySelector('.fivedayforecast')

function getWeather(city) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    var currentDayURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIKey}`

    return fetch(currentDayURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let cityName = data.name;
            let cityNameEl = document.createElement('h1');
            cityNameEl.textContent = cityName;

            let epochTimestamp = data.dt;
            let date = new Date(0);
            date.setUTCSeconds(epochTimestamp);
            let dateEl = document.createElement('h2');
            dateEl.textContent = date;

            let weatherIcon = data.weather[0].icon;
            let weatherIconEl = document.createElement('p');
            weatherIconEl.textContent = weatherIcon;

            let temperature = data.main.temp;
            let temperatureEl = document.createElement('p');
            temperatureEl.textContent = ('Temp: ' + temperature + '°F');

            let windSpeed = data.wind.speed;
            let windSpeedEl = document.createElement('p');
            windSpeedEl.textContent = ('Wind: ' + windSpeed + ' MPH');

            let humidity = data.main.humidity;
            let humidityEl = document.createElement('p');
            humidityEl.textContent = ('Humidity: ' + humidity + ' %');

            let cityDisplayInfo = document.createElement('div');

            cityDisplayInfo.append(cityNameEl);
            cityDisplayInfo.append(dateEl);
            cityDisplayInfo.append(weatherIconEl);
            cityDisplayInfo.append(temperatureEl);
            cityDisplayInfo.append(windSpeedEl);
            cityDisplayInfo.append(humidityEl);

            currentCityDisplay.append(cityDisplayInfo);

            console.log(cityName);
            console.log(date);
            console.log(weatherIcon);
            console.log(temperature);
            console.log(windSpeed);
            console.log(humidity);
        }
            // Parse this & update the elements (you can do it here instead of returning or as is and do it down there)
             )
}




function getForecast(city) {
    var fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast/?q=${city}&units=imperial&appid=${APIKey}`
    return fetch(fiveDayURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let firstDayDate = data.list[1].dt_txt;
            let firstDayDateEl = document.createElement('h1');
            firstDayDateEl.textContent = firstDayDate;

            let firstDayIcon = data.list[1].weather[0].icon;
            let firstDayIconEl = document.createElement('p');
            firstDayIconEl.textContent = firstDayIcon;

            let firstDayTemp = data.list[1].main.temp;
            let firstDayTempEl = document.createElement('p');
            firstDayTempEl.textContent = ('Temp: ' + firstDayTemp + '°F');

            let firstDayWind = data.list[1].wind.speed;
            let firstDayWindEl = document.createElement('p');
            firstDayWindEl.textContent = ('Wind: ' + firstDayWind + ' MPH');

            let firstDayHumidity = data.list[1].main.humidity;
            let firstDayHumidityEl = document.createElement('p');
            firstDayHumidityEl.textContent = ('Humidity: ' + firstDayHumidity + ' %');

            let firstDayInfo = document.createElement('div');

            firstDayInfo.appendChild(firstDayDateEl);
            firstDayInfo.appendChild(firstDayIconEl);
            firstDayInfo.appendChild(firstDayTempEl);
            firstDayInfo.appendChild(firstDayWindEl);
            firstDayInfo.appendChild(firstDayHumidityEl);

            fiveDayForecast.append(firstDayInfo);
            ///////////////////////////////////////////////////////////////////////////////////////
            let secondDayDate = data.list[9].dt_txt;
            let secondDayDateEl = document.createElement('h1');
            secondDayDateEl.textContent = secondDayDate;

            let secondDayIcon = data.list[9].weather[0].icon;
            let secondDayIconEl = document.createElement('p');
            secondDayIconEl.textContent = secondDayIcon;

            let secondDayTemp = data.list[9].main.temp;
            let secondDayTempEl = document.createElement('p');
            secondDayTempEl.textContent = ('Temp: ' + secondDayTemp + '°F');

            let secondDayWind = data.list[9].wind.speed;
            let secondDayWindEl = document.createElement('p');
            secondDayWindEl.textContent = ('Wind: ' + secondDayWind + ' MPH');

            let secondDayHumidity = data.list[9].main.humidity;
            let secondDayHumidityEl = document.createElement('p');
            secondDayHumidityEl.textContent = ('Humidity: ' + secondDayHumidity + ' %');

            let secondDayInfo = document.createElement('div');

            secondDayInfo.appendChild(secondDayDateEl);
            secondDayInfo.appendChild(secondDayIconEl);
            secondDayInfo.appendChild(secondDayTempEl);
            secondDayInfo.appendChild(secondDayWindEl);
            secondDayInfo.appendChild(secondDayHumidityEl);

            fiveDayForecast.append(secondDayInfo);
            /////////////////////////////////////////////////////////////////////////////////////////
            let thirdDayDate = data.list[17].dt_txt;
            let thirdDayDateEl = document.createElement('h1');
            thirdDayDateEl.textContent = thirdDayDate;

            let thirdDayIcon = data.list[17].weather[0].icon;
            let thirdDayIconEl = document.createElement('p');
            thirdDayIconEl.textContent = thirdDayIcon;

            let thirdDayTemp = data.list[17].main.temp;
            let thirdDayTempEl = document.createElement('p');
            thirdDayTempEl.textContent = ('Temp: ' + thirdDayTemp + '°F');

            let thirdDayWind = data.list[17].wind.speed;
            let thirdDayWindEl = document.createElement('p');
            thirdDayWindEl.textContent = ('Wind: ' + thirdDayWind + ' MPH');

            let thirdDayHumidity = data.list[17].main.humidity;
            let thirdDayHumidityEl = document.createElement('p');
            thirdDayHumidityEl.textContent = ('Humidity: ' + thirdDayHumidity + ' %');

            let thirdDayInfo = document.createElement('div');

            thirdDayInfo.appendChild(thirdDayDateEl);
            thirdDayInfo.appendChild(thirdDayIconEl);
            thirdDayInfo.appendChild(thirdDayTempEl);
            thirdDayInfo.appendChild(thirdDayWindEl);
            thirdDayInfo.appendChild(thirdDayHumidityEl);

            fiveDayForecast.append(thirdDayInfo);
            /////////////////////////////////////////////////////////////////////////////////////////
            let forthDayDate = data.list[25].dt_txt;
            let forthDayDateEl = document.createElement('h1');
            forthDayDateEl.textContent = forthDayDate;

            let forthDayIcon = data.list[25].weather[0].icon;
            let forthDayIconEl = document.createElement('p');
            forthDayIconEl.textContent = forthDayIcon;

            let forthDayTemp = data.list[25].main.temp;
            let forthDayTempEl = document.createElement('p');
            forthDayTempEl.textContent = ('Temp: ' + forthDayTemp + '°F');

            let forthDayWind = data.list[25].wind.speed;
            let forthDayWindEl = document.createElement('p');
            forthDayWindEl.textContent = ('Wind: ' + forthDayWind + ' MPH');

            let forthDayHumidity = data.list[25].main.humidity;
            let forthDayHumidityEl = document.createElement('p');
            forthDayHumidityEl.textContent = ('Humidity: ' + forthDayHumidity + ' %');

            let forthDayInfo = document.createElement('div');

            forthDayInfo.appendChild(forthDayDateEl);
            forthDayInfo.appendChild(forthDayIconEl);
            forthDayInfo.appendChild(forthDayTempEl);
            forthDayInfo.appendChild(forthDayWindEl);
            forthDayInfo.appendChild(forthDayHumidityEl);

            fiveDayForecast.append(forthDayInfo);
            ////////////////////////////////////////////////////////////////////////////////////////
            let fifthDayDate = data.list[33].dt_txt;
            let fifthDayDateEl = document.createElement('h1');
            fifthDayDateEl.textContent = fifthDayDate;

            let fifthDayIcon = data.list[33].weather[0].icon;
            let fifthDayIconEl = document.createElement('p');
            fifthDayIconEl.textContent = fifthDayIcon;

            let fifthDayTemp = data.list[33].main.temp;
            let fifthDayTempEl = document.createElement('p');
            fifthDayTempEl.textContent = ('Temp: ' + fifthDayTemp + '°F');

            let fifthDayWind = data.list[33].wind.speed;
            let fifthDayWindEl = document.createElement('p');
            fifthDayWindEl.textContent = ('Wind: ' + fifthDayWind + ' MPH');

            let fifthDayHumidity = data.list[33].main.humidity;
            let fifthDayHumidityEl = document.createElement('p');
            fifthDayHumidityEl.textContent = ('Humidity: ' + fifthDayHumidity + ' %');

            let fifthDayInfo = document.createElement('div');

            fifthDayInfo.appendChild(fifthDayDateEl);
            fifthDayInfo.appendChild(fifthDayIconEl);
            fifthDayInfo.appendChild(fifthDayTempEl);
            fifthDayInfo.appendChild(fifthDayWindEl);
            fifthDayInfo.appendChild(fifthDayHumidityEl);

            fiveDayForecast.append(fifthDayInfo);
        })
    // .then((data) => data['weather']); <== just returns the weather.
    // Parse this & update the elements (you can do it here instead of returning or as is and do it down there)

}


submitButton.addEventListener('click', (e) => {
    getWeather(inputCity.value).then((data) => console.log(data));
    getForecast(inputCity.value).then((data) => console.log(data));
    // https://www.w3schools.com/js/js_es6.asp#mark_arrow (es6 arrow syntax for function)
});


let searchHistory = []

/**
 * searchHistory => array of city names, once you search, append to array and load store in localStorage. Fetch this at the website load.
 * on clicking one of search history cities, trigger same event listener as click
 */
