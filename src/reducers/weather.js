import * as types from '../constants/actionTypes';

// export default function(state = { isLoading: false, cityWeather: {} }, action) {
//   switch (action.type) {
//     case types.REQUEST_WEATHER:
//       return { ...state, isLoading: false, cityWeather: {} };
//     case types.RECEIVE_WEATHER:
//       return {
//         ...state,
//         isLoading: true,
//         cityWeather: action.payload.cityWeather
//       };
//     default:
//       return state;
//   }
// }

export default function(state = { cityWeather: {} }, action) {
  switch (action.type) {
    case types.REQUEST_WEATHER:
      return { ...state };
    case types.RECEIVE_WEATHER:
      return {
        ...state,
        cityWeather: action.payload.cityWeather
      };
    default:
      return state;
  }
}
