// Setup empty JS object to act as endpoint for all routes

projectData = {};

// Require Express to run server and routes
const express = require("express");
const bodyParser = require("body-parser");

// Start up an instance of app
const app = express(); //Ale commentary /this is an empty server.

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance//My add the two next lines
const cors = require('cors'); //Ale commentary for web API and rubric request
app.use(cors());

const { request, response } = require("express"); //??my add?

// Initialize the main project folder
app.use(express.static('website')); /*file that points the server to the index.html*/

// Setup Server
const port = 8000;
app.listen(port);
console.log("hello world");

//MY add Call back to debug
function listening() {
    console.log("server running");
    console.log(`running on localhost: ${port}`);
}

// GET ROUTE.

app.get("/all", function(req, res) {
    res.send(projectData);
});

//MY ADD POST route add data to the project

app.post("/add", function(req, res) {

        projectData = {
            temperature: `temp: ${req.body.temperature}°F`,
            date: `date: ${req.body.date}`,
            userFeelings: `userFeelings ${req.body.userResponse}`,
        }
        res.sendStatus(200)
    })
    //we are just sending a status not data is not a get request a post request.