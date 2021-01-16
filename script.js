$(document).ready(function(){

    function getCity () {
        return localStorage.getItem("searchedCity");
    };

    function updateCards () {

        var cityName = getCity();
        var thisDay = moment().format("dddd, MMM DD YYYY");
        var tomorrow = moment().add(1, "days").format("L");
        var twoDays = moment().add(2, "days").format("L");
        var threeDays = moment().add(3, "days").format("L");
        var fourDays = moment().add(4, "days").format("L");
        var fiveDays = moment().add(5, "days").format("L");
        var APIkey = "ca91147add856a9d853e5901fbfec8ad";
        var currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + APIkey;
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=" + APIkey;

        document.getElementById("city").textContent=cityName + " - " + thisDay;
        document.getElementById("tomorrow").textContent=tomorrow;
        document.getElementById("two").textContent=twoDays;
        document.getElementById("three").textContent=threeDays;
        document.getElementById("four").textContent=fourDays;
        document.getElementById("five").textContent=fiveDays;

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

// Need to empty the form and create new, correctly formatted list items and create a new click function for the list items. Need to use Local storage so when you open up the page it automatically fills the last searched city in. Need to add IDs to each field that will be filled in with API data so I can add text content to contain that data. Also need to add icons with IF statements and UV coloring.


        var city = $("input").val();
        var thisDay = moment().format("dddd, MMM DD YYYY");
        var tomorrow = moment().add(1, "days").format("L");
        var twoDays = moment().add(2, "days").format("L");
        var threeDays = moment().add(3, "days").format("L");
        var fourDays = moment().add(4, "days").format("L");
        var fiveDays = moment().add(5, "days").format("L");
        var APIkey = "ca91147add856a9d853e5901fbfec8ad";
        var currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIkey;
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + APIkey;


        document.getElementById("city").textContent=city + " - " + thisDay;
        document.getElementById("tomorrow").textContent=tomorrow;
        document.getElementById("two").textContent=twoDays;
        document.getElementById("three").textContent=threeDays;
        document.getElementById("four").textContent=fourDays;
        document.getElementById("five").textContent=fiveDays;

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