import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../../store/actions/index";
import TodosForm from "../TodosForm/TodosForm";

const AddTodo = ({ addTodo, userID }) => {
  const onSubmit = formValues => {
    const addTodoValues = {
      ...formValues,
      userID
    }
    addTodo(addTodoValues);
  };
  return <TodosForm onSubmit={onSubmit} />;
};

const mapStateToProps = state => {
  return {
    userID: state.auth.userID
  }
}

export default connect(
  mapStateToProps,
  {
    addTodo
  }
)(AddTodo);
