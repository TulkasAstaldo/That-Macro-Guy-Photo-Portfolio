import { TOGGLE } from "../actions/actionTypes";

const INITIAL_STATE = {
  dropdown: false,
  nav: false,
};

const toggleReducer = (state = { INITIAL_STATE }, action) => {
  switch (action.type) {
    case TOGGLE:
      console.log(action.payload);
      return {
        ...state,
        [action.payload]: !state[action.payload],
      };
    default:
      return state;
  }
};

export default toggleReducer;
