import * as types from '../constants/actionTypes';

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

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
      response =>
        response.json().then(json =>
          setTimeout(() => {
            dispatch(receiveWeather(json));
          }, 500)
        )
    );
  };
}
