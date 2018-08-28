import React from "react";
import PropTypes from "prop-types";

import "./style.css";

export default function WeatherDisplay(props) {
  const { weatherData } = props;
  const weather = { ...weatherData.weather }[0];
  const icon = "https://openweathermap.org/img/w/" + weather.icon + ".png";

  return (
    <div className="weather-info">
      <img className="icon" src={icon} alt={weatherData.description} />
      <div className="info-line title">
        <b>{weather.main}</b> in <b>{weatherData.name}</b>
      </div>
      <div className="info-line current">
        <b>Current</b>: {weatherData.main.temp}°
      </div>
      <div className="info-line info-small">
        <b>High</b>: {weatherData.main.temp_max}°
      </div>
      <div className="info-line info-small">
        <b>Low</b>: {weatherData.main.temp_min}°
      </div>
      <div className="info-line info-small">
        <b>Wind Speed</b>: {weatherData.wind.speed} mi/hr
      </div>
    </div>
  );
}

PropTypes.WeatherDisplay = {
  weatherData: PropTypes.object.isRequired
};
