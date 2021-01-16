$(document).ready(function(){

    function getCity () {
        return localStorage.getItem("searchedCity");
    };

    function updateCards () {


        var cityName = getCity();
        var thisDay = moment().format("dddd, MMM DD YYYY");

        var APIkey = "ca91147add856a9d853e5901fbfec8ad";
        var currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + APIkey;
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=" + APIkey;

        document.getElementById("city").textContent=cityName + " - " + thisDay;


        $.ajax({
            url: currentQueryURL,
            method: "GET"
        }).then(function(response) {

            document.getElementById("current-temp").textContent="Temperature: " + Number.parseFloat(response.main.temp).toFixed(0);
            document.getElementById("current-humidity").textContent="Humidity: " + response.main.humidity;
            document.getElementById("current-windspeed").textContent="Wind Speed: " + response.wind.speed;

            console.log(response);
        });


            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
     
                for(i = 0; i < response.list.length; i++) {
                    if (response.list[i].dt_txt.includes("15:00:00")) {

                        var round = Number.parseFloat(response.list[i].main.temp).toFixed(0);
                        
                        document.getElementById("newCard").insertAdjacentHTML('beforeend',"<div class='col-md'><div class='card smallCard'> <div class='card-body'><h6 class='card-title' id='tomorrow'>" + moment(response.list[i].dt_txt).format("L") + "</h6><p class='card-text temp'>Temp: " + round + "</p> <p class='card-text humidity'>Humidity:" + response.list[i].main.humidity + "</p> </div></div></div>");
                    };
                }
                console.log(response);
            });
    };
    updateCards();


// ===============================================
    $("button").click(function(event){
        event.preventDefault();

        function searchCity() {
            var city = $("input").val();
            localStorage.setItem("searchedCity", city);
        };
        searchCity();

        $("#newCard").empty();
// Need to create new, correctly formatted list items and create a new click function for the list items. 

        var city = $("input").val();
        var thisDay = moment().format("dddd, MMM DD YYYY");
 
        var APIkey = "ca91147add856a9d853e5901fbfec8ad";
        var currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIkey;
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + APIkey;


        document.getElementById("city").textContent=city + " - " + thisDay;


        $.ajax({
            url: currentQueryURL,
            method: "GET"
        }).then(function(response) {

            document.getElementById("current-temp").textContent="Temperature: " + Number.parseFloat(response.main.temp).toFixed(0);
            document.getElementById("current-humidity").textContent="Humidity: " + response.main.humidity;
            document.getElementById("current-windspeed").textContent="Wind Speed: " + response.wind.speed;

            console.log(response);
        });

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
                for(i = 0; i < response.list.length; i++) {
                    if (response.list[i].dt_txt.includes("15:00:00")) {

                        var round = Number.parseFloat(response.list[i].main.temp).toFixed(0);
                        
                        document.getElementById("newCard").insertAdjacentHTML('beforeend',"<div class='col-md'><div class='card smallCard'> <div class='card-body'><h6 class='card-title' id='tomorrow'>" + moment(response.list[i].dt_txt).format("L") + "</h6><p class='card-text temp'>Temp: " + round + "</p> <p class='card-text humidity'>Humidity:" + response.list[i].main.humidity + "</p> </div></div></div>");
                    };
                }
                console.log(response);
            });

// ===============================================
            function listItem () {
                $("ul").prepend("<li>" + city).attr("class", "list-group-item");
            };
            listItem();
// ===============================================

                
        });


});