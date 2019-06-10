import uniqid from "uniqid";
import axios from "axios";

export const addTodo = formValues => {
  return {
    type: "ADD_TODO",
    formValues
  };
};

export const deleteTodo = id => {
  return {
    type: "DELETE_TODO",
    payload: id
  };
};

export const checkTodo = id => {
  return {
    type: "CHECK_TODO",
    payload: id
  };
};

export const getTodos = todos => {
  return {
    type: "GET_TODOS",
    todos: todos
  };
};

// export const deleteTodoFromBase = id => {
//   return async dispatch => {
//     const response = axios.delete("");
//   };
// };

export const fetchTodos = () => {
  return async dispatch => {
    const response = await axios.get(
      "https://todolist-b3ae6.firebaseio.com/todos.json"
    );
    dispatch(getTodos(response.data));
  };
};

export const addTodoToBase = formValues => {
  return async dispatch => {
    const todo = {
      ...formValues,
      id: uniqid(),
      isTouched: false
    };
    const response = await axios.post(
      "https://todolist-b3ae6.firebaseio.com/todos.json",
      todo
    );
    dispatch(addTodo(JSON.parse(response.config.data)));
  };
};
