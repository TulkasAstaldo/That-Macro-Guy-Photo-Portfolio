import {
  SET_BNW,
  SET_MACRO,
  SET_STREET,
  SET_SUNSET,
  SET_DEFAULT,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  isMacro: false,
  isSunset: false,
  isStreet: false,
  isBnW: false,
};

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MACRO:
      console.log("setting macro to" + !state.isMacro);
      return {
        ...state,
        isMacro: true,
        isSunset: false,
        isStreet: false,
        isBnW: false,
      };

    case SET_SUNSET:
      return {
        ...state,
        isMacro: false,
        isSunset: true,
        isStreet: false,
        isBnW: false,
      };
    case SET_STREET:
      return {
        ...state,
        isMacro: false,
        isSunset: false,
        isStreet: true,
        isBnW: false,
      };
    case SET_BNW:
      return {
        ...state,
        isMacro: false,
        isSunset: false,
        isStreet: false,
        isBnW: true,
      };
    case SET_DEFAULT:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};

export default themeReducer;
