import {
  SET_BNW,
  SET_DEFAULT,
  SET_MACRO,
  SET_URBAN,
  SET_SUNSET,
  TOGGLE_DROPDOWN,
} from "./actionTypes";
import { TOGGLE_NAV } from "./actionTypes";

export const toggleDropDown = () => ({
  type: TOGGLE_DROPDOWN,
});

export const toggleNav = () => ({
  type: TOGGLE_NAV,
});

export const setMacro = () => ({
  type: SET_MACRO,
});

export const setSunset = () => ({
  type: SET_SUNSET,
});

export const setUrban = () => ({
  type: SET_URBAN,
});

export const setBnW = () => ({
  type: SET_BNW,
});

export const setDefault = () => ({
  type: SET_DEFAULT,
});
