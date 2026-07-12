import {THEME} from "./themeActionTypes.js";

export default function themeReducer(state = {theme: "light"}, action) {
  switch(action.type) {
    case THEME: return {...state, theme : state.theme === "light" ? "dark" : "light"
    };
    default: return state;
  }
}
