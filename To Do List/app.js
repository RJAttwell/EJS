//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");

const app = express();

//Must create the variable up here and leave it empty otherwise it'll only be created when we make a post request
//Must be an array in order to add multiple items to the list
let items = [];

//Must set the app in order to use EJS
//Must have it exactly how it is below and in the position it is in in the code.
app.set('view engine', 'ejs');

//Must be used in order to use bodyParser which allows use to request the value of a variable 
app.use(bodyParser.urlencoded({extended: true}));
//Public is where we store our static files. The command below tells the server to use them.
app.use(express.static("public"));

app.get("/", function (req, res) {

    let today = new Date(); //creates a date object with the current date and time

    let options = {
        weekday: 'long',    //Long means the entire day gets printed
        day: "numeric",
        month: "long"
    };

    //Parse in options to format the date string
    let day = today.toLocaleDateString("en-US", options); //Locale is region

    //Instead of res.sendFile, we shall use res.render
    //This will render a file called "list" and parse into the file the variable 'kindOfDay' and we give the value 'day' for the variable  
    res.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", function (req, res) {
    let item = req.body.newItem;

    //Append the item to our new array 
    items.push(item);

    //When a post request is triggered on our root route, we'll save the value of newItem from the text back to the variable of item 
    //Will redirect to the root route and trigger the app.get for the root route "/" and activate res.render the list template parsing in kind of day and the new list item
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Server is now running on port 3000");
});