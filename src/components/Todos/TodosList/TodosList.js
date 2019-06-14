import React from "react";
import { connect } from "react-redux";
import { checkTodo, deleteTodo } from "../../../store/actions/index";
import Button from "../../UI/Button/Button";
import Icon from "../../UI/Icon/Icon";
import Todo from "../Todo/Todo";
import "./TodosList.css";

const TodosList = ({ todos, deleteTodo, checkTodo, userID }) => {
  if (todos.length === 0) {
    return <div className="text-center">Add Todos!</div>;
  }

  const editTodo = todo => {
    const editedTodo = {
      ...todo,
      isTouched: !todo.isTouched
    }
    checkTodo(editedTodo)
  }

  const renderList = () => {
    const styles = {
      todoChecked: {
        textDecoration: "line-through",
        color: "#28A745"
      },
      todoUnchecked: {
        textDecoration: "none"
      }
    };
    return todos.filter(todo => todo.userID === userID).map(todo => {
      return (
        <li
          className="list-group-item d-flex justify-content-between align-items-center font-italic"
          key={todo.id}
        >
          <Icon
            click={() => editTodo(todo)}
            classes={[
              todo.isTouched ? "fas fa-check-square" : "fas fa-square",
              "check-icon"
            ].join(" ")}
          />\
          
          <Todo
            title={todo.todoTitle}
            classes="m-0"
            styles={todo.isTouched ? styles.todoChecked : styles.todoUnchecked}
          />
          <Button
            title="delete"
            classes="btn btn-danger"
            click={() => deleteTodo(todo.id)}
          />
        </li>
      );
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-10">
          <ul className="list-group">{renderList()}</ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: Object.values(state.todos),
    userID: state.auth.userID
  };
};

export default connect(
  mapStateToProps,
  {
    deleteTodo,
    checkTodo
  }
)(TodosList);


