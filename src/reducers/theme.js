import * as types from '../constants/actionTypes';
const initialState = 'dark';

export default function(state = initialState, action) {
  switch (action.type) {
    case types.SET_THEME: {
      return state === 'dark' ? 'light' : 'dark';
    }
    default:
      return state;
  }
}
