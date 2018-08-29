const inititalState = 0;

export default function(state = inititalState, action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER': {
      return state + 1;
    }
    case 'RESET_COUNTER': {
      return 0;
    }
    default:
      return state;
  }
}
