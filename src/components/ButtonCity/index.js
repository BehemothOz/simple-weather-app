import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.css';

export default function ButtonCity(props) {
  // const { id, name } = props.weatherData;
  // const { currentCityId } = props;

  // const styleButton = classNames({
  //   button: true,
  //   active: currentCityId === id
  // });
  console.log(props);
  // console.log(`props buttons`, props);
  return (
    // <button className={styleButton} onClick={props.getWeatherForCity(id)}>
    //   {name}
    // </button>
    <button
      className="button"
      // onClick={() => props.getWeatherForCity(props.city.newId)}
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
