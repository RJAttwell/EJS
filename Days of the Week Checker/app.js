//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//Must set the app in order to use EJS
//Must have it exactly how it is below and in the position it is in in the code.
app.set('view engine', 'ejs');

app.get("/", function (req, res) {

    var today = new Date(); //creates a date object with the current date and time
    var currentDay = today.getDay();
    var day = ""; //Starts off as an empty string

    //Use a switch statement 
    switch (currentDay) { //returns the day of the week (0 to 6) of a date.
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
        default:
            console.log("Error: current day is equal to: " + currentDay);
        //Default case should never be triggered but just in case it's a good idea to log the expression that caused the default case
    };

    //Instead of res.sendFile, we shall use res.render
    //This will render a file called "list" and parse into the file the variable 'kindOfDay' and we give the value 'day' for the variable  
    res.render("list", { kindOfDay: day });
});

app.listen(3000, function () {
    console.log("Server is now running on port 3000");
});