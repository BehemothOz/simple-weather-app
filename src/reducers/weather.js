import * as types from '../constants/actionTypes';

export default function(state = { isLoading: false, cityWeater: {} }, action) {
  switch (action.type) {
    case types.REQUEST_WEATHER:
      return { ...state, isLoading: true };
    case types.RECEIVE_WEATHER:
      return {
        ...state,
        isLoading: false,
        cityWeater: action.payload.cityWeather
      };
    default:
      return state;
  }
}
