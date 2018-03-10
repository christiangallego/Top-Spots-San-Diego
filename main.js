
$(document).ready(function(){

$.getJSON("data.json", function(data){
    let topSpots = "";

    $.each(data, function(key, value){
        topSpots += "<tr>";
        topSpots += "<td>" + value.name + "</td>";
        topSpots += "<td>" + value.description + "</td>";
        topSpots += "<td>" + '<a href="https://www.bing.com/maps?q=' + value.location + '">' + "Map</a>" + "</td>";
        topSpots += "</tr>";
   });
   $("table").append(topSpots);
 });
});
