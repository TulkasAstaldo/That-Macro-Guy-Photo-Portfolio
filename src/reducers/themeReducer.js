import {
  // SET_BNW,
  // SET_MACRO,
  // SET_URBAN,
  // SET_SUNSET,
  SET_THEME,
  SET_DEFAULT,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  Macro: false,
  Sunset: false,
  Urban: false,
  BnW: false,
};

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case SET_MACRO:
    //   return {
    //     ...state,
    //     isMacro: true,
    //     isSunset: false,
    //     isUrban: false,
    //     isBnW: false,
    //   };

    // case SET_SUNSET:
    //   return {
    //     ...state,
    //     isMacro: false,
    //     isSunset: true,
    //     isUrban: false,
    //     isBnW: false,
    //   };
    // case SET_URBAN:
    //   return {
    //     ...state,
    //     isMacro: false,
    //     isSunset: false,
    //     isUrban: true,
    //     isBnW: false,
    //   };
    // case SET_BNW:
    //   return {
    //     ...state,
    //     isMacro: false,
    //     isSunset: false,
    //     isUrban: false,
    //     isBnW: true,
    //   };
    case SET_THEME: {
      return {
        ...INITIAL_STATE,
        [action.payload]: !state[action.payload],
      };
    }
    case SET_DEFAULT:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};

export default themeReducer;
