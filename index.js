//function to show greeting to the user
function showGreeting(response) {
  // sentence element selected here
  let sentence = document.getElementById("sentence");

  //data receive from api
  let greeting = response.data.greeting;
  let language = response.data.language;

  //clearing out the previous sentence
  sentence.innerHTML = " ";

  //displaying the new greeting
  sentence.innerHTML = `${greeting} means Hello in ${language} 👋🏽`;
}
// axios fetching the url and data
let url = `https://www.greetingsapi.com/random`;
setInterval(() => {
  axios.get(url).then(showGreeting);
}, 3000);

// function to show current month, day and time
function showTimeAndDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = daysOfTheWeek[date.getDay()];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];
  // let date = new Date();

  let dateName = date.getDate();
  let time = `${hours}:${minutes}`;

  if (minutes < 10) {
    time = `${hours}:0${minutes}`;
  } else if (hours <= 11) {
    time = `${hours}:${minutes} AM`;
  }
  return `${day} ${month} ${dateName} ${time} `;
}

// function to capture user search value
function showCity() {
  // search input
  let searchBox = document.getElementById("search-bar");
  let city = searchBox.value;

  let apiKey = `b348cf6o7e673bae03btfa66ccfde107`;
  //weather api url
  let weatherUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

  // calling showTemperature function
  axios.get(weatherUrl).then(showTempInfo);
}

//function to display current weather temperature to user
function showTempInfo(response) {
  // current weather
  let currentCityDegree = document.getElementById("degree");
  currentCityDegree.innerHTML = Math.round(response.data.temperature.current);

  //searched city
  let mainCity = document.getElementById("main-city");
  mainCity.innerHTML = response.data.city;

  // weather description
  document.querySelector(".description").innerHTML =
    response.data.condition.description;
  //weather humidity
  let humidity = document.querySelector(".humidity");
  let humidTemp = response.data.temperature.humidity;
  humidity.innerHTML = `${humidTemp}%`;

  // wind speed
  let wind = document.querySelector(".wind");
  let windSpeed = response.data.wind.speed;
  wind.innerHTML = `${windSpeed}m/h`;

  // showing date and time
  let date = new Date(response.data.time * 1000);
  let timeElement = document.querySelector(".time");
  timeElement.innerHTML = showTimeAndDate(date);

  let iconImage = document.getElementById("icon");
  iconImage.innerHTML = `<img src="${response.data.condition.icon_url}" class="current_temp_symbol" />`;
}
