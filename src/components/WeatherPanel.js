import React, { useState } from "react";
import "../css/WeatherPanel.css";
import Navigation from "./Navigation";

function WeatherPanel({ weatherJSON, zipCode }) {
  console.log(zipCode);
  return (
    <div id="weather-panel">
      <div id="weather-container-1">
        {/* <h2 id="zip-code">Zip Code: {zipCode}</h2> */}
        <h2 id="place">{weatherJSON.name}</h2>

        <h1 id="description">{weatherJSON.weather[0].description.toUpperCase()}</h1>

        <img id="icon"
          src={`https://openweathermap.org/img/wn/${weatherJSON.weather[0].icon}@4x.png`}
        />
      </div>
      <div id="weather-container-2">
        <div>
          <h2>Temperature</h2>
          <h3 id="temperature"> {Math.round(weatherJSON.main.temp)}°F</h3>
        </div>

        <div>
          <h2>Low</h2>
          <h3 id="low-temp">{Math.round(weatherJSON.main.temp_min)}°F</h3>
        </div>

        <div>
          <h2>High</h2>
          <h3 id="high-temp">{Math.round(weatherJSON.main.temp_max)}°F</h3>
        </div>

        <div>
          <h2>Feels like</h2>
          <h3 id="feels-like">
            {Math.round(weatherJSON.main.feels_like)}°F
          </h3>
        </div>
      </div>
      <div id="weather-container-3">
        <div>
          <h2>Wind Speed</h2>
          <h3 id="wind-speed">
            {weatherJSON.wind.speed} mph
          </h3>
        </div>
        <div>
          <h2>Wind Pressure</h2>
          <h3 id="wind-pressure">
            {weatherJSON.main.pressure} mb
          </h3>
        </div>
        <div>
          <h2>Humidity</h2>
          <h3 id="humidity">
            {weatherJSON.main.humidity}%
          </h3>
        </div>
      </div>

    </div>
  );
}

export default WeatherPanel;
