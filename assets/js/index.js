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

                // current weather
                currentTemp = data.current.temp;
                currentWind = data.current.wind_speed;
                currentHumidity = data.current.humidity;
                currentUvIndex = data.current.uvi;
                $("#current-temp").text("Temp: " + currentTemp + " F");
                $("#current-wind").text("Wind: " + currentWind + " MPH");
                $("#current-humidity").text("Humidity: " + currentHumidity + "%");
                $("#current-uv-index").text("UV Index: " + currentUvIndex);

                // day one weather
                dayOneTemp = data.daily[0].temp.day;
                dayOneWind = data.daily[0].wind_speed;
                dayOneHumidity = data.daily[0].humidity;
                $('#day-one-temp').text("Temp: " + dayOneTemp + " F");
                $('#day-one-wind').text("Wind: " + dayOneWind + " MPH");
                $('#day-one-humidity').text("Humidity: " + dayOneHumidity + "%");

                // day two weather
                dayTwoTemp = data.daily[1].temp.day;
                dayTwoWind = data.daily[1].wind_speed;
                dayTwoHumidity = data.daily[1].humidity;
                $('#day-two-temp').text("Temp: " + dayTwoTemp + " F");
                $('#day-two-wind').text("Wind: " + dayTwoWind + " MPH");
                $('#day-two-humidity').text("Humidity: " + dayTwoHumidity + "%");

                // day three weather
                dayThreeTemp = data.daily[2].temp.day;
                dayThreeWind = data.daily[2].wind_speed;
                dayThreeHumidity = data.daily[2].humidity;
                $('#day-three-temp').text("Temp: " + dayThreeTemp + " F");
                $('#day-three-wind').text("Wind: " + dayThreeWind + " MPH");
                $('#day-three-humidity').text("Humidity: " + dayThreeHumidity + "%");

                // day four weather
                dayFourTemp = data.daily[3].temp.day;
                dayFourWind = data.daily[3].wind_speed;
                dayFourHumidity = data.daily[3].humidity;
                $('#day-four-temp').text("Temp: " + dayFourTemp + " F");
                $('#day-four-wind').text("Wind: " + dayFourWind + " MPH");
                $('#day-four-humidity').text("Humidity: " + dayFourHumidity + "%");

                // day five weather
                dayFiveTemp = data.daily[4].temp.day;
                dayFiveWind = data.daily[4].wind_speed;
                dayFiveHumidity = data.daily[4].humidity;
                $('#day-five-temp').text("Temp: " + dayFiveTemp + " F");
                $('#day-five-wind').text("Wind: " + dayFiveWind + " MPH");
                $('#day-five-humidity').text("Humidity: " + dayFiveHumidity + "%");
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