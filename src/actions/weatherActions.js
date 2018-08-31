import * as types from '../constants/actionTypes';

/*
  State
{
  selectedCityId: 0, // id city - default 536203
  cityWeather: null, // object - weather for city
  isLoading: false
}

*/

// ----- Взаимодействие с пользователем ---------
export function selectCity(id) {
  return {
    type: types.SELECT_CITY,
    payload: {
      id
    }
  };
}

// ------ Сетевые запросы --------

// Запрос

export function requestWeather(id) {
  return {
    type: types.REQUEST_WEATHER,
    payload: id
  };
}

// Ответ

export function receiveWeather(json) {
  return {
    type: types.RECEIVE_WEATHER,
    payload: {
      cityWeather: json
    }
  };
}

// ----- TODO Обработка ошибок запрос ---------------

// ---- Thunk генератор -----------
export function fetchWeather(id) {
  return function(dispatch) {
    dispatch(requestWeather(id));

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(json => dispatch(receiveWeather(json)));
  };
}
