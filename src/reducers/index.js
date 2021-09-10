import { combineReducers } from "redux";
import toggleReducer from "./toggleReducer";
import themeReducer from "./themeReducer";
import photosReducer from "./photosReducer";

export default combineReducers({
  toggle: toggleReducer,
  theme: themeReducer,
  imagesCollection: photosReducer,
});
