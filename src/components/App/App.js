import React, { Component } from 'react';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { bindActionCreators } from 'redux';

import './App.css';

import { cities } from '../../api/cities';

import WeatherDisplay from '../WeatherDisplay';
import ButtonCity from '../ButtonCity';
import ButtonSwitch from '../ButtonSwitch';
import Loading from '../Loading';

class App extends Component {
  componentDidMount() {
    // this.getWeatherForCity(this.state.currentCityId)();
  }

  // hideLoadingIndicator() {
  //   setTimeout(() => {
  //     this.setState({ isLoading: true });
  //   }, 500);
  // }

  renderCitiesList() {
    const { selectedCity } = this.props;
    return cities.map(city => (
      <ButtonCity
        key={city.newId}
        testId={city.newId}
        // city={city}
        selectedCity={selectedCity}
        getWeatherForCity={this.props.getWeatherForCity}
      />
    ));
  }

  render() {
    // console.log(this.props);
    const { theme, isLoading, weatherCity } = this.props;

    const themeStyle = classNames({
      'app-container': true,
      [`theme-${theme}`]: true
    });

    const weatherDisplay = !isLoading ? (
      <WeatherDisplay weatherData={weatherCity} key="weatherDisplay" />
    ) : (
      <Loading key="loading" />
    );

    return (
      <div className={themeStyle}>
        <div className="cities-group">{this.renderCitiesList()}</div>
        <div className="button-switch-container">
          <ButtonSwitch switchTheme={this.props.switchTheme} />
        </div>
        <div />
        <div className="info-container">
          <ReactCSSTransitionGroup
            transitionName="switch"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            {weatherDisplay}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default App;
