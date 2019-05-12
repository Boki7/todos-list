import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import todosReducer from "./todos";

export default combineReducers({
  form: formReducer,
  todos: todosReducer
});
