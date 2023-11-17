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
function showTime() {
  let time = document.querySelector(".time");

  // setting time -- hours and minutes
  let d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();

  //statement to show AM
  if (minutes <= 10) {
    time.innerHTML = `${hours}:0${minutes}`;
  }
  if (hours <= 11) {
    time.innerHTML = `${hours}:${minutes}AM`;
  } else {
    time.innerHTML = `${hours}:${minutes}`;
  }

  let daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  day = daysOfTheWeek[d.getDay()];

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
  let month = months[d.getMonth()];
  let date = d.getDate();
  let weekDay = document.querySelector(".week_day");

  weekDay.innerHTML = `${day} ${month} ${date}`;
}
showTime();

// function to capture user search value
function showCity() {
  // search input
  let searchBox = document.getElementById("search-bar").value;
  let mainCity = document.getElementById("main-city");
  mainCity.innerHTML = searchBox;
}
