$(document).ready(function () {
    // write your code here
    //get JSON data(/data.json = client side getting it from server) and store it into (data)
    $.getJSON("/data.json", function (data) {
        //create variable for the data to be stored into a table
        var sdSpots;

        $.each(data, function (index, value) {
            //create table row
            sdSpots += "<tr>";
            //create table data/column
            sdSpots += "<td>" + value.name + "</td>";
            sdSpots += "<td>" + value.description + "</td>";
            var link = 'https://www.google.com/maps?q=' + value.location[0] + ',' + value.location[1];
            sdSpots += "<td><a class='btn' href='" + link + "' target='_blank'>Open in Google Maps</a></td>";
            sdSpots += "</tr>";
        });

        $("#table").append(sdSpots);
    });
});
