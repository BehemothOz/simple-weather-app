import React, { Component } from 'react';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import * as themeActions from './actions/themeActions';

import './App.css';

import { cities } from './shared/cities';
import { composeUrl } from './helpers/composeUrl';
import WeatherDisplay from './components/WeatherDisplay';
import ButtonCity from './components/ButtonCity';
import ButtonSwitch from './components/ButtonSwitch';
import Loading from './components/Loading';

class App extends Component {
  state = {
    currentCityId: 536203, // id city
    cityWeather: null,
    isLoading: false
  };

  componentDidMount() {
    // this.getWeatherForCity(this.state.currentCityId)();
  }

  getWeatherForCity = param => () => {
    console.log(param);
    // const url = composeUrl(`id`, param);
    // fetch(url)
    //   .then(res => res.json())
    //   .then(json => {
    //     this.setState(
    //       { cityWeather: json, currentCityId: param, isLoading: false },
    //       this.hideLoadingIndicator
    //     );
    //   });

    const url = `https://jsonplaceholder.typicode.com/posts/${param}`;

    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState(
          { cityWeather: json, currentCityId: param, isLoading: false },
          this.hideLoadingIndicator
        );
      });
  };

  hideLoadingIndicator() {
    setTimeout(() => {
      this.setState({ isLoading: true });
    }, 500);
  }

  renderCitiesList() {
    return cities.map(city => (
      <ButtonCity
        key={city.id}
        city={city}
        currentCityId={this.state.currentCityId}
        getWeatherForCity={this.getWeatherForCity}
      />
    ));
  }

  render() {
    const {
      theme
      // themeActions: { setTheme }
    } = this.props;

    const { isLoading, cityWeather } = this.state;

    const themeStyle = classNames({
      'app-container': true,
      [`theme-${theme}`]: true
    });

    const weatherDisplay = isLoading ? (
      <WeatherDisplay weatherData={cityWeather} key="weatherDisplay" />
    ) : (
      <Loading key="loading" />
    );

    return (
      <div className={themeStyle}>
        <div className="cities-group">{this.renderCitiesList()}</div>
        <div className="button-switch-container">
          {/* <ButtonSwitch switchTheme={setTheme} /> */}
          <ButtonSwitch switchTheme={this.props.switchTheme} />
        </div>
        <button>inc</button>
        <button>reset</button>
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

// Чтение состояния
// Трансформация текущего Redux-состояния хранилища в props
function mapStateToProps(state) {
  console.log(state);
  return {
    theme: state.theme
  };
}

// Функция отправки действия (dispatch actions)
function mapDispatchToProps(dispatch) {
  return {
    // themeActions: bindActionCreators(themeActions, dispatch)
    switchTheme: () => dispatch(themeActions.setTheme())
  };
}

// App - ээто контейнер
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
