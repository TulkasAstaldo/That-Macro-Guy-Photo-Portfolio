import {
  FETCH_PHOTOS,
  SET_BNW,
  SET_MACRO,
  SET_SUNSET,
  SET_URBAN,
} from "../actions/actionTypes";

const INITIAL_STATE = {
  photos: [],
  macro: [],
  sunset: [],
  urban: [],
  bnw: [],
};

const photosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PHOTOS:
      return { ...state, photos: action.payload };
    case SET_MACRO:
      let macroArray = state.photos.filter((img) => img.type === "macro");
      console.log(macroArray);
      return {
        ...state,
        macro: [...macroArray],
      };
    case SET_SUNSET:
      let sunsetArray = state.photos.filter((img) => img.type === "sunset");
      console.log(sunsetArray);
      return {
        ...state,
        sunset: [...sunsetArray],
      };
    case SET_URBAN:
      let urbanArray = state.photos.filter((img) => img.type === "urban");
      console.log(urbanArray);
      return {
        ...state,
        urban: [...urbanArray],
      };
    case SET_BNW:
      let bnwArray = state.photos.filter((img) => img.type === "bnw");
      console.log(bnwArray);
      return {
        ...state,
        bnw: [...bnwArray],
      };
    default:
      return state;
  }
};

export default photosReducer;
