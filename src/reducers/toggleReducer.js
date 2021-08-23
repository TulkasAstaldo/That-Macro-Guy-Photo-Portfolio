import { TOGGLE_DROPDOWN, TOGGLE_NAV } from "../actions/actionTypes";

const INITIAL_STATE = {
  isOpen: false,
  openNav: false,
};

const toggleReducer = (state = { INITIAL_STATE }, action) => {
  switch (action.type) {
    case TOGGLE_DROPDOWN: {
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    }
    case TOGGLE_NAV: {
      if (state.isOpen && state.openNav) {
        return {
          ...state,
          openNav: !state.openNav,
          isOpen: !state.isOpen,
        };
      } else
        return {
          ...state,
          openNav: !state.openNav,
        };
    }
    default:
      return state;
  }
};

export default toggleReducer;
