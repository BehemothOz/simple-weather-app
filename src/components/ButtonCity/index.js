import React from "react";
import classNames from "classnames";

import "./style.css";

export default function ButtonCity(props) {
  const { id, name } = props.city;
  const { currentCityId } = props;

  const styleButton = classNames({
    button: true,
    active: currentCityId === id
  });

  return (
    <button className={styleButton} onClick={props.getWeatherForCity(id)}>
      {name}
    </button>
  );
}
