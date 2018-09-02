import * as types from '../constants/actionTypes';
import getUrl from '../api/api';
// console.log(getUrl('id', 5));
// Request
export function requestWeather(id) {
  return {
    type: types.REQUEST_WEATHER,
    payload: id
  };
}

// Receive
export function receiveWeather(json) {
  return {
    type: types.RECEIVE_WEATHER,
    payload: {
      weatherCity: json
    }
  };
}

// Thunk генератор
export function fetchWeather(id) {
  return function(dispatch) {
    dispatch(requestWeather(id));

    return fetch(getUrl('id', id)).then(response =>
      response.json().then(json =>
        setTimeout(() => {
          dispatch(receiveWeather(json));
        }, 500)
      )
    );
  };
}
