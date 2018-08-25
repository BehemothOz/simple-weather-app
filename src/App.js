import React, { Component } from "react";
import classNames from "classnames";
import "./App.css";
import { cities } from "./shared/cities";
import { composeUrl } from "./helpers/composeUrl";
import WeatherDisplay from "./WeatherDisplay";
import ButtonCity from "./ButtonCity";

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
    const themeStyle = classNames({
      "app-container": true,
      "theme-dark": this.state.theme === "dark",
      "theme-light": this.state.theme === "light"
    });

    const citiesList = cities.map(city => (
      <ButtonCity
        key={city.id}
        city={city}
        getWeatherForCity={this.getWeatherForCity}
      />
    ));

    return (
      <div className={themeStyle}>
        <div className="cities-group">{citiesList}</div>
        <button className="btnq" onClick={this.handleSwitchTheme}>
          Button
        </button>

        {/* <WeatherDisplay qq={this.state.activePlace} /> */}
      </div>
      // <div class="main-container">
      //   <div class="content-container">
      //     <div class="content-area">
      //       <button className="btn btn-link">Button 1</button>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default App;
