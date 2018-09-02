import { connect } from 'react-redux';

import App from '../components/App/App';

import * as themeActions from '../actions/themeActions';
import * as weatherActions from '../actions/weatherActions';

// Чтение состояния
// Трансформация текущего Redux-состояния хранилища в props
function mapStateToProps(state) {
  console.log(state);
  return {
    theme: state.theme,
    selectedCity: state.weather.selectedCity,
    isLoading: state.weather.isLoading,
    weatherCity: state.weather.weatherCity
  };
}

// Функция отправки действия (dispatch actions)
function mapDispatchToProps(dispatch) {
  return {
    switchTheme: () => dispatch(themeActions.setTheme()),
    getWeatherForCity: id => dispatch(weatherActions.fetchWeather(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
