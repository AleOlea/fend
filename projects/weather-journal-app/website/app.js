/* Global Variables */



//Personal API/ALE my add------
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
    let weatherData = {}

    (await fetch(URL)).json().then(data => {
            console.log(data)
            weatherData = {
                temperature: data.main.temp,
                date: newDate,
                userFeelings: userFeelings,
            }
        })
        (await fetch("/add", { method: "post", body: weatherData }))
        (await fetch("/all")).json().then(projectData => {
            document.getElementById("date").innerText = projectData.date;
            document.getElementById("temp").innerText = projectData.temperature;
            document.getElementById("content").innerText = projectData.userFeelings;

        })

}





/* MY DRAFT

async function generateEntry(e) {
    let zipCode = document.getElementById("zip").value;
    const userResponse = document.getElementById("feelings").value;

    let weatherData = await getWeatherData(baseURL, zipCode, appID)
    const postResponse = await postData("/add", {
        temperature: weatherData.main.temp,
        date: newDate,
        userResponse: userResponse,
    });
    if (postResponse.status === 200) {
        updateUI("/all");
    }
}

// MY ADD

const getWeatherData = async(baseURL, zipCode, appID) => {
    const openWeatherApiUrl = baseURL + zipCode + "&appid=" + appID + "&units = imperial";
    const response = await fetch(openWeatherApiUrl);
    return await response.json();
};

// MY ADD
const postData = async(url = "", data = {}) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(data),
    });
    return await response.json();
}*/





/*import { response } from "express"; //app.js:Uncaught SyntaxError: Cannot use import statement outside a moduleno me acuerdo esta linea mirar en cod original*/