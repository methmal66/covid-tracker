import { combineReducers, createStore } from "redux";
import countries from "./countries";
import choosenCountry from "./choosenCountry";
import global from "./global";
import option from "./option";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  countries,
  choosenCountry,
  global,
  option,
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
