var weatherApiKey = 'c277edf86dbd5e7f74e2bb44f84bbab0'
var weatherApiUrl = 'https://api.openweathermap.org/data/2.5/onecall?'

var cityName = 'london';

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
                getWeatherInfo(cityLatitude, cityLongitude);
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

var getWeatherInfo = function(latitude, longitude) {
    // format the weather api url
    var weatherApiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&appid=' + weatherApiKey;
    console.log(weatherApiUrl);
}