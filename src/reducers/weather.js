/*
  State
{
  selectedCityId: 0, // id city - default 536203
  cityWeather: null, // object - weather for city
  isLoading: false
}

*/

import {
  SELECT_CITY,
  REQUEST_WEATHER,
  RECEIVE_WEATHER
} from '../actions/weatherActions';

// initial state for selectedCity = 536203;
function selectedCity(state = 536203, action) {
  switch (action.type) {
    case SELECT_CITY:
      return action.payload.id;
    default:
      return state;
  }
}

// initial state: isLoading, cityWeater
function weather(state = { isLoading: false, cityWeater: {} }, action) {
  switch (action.type) {
    case REQUEST_WEATHER:
      return { ...state, isLoading: true };
    case RECEIVE_WEATHER:
      return {
        ...state,
        isLoading: false,
        cityWeater: action.payload.cityWeather
      };
    default:
      return state;
  }
}

export default { selectedCity, weather };
