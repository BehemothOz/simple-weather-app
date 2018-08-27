import React from "react";
import "./style.css";

export default function WeatherDisplay(props) {
  const { weatherData } = props;
  const weather = { ...weatherData.weather }[0];
  const icon = "http://openweathermap.org/img/w/" + weather.icon + ".png";

  return (
    <div className="weather-info">
      <img src={icon} alt={weatherData.description} />
      <div className="info-line title">
        <b>{weather.main}</b> in <b>{weatherData.name}</b>
      </div>
      <p className="info-line">
        <b>Current</b>: {weatherData.main.temp}°
      </p>
      <p className="info-line info-small">
        <b>High</b>: {weatherData.main.temp_max}°
      </p>
      <p className="info-line info-small">Low: {weatherData.main.temp_min}°</p>
      <p className="info-line info-small">
        Wind Speed: {weatherData.wind.speed} mi/hr
      </p>
    </div>
  );
}
