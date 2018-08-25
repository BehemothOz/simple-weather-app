import React from "react";

import "./style.css";

export default function ButtonSwitch(props) {
  return <button className="icon-button" onClick={props.switchTheme} />;
}
