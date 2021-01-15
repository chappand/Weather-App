$(document).ready(function(){

    $("button").click(function(){

        function searchCity () {
            var city = 
        }

        var thisDay = moment().format("dddd, MMM DD YYYY");
        var tomorrow = moment().add(1, "days").format("L");
        var twoDays = moment().add(2, "days").format("L");
        var threeDays = moment().add(3, "days").format("L");
        var fourDays = moment().add(4, "days").format("L");
        var fiveDays = moment().add(5, "days").format("L");
        var APIkey = "ca91147add856a9d853e5901fbfec8ad";
        var currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=Saginaw&appid=" + APIkey;
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=Saginaw&appid=" + APIkey;


        document.getElementById("city").textContent="City - " + thisDay;
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



        });

});