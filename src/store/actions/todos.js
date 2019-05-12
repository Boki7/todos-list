import uniqid from "uniqid";

export const addTodo = formValues => {
  const todo = {
    ...formValues,
    id: uniqid(),
    isTouched: false
  };
  return {
    type: "ADD_TODO",
    payload: todo
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
