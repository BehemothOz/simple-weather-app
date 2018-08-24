import React, { Component } from "react";
import "./App.css";
import { cities } from "./shared/cities";
import { composeUrl } from "./helpers/composeUrl";
import WeatherDisplay from "./WeatherDisplay";

class App extends Component {
  state = {
    theme: `light`,
    currentCity: 536203 // id city
  };

  getWeatherForCity = param => () => {
    const url = composeUrl(`id`, param);
    fetch(url)
      .then(res => res.json())
      .then(json => {
        // this.setState({ activePlace: json });
        console.log(json);
      });
  };

  handleSwitchTheme = () => {
    this.setState({ theme: this.state.theme === `dark` ? `ligth` : `dark` });
  };

  render() {
    return (
      <div
        className={`app-container ${
          this.state.theme === `dark` ? `theme-dark` : `theme-light`
        }`}
      >
        {cities.map(city => (
          <button key={city.id} onClick={this.getWeatherForCity(city.id)}>
            {city.name}
          </button>
        ))}
        <button onClick={this.switchTheme}>Button</button>

        {/* <WeatherDisplay qq={this.state.activePlace} /> */}
      </div>
    );
  }
}

export default App;
