import { combineReducers, createStore } from "redux";
import countries from "./countries";
import global from "./global";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  countries,
  global,
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
