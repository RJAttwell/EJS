//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const date = require(__dirname + "/date.js"); //Must use __dirname since our module is local 

const app = express();

//Must create the variable up here and leave it empty otherwise it'll only be created when we make a post request
//Must be an array in order to add multiple items to the list
//Can push new items into an array even though it's set to a const, you just cannot simply assign new items to it
const items = [];
const workItems = [];

//Must set the app in order to use EJS
//Must have it exactly how it is below and in the position it is in in the code.
app.set('view engine', 'ejs');

//Must be used in order to use bodyParser which allows use to request the value of a variable 
app.use(bodyParser.urlencoded({ extended: true }));
//Public is where we store our static files. The command below tells the server to use them.
app.use(express.static("public"));

app.get("/", function (req, res) {

    const day = date.getDate();

    //Instead of res.sendFile, we shall use res.render
    //This will render a file called "list" and parse into the file the variable 'kindOfDay' and we give the value 'day' for the variable  
    res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {

    const item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        //Append the item to our new array 
        items.push(item);
        //When a post request is triggered on our root route, we'll save the value of newItem from the text back to the variable of item 
        //Will redirect to the root route and trigger the app.get for the root route "/" and activate res.render the list template parsing in kind of day and the new list item
        res.redirect("/");
    }
});

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function(req, res){
    res.render("about"); //No parameters
})

app.listen(3000, function () {
    console.log("Server is now running on port 3000");
});