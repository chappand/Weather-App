$(document).ready(function(){

    var thisDay = moment().format("dddd, MMM DD YYYY");
    var APIkey = "ca91147add856a9d853e5901fbfec8ad";
    var currentQueryURL = "api.openweathermap.org/data/2.5/weather?q={city name}&appid=" + APIkey;
    var futureQueryURL = "api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt=5&appid=" + APIkey;

    document.getElementById("city").textContent="City - " + thisDay;

    $.ajax({
        url: currentQueryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
      });

      $.ajax({
        url: futureQueryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
      });





});