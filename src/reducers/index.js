import { combineReducers } from "redux";
import toggleReducer from "./toggleReducer";
import themeReducer from "./themeReducer";

export default combineReducers({
  toggle: toggleReducer,
  theme: themeReducer,
});
