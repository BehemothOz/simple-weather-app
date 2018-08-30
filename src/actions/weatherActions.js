/*
  State
{
  selectedCityId: 0, // id city - default 536203
  cityWeather: null, // object - weather for city
  isLoading: false
}

*/

// ----- Взаимодействие с пользователем ---------
export const SELECT_CITY = 'SELECT_CITY';
export function selectCity(id) {
  return {
    type: SELECT_CITY,
    payload: {
      id
    }
  };
}

// ------ Сетевые запросы --------

// Запрос
export const REQUEST_WEATHER = 'REQUEST_WEATHER';

export function requestWeather(id) {
  return {
    type: REQUEST_WEATHER,
    payload: id
  };
}

// Ответ
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';

export function receiveWeather(json) {
  return {
    type: RECEIVE_WEATHER,
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
