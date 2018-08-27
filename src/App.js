import React, { Component } from "react";
import classNames from "classnames";
import "./App.css";
import { cities } from "./shared/cities";
import { composeUrl } from "./helpers/composeUrl";
import WeatherDisplay from "./WeatherDisplay";
import ButtonCity from "./ButtonCity";
import ButtonSwitch from "./ButtonSwitch";

class App extends Component {
  state = {
    theme: `light`,
    currentCityId: 536203, // id city
    cityWeather: null
  };

  componentDidMount() {
    this.getWeatherForCity(this.state.currentCityId)();
  }

  getWeatherForCity = param => () => {
    const url = composeUrl(`id`, param);
    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({ cityWeather: json });
      });
  };

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

    const weatherDisplay = this.state.cityWeather ? (
      <WeatherDisplay weatherData={this.state.cityWeather} />
    ) : null;

    return (
      <div className={themeStyle}>
        <div className="cities-group">{citiesList}</div>
        <div className="button-switch-container">
          <ButtonSwitch switchTheme={this.handleSwitchTheme} />
        </div>
        {weatherDisplay}
      </div>
    );
  }
}

export default App;
