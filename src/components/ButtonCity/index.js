import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

export default function ButtonCity(props) {
  // const { id, name } = props.weatherData;
  const { selectedCity } = props;

  const styleButton = classNames({
    button: true,
    active: selectedCity === props.testId
  });
  // console.log(`props buttons`, props);
  return (
    // <button className={styleButton} onClick={props.getWeatherForCity(id)}>
    //   {name}
    // </button>
    <button
      className={styleButton}
      onClick={() => props.getWeatherForCity(props.testId)}
    >
      {`Button ${props.testId}`}
    </button>
  );
}

// PropTypes.ButtonCity = {
//   city: PropTypes.shape({
//     id: PropTypes.number,
//     name: PropTypes.string
//   }).isRequired,
//   currentCityId: PropTypes.number.isRequired,
//   getWeatherForCity: PropTypes.func.isRequired
// };
