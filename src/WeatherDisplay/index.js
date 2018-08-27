import React, { Component } from "react";
import "./style.css";

export default class WeatherDisplay extends Component {
  render() {
    const { weatherData } = this.props;
    const weather = { ...weatherData.weather }[0];
    const icon = "http://openweathermap.org/img/w/" + weather.icon + ".png";

    console.log(weather);
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
        <p className="info-line info-small">
          Low: {weatherData.main.temp_min}°
        </p>
        <p className="info-line info-small">
          Wind Speed: {weatherData.wind.speed} mi/hr
        </p>
      </div>
    );
  }
}

/* <p>{JSON.stringify(this.props.qq)}</p> */
