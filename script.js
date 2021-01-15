$(document).ready(function(){
    // Store today's date and current hour in a variable to call on later
    var thisDay = moment().format("dddd, MMM DD YYYY");

    document.getElementById("city").textContent="City - " + thisDay;

});