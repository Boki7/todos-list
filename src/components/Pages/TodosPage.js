import React, { Component } from "react";
import AddTodo from "../Todos/AddTodo/AddTodo";
import TodoList from "../Todos/TodosList/TodosList";
import { connect } from "react-redux";
import { fetchTodos } from "../../store/actions/index";

class TodosPage extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <>
        <AddTodo />
        <TodoList />
      </>
    );
  }
}

export default connect(
  null,
  { fetchTodos }
)(TodosPage);
