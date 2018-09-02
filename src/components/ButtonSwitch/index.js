import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default function ButtonSwitch(props) {
  return <button className="icon-button" onClick={props.switchTheme} />;
}

ButtonSwitch.propTypes = {
  switchTheme: PropTypes.func.isRequired
};
