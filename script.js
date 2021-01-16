$(document).ready(function(){

    function getCity () {
        return localStorage.getItem("searchedCity");
    };

    function updateCards () {


        var cityName = getCity();
        var thisDay = moment().format("dddd, MMM DD YYYY");
        // var tomorrow = moment().add(1, "days").format("L");
        // var twoDays = moment().add(2, "days").format("L");
        // var threeDays = moment().add(3, "days").format("L");
        // var fourDays = moment().add(4, "days").format("L");
        // var fiveDays = moment().add(5, "days").format("L");
        var APIkey = "ca91147add856a9d853e5901fbfec8ad";
        var currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + APIkey;
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=" + APIkey;

        document.getElementById("city").textContent=cityName + " - " + thisDay;
        // document.getElementById("tomorrow").textContent=tomorrow;
        // document.getElementById("two").textContent=twoDays;
        // document.getElementById("three").textContent=threeDays;
        // document.getElementById("four").textContent=fourDays;
        // document.getElementById("five").textContent=fiveDays;

        $.ajax({
            url: currentQueryURL,
            method: "GET"
        }).then(function(response) {

            document.getElementById("current-temp").textContent="Temperature: " + response.main.temp;
            document.getElementById("current-humidity").textContent="Humidity: " + response.main.humidity;
            document.getElementById("current-windspeed").textContent="Wind Speed: " + response.wind.speed;
            // document.getElementById("current-UV").textcontent="Temperature: " + response.main.temp; will pull from another API
            console.log(response);
        });


            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
                // for loop to find exact days in the API and then do if statements to target that day and grab data APPEND CARDS
                for(i = 0; i < response.list.length; i++) {
                    if (response.list[i].dt_txt.includes("15:00:00")) {
                        document.getElementById("newCard").insertAdjacentHTML('beforeend',"<div class='col-md'><div class='card smallCard'> <div class='card-body'><h6 class='card-title' id='tomorrow'>" + moment(response.list[i].dt_txt).format("L") + "</h6><p class='card-text symbol'>" + response.list[i].weather[0].icon + "</p><p class='card-text temp'>Temp:</p> <p class='card-text humidity'>Humidity:</p> </div></div></div>");
                    }
                }
                console.log(response);
            });
    };
    updateCards();
// ===============================================
    $("button").click(function(event){
        event.preventDefault();

        document.getElementById("newCard").empty();

        function searchCity() {
            var city = $("input").val();
            localStorage.setItem("searchedCity", city);
        };
        searchCity();

// Need to empty the form and create new, correctly formatted list items and create a new click function for the list items. Need to fill in fields with API data. Also need to add icons with IF statements and UV coloring.


        var city = $("input").val();
        var thisDay = moment().format("dddd, MMM DD YYYY");
        // var tomorrow = moment().add(1, "days").format("L");
        // var twoDays = moment().add(2, "days").format("L");
        // var threeDays = moment().add(3, "days").format("L");
        // var fourDays = moment().add(4, "days").format("L");
        // var fiveDays = moment().add(5, "days").format("L");
        var APIkey = "ca91147add856a9d853e5901fbfec8ad";
        var currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIkey;
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + APIkey;


        document.getElementById("city").textContent=city + " - " + thisDay;
        // document.getElementById("tomorrow").textContent=tomorrow;
        // document.getElementById("two").textContent=twoDays;
        // document.getElementById("three").textContent=threeDays;
        // document.getElementById("four").textContent=fourDays;
        // document.getElementById("five").textContent=fiveDays;

        $.ajax({
            url: currentQueryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
        });

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
                console.log(response);
            });




// ===============================================
// Function to add a new list item to the unordered list when the button is clicked. As of right now, the items add, but they are not formatted correctly.
            // function listItem () {
            //     $("ul").prepend("<li>" + city).attr("class", "list-group-item");
            // };
            // listItem();
// ===============================================
// Function to clear the form field after button is clicked. Does not work yet.
            // function clear () {
            //     $("input").empty();
            // };

            // clear();
                
        });

});