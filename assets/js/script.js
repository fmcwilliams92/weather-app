// global variables
var userInput;
var city;
var temp;
var wind;
var humidity;
var uvIndex;
var latitude;
var longitude;

// array for cities searched
var searchedCities = [];

// search button event listener
var searchButton = document.getElementById('searchBtn');
searchButton.addEventListener('click', cityInput);

// api key
const apiKey = '4d627c952a573f026a800ae6494594c8'

// get the city input
function cityInput() {
userInput = document.getElementById('userInput').value;

fetch('https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=' + apiKey)
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data);

  latitude = data.coord.lat;
  longitude = data.coord.lon;

  city = document.querySelector('#city').innerHTML = 'City: ' + data.name;

  kelvinToFarenheit = (Math.round(data.main.temp - 273.15) * 9 / 5 + 32);
  temp = document.querySelector('#temp').innerHTML = 'Temp: ' + kelvinToFarenheit + ' degrees';

  wind = document.querySelector('#wind').innerHTML = 'Wind: ' + data.wind.speed;
  humidity = document.querySelector('#humidity').innerHTML = 'Humidity: ' + data.main.humidity + '%';

  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&appid=' + apiKey)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);

  // city = document.querySelector('#city').innerHTML = 'City: ' + data..sys.id;
  uvIndex = document.querySelector('#uvIndex').innerHTML = 'UV Index: ' + data.current.uvi;
  });
  });
}
