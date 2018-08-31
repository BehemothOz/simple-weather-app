import React, { Component } from 'react';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

// import * as themeActions from './actions/themeActions';
// import * as weatherActions from './actions/weatherActions';
// import * as cityActions from './actions/cityActions';

import './App.css';

import { cities } from './shared/cities';
import { composeUrl } from './helpers/composeUrl';
import WeatherDisplay from './components/WeatherDisplay';
import ButtonCity from './components/ButtonCity';
import ButtonSwitch from './components/ButtonSwitch';
import Loading from './components/Loading';

class App extends Component {
  componentDidMount() {
    // this.getWeatherForCity(this.state.currentCityId)();
  }

  // getWeatherForCity = param => () => {
  // const url = composeUrl(`id`, param);
  // fetch(url)
  //   .then(res => res.json())
  //   .then(json => {
  //     this.setState(
  //       { cityWeather: json, currentCityId: param, isLoading: false },
  //       this.hideLoadingIndicator
  //     );
  //   });
  // const url = `https://jsonplaceholder.typicode.com/posts/${param}`;
  // fetch(url)
  //   .then(res => res.json())
  //   .then(json => {
  //     this.setState(
  //       { cityWeather: json, currentCityId: param, isLoading: false },
  //       this.hideLoadingIndicator
  //     );
  //   });
  // };

  // hideLoadingIndicator() {
  //   setTimeout(() => {
  //     this.setState({ isLoading: true });
  //   }, 500);
  // }

  renderCitiesList() {
    return cities.map(city => (
      <ButtonCity
        key={city.newId}
        testId={city.newId}
        // city={city}
        // currentCityId={this.state.currentCityId}
        // getWeatherForCity={this.props.getWeatherForCity}
      />
    ));
  }

  render() {
    console.log(this.props);
    const { theme, isLoading, weatherCity } = this.props;

    const themeStyle = classNames({
      'app-container': true,
      [`theme-${theme}`]: true
    });

    const weatherDisplay = isLoading ? (
      <WeatherDisplay weatherData={weatherCity} key="weatherDisplay" />
    ) : (
      <Loading key="loading" />
    );

    return (
      <div className={themeStyle}>
        <div className="cities-group">{this.renderCitiesList()}</div>
        <div className="button-switch-container">
          {/* <ButtonSwitch switchTheme={setTheme} /> */}
          {/* <ButtonSwitch switchTheme={this.props.switchTheme} /> */}
        </div>
        <div />
        <div className="info-container">
          {/* <ReactCSSTransitionGroup
            transitionName="switch"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          > */}
          {weatherDisplay}
          {/* </ReactCSSTransitionGroup> */}
        </div>
      </div>
    );
  }
}

export default App;
