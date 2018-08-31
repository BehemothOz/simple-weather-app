import * as types from '../constants/actionTypes';

export function setLoading() {
  return {
    type: 'SET_LOAD'
  };
}

export function removeLoading() {
  return {
    type: 'REMOVE_LOAD'
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
    dispatch(setLoading());
    dispatch(requestWeather(id));

    setTimeout(() => {
      dispatch(removeLoading());
    }, 2000);

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(json => dispatch(receiveWeather(json)));
  };
}

// function time() {
//   setTimeout(() => {
//     dispatch()
//   }, 4000)
// }
