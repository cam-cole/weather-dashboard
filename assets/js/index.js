var weatherApiKey = 'c277edf86dbd5e7f74e2bb44f84bbab0'
var weatherApiUrl = 'https://api.openweathermap.org/data/2.5/onecall?'
var searchedCitiesContainer = document.querySelector("#searched-cities");

var getCityCoordinates = function(city) {
    //  format the geocoding api url
    var geoCodingApiUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&appid=' + weatherApiKey;
    console.log(geoCodingApiUrl);

    fetch(geoCodingApiUrl).then(function(response) {
        // request was successful
        if (response.ok) {
            response.json().then(function(data){
                console.log(data);
                var cityLatitude = data[0].lat;
                var cityLongitude = data[0].lon;
                var cityDisplayName = data[0].name;
                getWeatherInfo(cityLatitude, cityLongitude, cityDisplayName);
            })
        }
        else {
            alert("Error: Invalid Location");
        }
    })
    .catch(function(error) {
        alert("Unable to connect to OpenWeather API");
    })
}

var getWeatherInfo = function(latitude, longitude, cityDisplayName) {
    // format the weather api url
    var weatherApiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&units=imperial&appid=' + weatherApiKey;
    var name = cityDisplayName;
    console.log(weatherApiUrl);

    fetch(weatherApiUrl).then(function(response) {
        // if request was successful
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);

                // current weather
                var currentDate = new Date(data.current.dt * 1000).toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                });
                var currentWeatherIcon = data.current.weather[0].icon;
                var currentTemp = data.current.temp;
                var currentWind = data.current.wind_speed;
                var currentHumidity = data.current.humidity;
                var currentUvIndex = data.current.uvi;
                $('#current-weather-icon').attr("src", "http://openweathermap.org/img/w/" + currentWeatherIcon + ".png")
                $('#current-date').text("(" + currentDate + ")");
                $("#current-temp").text("Temp: " + currentTemp + " F");
                $("#current-wind").text("Wind: " + currentWind + " MPH");
                $("#current-humidity").text("Humidity: " + currentHumidity + "%");
                $("#current-uv-index").text(currentUvIndex);

                // format uv index color indicator
                if (currentUvIndex <= 3) {
                    $("#current-uv-index").addClass("box has-background-success px-3 py-1 has-text-white");
                }

                else if (currentUvIndex > 3 && currentUvIndex <= 5) {
                    $("#current-uv-index").addClass("box has-background-warning px-3 py-1")
                }

                else if (currentUvIndex > 5) {
                    $("#current-uv-index").addClass("box has-background-danger px-3 py-1 has-text-white")
                }

                // day one weather
                var dayOneIcon = data.daily[1].weather[0].icon;
                var dayOneDate = new Date(data.daily[1].dt * 1000).toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                });
                var dayOneTemp = data.daily[1].temp.day;
                var dayOneWind = data.daily[1].wind_speed;
                var dayOneHumidity = data.daily[1].humidity;
                $('#day-one-icon').attr("src", "http://openweathermap.org/img/w/" + dayOneIcon + ".png")
                $('#day-one-date').text(dayOneDate);
                $('#day-one-temp').text("Temp: " + dayOneTemp + " F");
                $('#day-one-wind').text("Wind: " + dayOneWind + " MPH");
                $('#day-one-humidity').text("Humidity: " + dayOneHumidity + "%");

                // day two weather
                var dayTwoIcon = data.daily[2].weather[0].icon;
                var dayTwoDate = new Date(data.daily[2].dt * 1000).toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                });
                var dayTwoTemp = data.daily[2].temp.day;
                var dayTwoWind = data.daily[2].wind_speed;
                var dayTwoHumidity = data.daily[2].humidity;
                $('#day-two-icon').attr("src", "http://openweathermap.org/img/w/" + dayTwoIcon + ".png")
                $('#day-two-date').text(dayTwoDate);
                $('#day-two-temp').text("Temp: " + dayTwoTemp + " F");
                $('#day-two-wind').text("Wind: " + dayTwoWind + " MPH");
                $('#day-two-humidity').text("Humidity: " + dayTwoHumidity + "%");

                // day three weather
                var dayThreeIcon = data.daily[3].weather[0].icon;
                var dayThreeDate = new Date(data.daily[3].dt * 1000).toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                });
                var dayThreeTemp = data.daily[3].temp.day;
                var dayThreeWind = data.daily[3].wind_speed;
                var dayThreeHumidity = data.daily[3].humidity;
                $('#day-three-icon').attr("src", "http://openweathermap.org/img/w/" + dayThreeIcon + ".png")
                $('#day-three-date').text(dayThreeDate);
                $('#day-three-temp').text("Temp: " + dayThreeTemp + " F");
                $('#day-three-wind').text("Wind: " + dayThreeWind + " MPH");
                $('#day-three-humidity').text("Humidity: " + dayThreeHumidity + "%");

                // day four weather
                var dayFourIcon = data.daily[4].weather[0].icon;
                var dayFourDate = new Date(data.daily[4].dt * 1000).toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                });
                var dayFourTemp = data.daily[4].temp.day;
                var dayFourWind = data.daily[4].wind_speed;
                var dayFourHumidity = data.daily[4].humidity;
                $('#day-four-icon').attr("src", "http://openweathermap.org/img/w/" + dayFourIcon + ".png")
                $('#day-four-date').text(dayFourDate);
                $('#day-four-temp').text("Temp: " + dayFourTemp + " F");
                $('#day-four-wind').text("Wind: " + dayFourWind + " MPH");
                $('#day-four-humidity').text("Humidity: " + dayFourHumidity + "%");

                // day five weather
                var dayFiveIcon = data.daily[5].weather[0].icon;
                var dayFiveDate = new Date(data.daily[5].dt * 1000).toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                });
                var dayFiveTemp = data.daily[5].temp.day;
                var dayFiveWind = data.daily[5].wind_speed;
                var dayFiveHumidity = data.daily[5].humidity;
                $('#day-five-icon').attr("src", "http://openweathermap.org/img/w/" + dayFiveIcon + ".png")
                $('#day-five-date').text(dayFiveDate);
                $('#day-five-temp').text("Temp: " + dayFiveTemp + " F");
                $('#day-five-wind').text("Wind: " + dayFiveWind + " MPH");
                $('#day-five-humidity').text("Humidity: " + dayFiveHumidity + "%");

                // create buttons for saved searches
                var citySearchEl = document.createElement("button");
                citySearchEl.textContent = name;
                $(citySearchEl).addClass("button has-background-grey-light column is-full mb-2 has-text-white");
                searchedCitiesContainer.appendChild(citySearchEl);

                // save search to local storage
                localStorage.setItem(name, name);
            })
        }
        else {
            alert("Error: Invalid Location");
        }
    })
    .catch(function(error) {
        alert("Unable to connect to OpenWeather API");
    })

    $("#city-name").text(name);
}

var loadSearchedCities = function () {
    for (i = 0; i < localStorage.length; i++) {
        var loadedCitySearchEl = document.createElement("button");
        loadedCitySearchEl.textContent = localStorage.key(i);
        $(loadedCitySearchEl).addClass("button has-background-grey-light column is-full mb-2 has-text-white");
        $(loadedCitySearchEl).attr("id", "loaded");
        searchedCitiesContainer.appendChild(loadedCitySearchEl);
    }
}

$('#search').on("click", function() {
    console.log("Search button was clicked!")
    var cityName = $("#search-input").val();
    getCityCoordinates(cityName);
})

$('#searched-cities').on("click", ".button", function() {
    console.log("Loaded Search Clicked!")
    var cityName = this.textContent;
    getCityCoordinates(cityName);
})

loadSearchedCities();