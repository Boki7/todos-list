import React from "react";
import { connect } from "react-redux";
import { addTodoToBase } from "../../../store/actions/index";
import TodosForm from "../TodosForm/TodosForm";

const AddTodo = ({ addTodoToBase }) => {
  const onSubmit = formValues => {
    addTodoToBase(formValues);
  };
  return <TodosForm onSubmit={onSubmit} />;
};

export default connect(
  null,
  {
    addTodoToBase
  }
)(AddTodo);
