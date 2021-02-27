/* Global Variables */
//Personal API
const appID = "9ad2ba6aeb51853a32d2a00a33ecb79d";
const baseURL = "http://api.openweathermap.org/data/2.5/weather";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();

//MY ADD  //Create event listener
document.getElementById("generate").addEventListener("click", generateEntry);

async function generateEntry() {
    let zipCode = document.getElementById("zip").value;
    let userFeelings = document.getElementById("feelings").value;
    let URL = `${baseURL}?zip=${zipCode}&appid=${appID}&units=imperial`;
    let response = (await fetch(URL)).json();
    response.then(data => {
        console.log(data)
        document.getElementById("date").innerText = `Date: ${newDate}`;
        document.getElementById("temp").innerText = `Temperature: ${data.main.temp}°F`;
        document.getElementById("content").innerText = `User Feeling is: ${userFeelings}`;

    })
}