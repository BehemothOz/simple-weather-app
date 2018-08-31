import * as types from '../constants/actionTypes';

export default function(state = 'dark', action) {
  switch (action.type) {
    case types.SET_THEME: {
      return state === 'dark' ? 'light' : 'dark';
    }
    default:
      return state;
  }
}
