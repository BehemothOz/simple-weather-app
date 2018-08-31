export default function(state = false, action) {
  switch (action.type) {
    case 'SET_LOAD':
      return false;
    case 'REMOVE_LOAD':
      return true;
    default:
      return state;
  }
}
