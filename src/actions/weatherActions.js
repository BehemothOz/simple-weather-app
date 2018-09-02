import * as types from '../constants/actionTypes';

// Select city id
export function selectCity(id) {
  return {
    type: types.SELECT_CITY,
    payload: id
  };
}

export function setLoading() {
  return {
    type: 'SHOW_LOADING'
  };
}

export function removeLoading() {
  return {
    type: 'HIDE_LOADING'
  };
}

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
      cityWeather: json
    }
  };
}

// Thunk генератор
export function fetchWeather(id) {
  return function(dispatch) {
    dispatch(selectCity(id));
    dispatch(setLoading());
    dispatch(requestWeather(id));

    // setTimeout(() => {
    //   dispatch(removeLoading());
    // }, 2000);

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(json => dispatch(receiveWeather(json)));
  };
}
