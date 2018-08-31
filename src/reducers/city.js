import * as types from '../constants/actionTypes';

export default function(state = 536203, action) {
  switch (action.type) {
    case types.SELECT_CITY:
      return action.payload.id;
    default:
      return state;
  }
}
