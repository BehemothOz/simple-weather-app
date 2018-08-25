import React from "react";

import "./style.css";

export default function ButtonCity(props) {
  const { id, name } = props.city;
  return (
    <button className="button" onClick={props.getWeatherForCity(id)}>
      {name}
    </button>
  );
}
