import React from "react";
import Header from "./Header/Header";
import AddTodo from "./Todos/AddTodo/AddTodo";
import TodosList from "./Todos/TodosList/TodosList";

const App = () => {
  return (
    <div>
      <Header />
      <AddTodo />
      <TodosList />
    </div>
  );
};

export default App;
