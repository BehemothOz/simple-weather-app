import * as types from '../constants/actionTypes';

export default function(state = { isLoading: true, cityWeather: {} }, action) {
  switch (action.type) {
    case types.REQUEST_WEATHER:
      return { ...state, isLoading: false, cityWeather: {} };
    case types.RECEIVE_WEATHER:
      return {
        ...state,
        isLoading: true,
        cityWeather: action.payload.cityWeather
      };
    default:
      return state;
  }
}
