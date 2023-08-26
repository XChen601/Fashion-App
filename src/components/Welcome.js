import React, { useState } from "react";
import "../css/Welcome.css";
import Navigation from "./Navigation";
import WeatherPanel from "./WeatherPanel";

function Welcome() {
    const apiKey = "311762ba11c494164f939186b39a89b6";
    let zipURL, zipValue, zipLat, zipLon;
    let time = "Morning";
    let name = "John Smith";

    const [input, setInput] = useState("");
    const [data, setData] = useState(null);
    const [zip, setZip] = useState(null);

    const handleInput = (event) => {
        setInput(event.target.value);
    };

    const handleClick = async () => {
        await submitForm(input);
    };

    const submitForm = async (value) => {
        zipValue = value;
        zipURL = `https://api.openweathermap.org/geo/1.0/zip?zip=${value},US&appid=${apiKey}`;
        const zipResponse = await fetch(zipURL);
        const zipJSON = await zipResponse.json();
        zipLat = zipJSON.lat;
        zipLon = zipJSON.lon;
        if (zipLat == undefined || zipLon == undefined) {
            alert("Invalid zip code.");
        }
        const weatherDataURL = `https://api.openweathermap.org/data/2.5/weather?lat=${zipLat}&lon=${zipLon}&units=imperial&appid=${apiKey}`;
        const weatherResponse = await fetch(weatherDataURL);
        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        setData(weatherData);
        setZip(zipValue)
    };

    return (
        <div className="parent-div">
            <Navigation />
            <div className="welcome-top">
                <div className="welcome-time">
                    <h1>Good {time}</h1>
                </div>
                <div className="welcome-user">
                    <h1>Welcome, {name}</h1>
                </div>
            </div>
            <div id="form">
                <input id="text-box" value={input} onChange={handleInput} placeholder="Enter Zip Code" />

                <button id="click-button" onClick={handleClick}>Submit</button>
            </div>
            <div>
                {data && (
                    <WeatherPanel
                        weatherJSON={data}
                        zipCode={zip} />
                )}
            </div>
        </div>
    );
}

export default Welcome;
