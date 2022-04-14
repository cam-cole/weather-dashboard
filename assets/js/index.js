var weatherApiKey = 'c277edf86dbd5e7f74e2bb44f84bbab0'
var weatherApiUrl = 'https://api.openweathermap.org/data/2.5/onecall?'

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
                currentTemp = data.current.temp;
                currentWind = data.current.wind_speed;
                currentHumidity = data.current.humidity;
                currentUvIndex = data.current.uvi;
                $("#current-temp").text("Temp: " + currentTemp + " F");
                $("#current-wind").text("Wind: " + currentWind + " MPH");
                $("#current-humidity").text("Humidity: " + currentHumidity + "%");
                $("#current-uv-index").text("UV Index: " + currentUvIndex);
            })
        }
        else {
            alert("Error: Invalid Location");
        }
    })
    .catch(function(error) {
        alert("Unable to connect to OpenWeather API");
    })

    $("#city-name").text(cityDisplayName);
}

$('#search').on("click", function() {
    console.log("Search button was clicked!")
    var cityName = $("#search-input").val();
    getCityCoordinates(cityName);
})