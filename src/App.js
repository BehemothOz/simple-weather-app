import React, { Component } from "react";
import classNames from "classnames";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import "./App.css";

import { cities } from "./shared/cities";
import { composeUrl } from "./helpers/composeUrl";
import WeatherDisplay from "./components/WeatherDisplay";
import ButtonCity from "./components/ButtonCity";
import ButtonSwitch from "./components/ButtonSwitch";
import Loading from "./components/Loading";

class App extends Component {
  state = {
    theme: `light`,
    currentCityId: 536203, // id city
    cityWeather: null,
    isLoading: false
  };

  componentDidMount() {
    this.getWeatherForCity(this.state.currentCityId)();
  }

  getWeatherForCity = param => () => {
    const url = composeUrl(`id`, param);
    this.setState({ isLoading: false });

    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({ cityWeather: json }, this.hideLoadingIndicator);
      });
  };

  hideLoadingIndicator() {
    setTimeout(() => {
      this.setState({ isLoading: true });
    }, 500);
  }

  handleSwitchTheme = () => {
    this.setState({ theme: this.state.theme === `dark` ? `ligth` : `dark` });
  };

  render() {
    const themeStyle = classNames({
      "app-container": true,
      "theme-dark": this.state.theme === "dark",
      "theme-light": this.state.theme !== "dark"
    });

    const citiesList = cities.map(city => (
      <ButtonCity
        key={city.id}
        city={city}
        getWeatherForCity={this.getWeatherForCity}
      />
    ));

    const weatherDisplay = this.state.isLoading ? (
      <WeatherDisplay
        weatherData={this.state.cityWeather}
        key="weatherDisplay"
      />
    ) : (
      <Loading key="loading" />
    );

    return (
      <div className={themeStyle}>
        <div className="cities-group">{citiesList}</div>
        <div className="button-switch-container">
          <ButtonSwitch switchTheme={this.handleSwitchTheme} />
        </div>
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
