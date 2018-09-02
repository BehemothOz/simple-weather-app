import * as types from '../constants/actionTypes';

const initialState = {
  selectedCity: 536203,
  isLoading: false,
  weatherCity: {}
};

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

const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_LOADING':
      return false;
    case 'HIDE_LOADING':
      return true;
    default:
      return state;
  }
};

const selectedCity = (state = 536203, action) => {
  switch (action.type) {
    case types.SELECT_CITY:
      return action.payload;
    default:
      return state;
  }
};

const weatherCity = (state = {}, action) => {
  switch (action.type) {
    case types.REQUEST_WEATHER:
      // return { ...state };
      return state;
    case types.RECEIVE_WEATHER:
      return {
        ...state,
        cityWeather: action.payload.weatherCity
      };
    default:
      return state;
  }
};

export default function(state = initialState, action) {
  return {
    selectedCity: selectedCity(state.selectedCity, action),
    isLoading: isLoading(state.isLoading, action),
    cityWeather: weatherCity(state.weatherCity, action)
  };
  // switch (action.type) {
  //   case types.REQUEST_WEATHER:
  //     return { ...state };
  //   case types.RECEIVE_WEATHER:
  //     return {
  //       ...state,
  //       cityWeather: action.payload.cityWeather
  //     };
  //   default:
  //     return state;
  // }
}
