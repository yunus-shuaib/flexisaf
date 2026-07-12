import {createStore} from "redux";
import themeReducer from "./themeReducer.js";

const store = createStore(themeReducer);

export default store;