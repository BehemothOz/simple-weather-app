import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default function WeatherDisplay(props) {
  const { description, name, main, wind } = props;
  const weather = { ...props.weather }[0];
  const icon = 'https://openweathermap.org/img/w/' + weather.icon + '.png';

  return (
    <div className="weather-info">
      <img className="icon" src={icon} alt={description} />
      <div className="info-line title">
        <b>{weather.main}</b> in <b>{name}</b>
      </div>
      <div className="info-line current">
        <b>Current</b>: {main.temp}°
      </div>
      <div className="info-line info-small">
        <b>High</b>: {main.temp_max}°
      </div>
      <div className="info-line info-small">
        <b>Low</b>: {main.temp_min}°
      </div>
      <div className="info-line info-small">
        <b>Wind Speed</b>: {wind.speed} mi/hr
      </div>
    </div>
  );
}

WeatherDisplay.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  main: PropTypes.object,
  wind: PropTypes.object
};
