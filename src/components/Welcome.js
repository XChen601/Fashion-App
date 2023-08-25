import React, { useState } from "react";
import "../css/Welcome.css";
import Navigation from "./Navigation";
import WeatherPanel from "./WeatherPanel";
import { NavbarBrand } from "reactstrap";

function Welcome() {
  const apiKey = "311762ba11c494164f939186b39a89b6";
  let zipURL;
  let zipValue;
  let zipLat;
  let zipLon;
  let fetchedWeatherData;

  const [input, setInput] = useState("");
  const [data, setData] = useState(null);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    submitForm(input);
  };

  const submitForm = (value) => {
    zipValue = value;
    zipURL = `https://api.openweathermap.org/geo/1.0/zip?zip=${value},US&appid=${apiKey}`;
    fetch(zipURL)
      .then(function (reponse) {
        return reponse.json();
      })
      .then(function (zipJSON) {
        zipLat = zipJSON.lat;
        zipLon = zipJSON.lon;
        if (zipLat == undefined || zipLon == undefined) {
          alert("Invalid zip code.");
          return;
        }
        const weatherDataURL = `https://api.openweathermap.org/data/2.5/weather?lat=${zipLat}&lon=${zipLon}&units=imperial&appid=${apiKey}`;
        fetchWeather(weatherDataURL);
      });
  };

  const fetchWeather = async (url) => {
    try {
      const response = await fetch(url);
      const weatherData = await response.json();
      console.log(weatherData);
      setData(weatherData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="parent-div">
      <Navigation />
      <div className="welcome-top">
        <div className="welcome-time">
          <h1>Good Morning</h1>
        </div>
        <div className="welcome-user">
          <h1>Welcome, Bryan Rivera</h1>
        </div>
        <img src={require("./img/logo.png")} />
      </div>
      <div>
        <input value={input} onChange={handleInput} />

        <button onClick={handleClick}>Submit</button>
      </div>
      <div>
        {data && (
          <WeatherPanel weatherJSON={fetchedWeatherData} zipCode={zipValue} />
        )}
        <Navigation />
      </div>
    </div>
  );
}

export default Welcome;
