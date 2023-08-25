import React, { useState } from "react";
import "../css/WeatherPanel.css";
import Navigation from "./Navigation";

function WeatherPanel({ weatherJSON, zipCode }) {
  console.log("");
  return (
    <div>
      <div>Zip Code: {zipCode}</div>

      <div>{weatherJSON.weather[0].description.toUpperCase()}</div>

      <img
        src={`https://openweathermap.org/img/wn/${weatherJSON.weather[0].icon}@4x.png`}
      />

      <div>{Math.round(weatherJSON.main.temp)}°F</div>

      <div>{Math.round(weatherJSON.main.temp_min)}°F</div>

      <div>{Math.round(weatherJSON.main.temp_max)}°F</div>

      <div>{Math.round(weatherJSON.main.feels_like)}°F</div>

      <div>{weatherJSON.wind.speed} mph</div>

      <div>{weatherJSON.main.pressure} mb</div>

      <div>{weatherJSON.main.humidity}%</div>
    </div>
  );
}

export default WeatherPanel;
