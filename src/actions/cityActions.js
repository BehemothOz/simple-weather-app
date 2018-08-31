import * as types from '../constants/actionTypes';

export function selectCity(id) {
  return {
    type: types.SELECT_CITY,
    payload: {
      id
    }
  };
}
