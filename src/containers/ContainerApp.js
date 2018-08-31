import { connect } from 'react-redux';

import App from '../App';

import * as themeActions from '../actions/themeActions';
import * as weatherActions from '../actions/weatherActions';
import * as cityActions from '../actions/cityActions';

// Чтение состояния
// Трансформация текущего Redux-состояния хранилища в props
function mapStateToProps(state) {
  return {
    theme: state.theme,
    selectedCity: state.selectedCity,
    isLoading: state.weather.isLoading,
    weatherCity: state.weather.cityWeather
  };
}

// Функция отправки действия (dispatch actions)
function mapDispatchToProps(dispatch) {
  return {
    // themeActions: bindActionCreators(themeActions, dispatch)
    switchTheme: () => dispatch(themeActions.setTheme()),
    getWeatherForCity: id => dispatch(weatherActions.fetchWeather(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
