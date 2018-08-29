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
    // theme: `light`,
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
  };

  // hideLoadingIndicator() {
  //   setTimeout(() => {
  //     this.setState({ isLoading: true });
  //   }, 500);
  // }

  // handleSwitchTheme = () => {
  //   this.setState({ theme: this.state.theme === `dark` ? `ligth` : `dark` });
  // };

  handleSwitchTheme = () => {
    this.props.pageActions.setTheme(`ligth`);
  };

  render() {
    console.log(this.props);

    const themeStyle = classNames({
      'app-container': true,
      'theme-dark': this.props.theme === 'dark',
      'theme-light': this.props.theme !== 'dark'
    });

    // const citiesList = cities.map(city => (
    //   <ButtonCity
    //     key={city.id}
    //     city={city}
    //     currentCityId={this.state.currentCityId}
    //     getWeatherForCity={this.getWeatherForCity}
    //   />
    // ));

    // const weatherDisplay = this.state.isLoading ? (
    //   <WeatherDisplay
    //     weatherData={this.state.cityWeather}
    //     key="weatherDisplay"
    //   />
    // ) : (
    //   <Loading key="loading" />
    // );

    return (
      <div className={themeStyle}>
        {/* <div className="cities-group">{citiesList}</div> */}
        <div className="button-switch-container">
          {/* <ButtonSwitch switchTheme={this.handleSwitchTheme} /> */}
          {/* <ButtonSwitch switchTheme={this.props.pageActions.setTheme} /> */}
        </div>
        <button>inc</button>
        <button>reset</button>
        <div />
        {/* <div className="info-container">
          <ReactCSSTransitionGroup
            transitionName="switch"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          > */}
        {/* {weatherDisplay} */}
        {/* </ReactCSSTransitionGroup> */}
        {/* </div> */}
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     theme: state.theme.theme
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     pageActions: bindActionCreators(themeActions, dispatch)
//   };
// }

// export default connect(
//   mapStateToProps
//   // mapDispatchToProps
// )(App);

export default App;
