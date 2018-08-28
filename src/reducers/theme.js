const initialState = {
  theme: "dark"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_THEME": {
      return { ...state, theme: action.theme };
    }
    default:
      return state;
  }
}
