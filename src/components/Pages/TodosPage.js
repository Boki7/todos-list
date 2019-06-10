import React from "react";
import AddTodo from "../Todos/AddTodo/AddTodo";
import TodoList from "../Todos/TodosList/TodosList";

const TodosPage = () => {
  return (
    <>
      <AddTodo />
      <TodoList />
    </>
  );
};

export default TodosPage;
