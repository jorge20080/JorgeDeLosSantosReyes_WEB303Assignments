/*
    Assignment #4
    Jorge De Los Santos Reyes
*/
$(document).ready(function() {
    const successCallback = (pos) =>{
        $("#locationhere").html("Latitude: " + pos.coords.latitude + "<br>Longitude: " + pos.coords.longitude);
        const previousLat = localStorage.getItem("latitude");
        const previousLon = localStorage.getItem("longitude");
        if(previousLat!==null && previousLon!== null){
            $("#locationhere").append(`<h2>Previous Location</h2><span>Latitude: ${previousLat}</span><br><span>Longitude: ${previousLon}</span><h2>Welcome Back</h2>`);
            let result = calcDistanceBetweenPoints(previousLat,previousLon,pos.coords.latitude,pos.coords.longitude);
            $("#locationhere").append(`<span>You have traveled ${result} meters since your last visit to the site</span>`)
        } else{
            $("#locationhere").append("<h2>Welcome to the site for the first time");
        }
        localStorage.setItem("latitude",pos.coords.latitude);
        localStorage.setItem("longitude",pos.coords.longitude);
    }
    const errorCallback = () =>{
        $("#locationhere").html("Error getting the location. You must allow geolocation in order to continue using this app");
    }
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);




    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});