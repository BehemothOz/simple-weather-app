import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

export default function ButtonCity(props) {
  const { id, name, selectedCity, getWeatherForCity } = props;

  const styleButton = classNames({
    button: true,
    active: selectedCity === id
  });

  return (
    <button className={styleButton} onClick={() => getWeatherForCity(id)}>
      {name}
    </button>
  );
}

PropTypes.ButtonCity = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  selectedCity: PropTypes.number.isRequired,
  getWeatherForCity: PropTypes.func.isRequired
};
