import React from "react";

import "./style.css";

export default function ButtonCity(props) {
  const { id, name } = props.city;
  return (
    <button
      className={`button ${props.currentCityId === id ? "active" : ""}`}
      onClick={props.getWeatherForCity(id)}
    >
      {name}
    </button>
  );
}
