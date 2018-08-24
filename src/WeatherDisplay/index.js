import React, { Component } from "react";
import "./style.css";

export default class WeatherDisplay extends Component {
  render() {
    // console.log(this.props);
    const { qq: weatherData } = this.props;
    console.log(weatherData);

    return (
      <div>
        <h1>
          {/* {weather.main} in {weatherData.name} */}
          {/* <img src={iconUrl} alt={weatherData.description} /> */}
        </h1>
        {/* <p>Current: {weatherData.main.temp}°</p>
        <p>High: {weatherData.main.temp_max}°</p>
        <p>Low: {weatherData.main.temp_min}°</p>
        <p>Wind Speed: {weatherData.wind.speed} mi/hr</p> */}
      </div>
    );
  }
}

/* <p>{JSON.stringify(this.props.qq)}</p> */
