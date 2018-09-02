import * as types from '../constants/actionTypes';

const initialState = {
  selectedCity: 536203,
  isLoading: true,
  weatherCity: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_WEATHER:
      return {
        ...state,
        ...{
          isLoading: true,
          selectedCity: action.payload
        }
      };
    case types.RECEIVE_WEATHER:
      return {
        ...state,
        ...{
          isLoading: false,
          weatherCity: action.payload.weatherCity
        }
      };
    default:
      return state;
  }
};
