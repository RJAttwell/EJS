//jshint esversion:6

//Module for just generating the current date in order to have our app.js file be less cluttered
exports.getDate = function () {
    const today = new Date(); //creates a date object with the current date and time

    const options = {
        weekday: 'long',    //Long means the entire day gets printed
        day: "numeric",
        month: "long"
    };

    //Parse in options to format the date string
    return today.toLocaleDateString("en-US", options); //Locale is region

};

//For just the day of the week, not the full date:
//Module.exports is a JS object. They have methods associated with it, so we can then:
exports.getDay = function () {
    const today = new Date(); //creates a date object with the current date and time

    const options = {
        weekday: 'long',    //Long means the entire day gets printed
    };

    //Parse in options to format the date string
    return today.toLocaleDateString("en-US", options); //Locale is region
};
