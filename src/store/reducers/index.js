import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import todosReducer from "./todos";
import authReducer from "./auth";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  todos: todosReducer
});
