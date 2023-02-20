//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//Must set the app in order to use EJS
//Must have it exactly how it is below and in the position it is in in the code.
app.set('view engine', 'ejs');

app.get("/", function (req, res) {

    var today = new Date(); //creates a date object with the current date and time
   
    var options = {
        weekday: 'long',    //Long means the entire day gets printed
        day: "numeric",
        month: "long"
    };

    //Parse in options to format the date string
    var day = today.toLocaleDateString("en-US", options) //Locale is region
    
    //Instead of res.sendFile, we shall use res.render
    //This will render a file called "list" and parse into the file the variable 'kindOfDay' and we give the value 'day' for the variable  
    res.render("list", { kindOfDay: day });
});

app.listen(3000, function () {
    console.log("Server is now running on port 3000");
});