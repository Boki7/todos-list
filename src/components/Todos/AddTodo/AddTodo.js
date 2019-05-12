import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../../store/actions/index";
import TodosForm from "../TodosForm/TodosForm";

const AddTodo = ({ addTodo }) => {
  const onSubmit = formValues => {
    addTodo(formValues);
  };
  return <TodosForm onSubmit={onSubmit} />;
};

export default connect(
  null,
  {
    addTodo
  }
)(AddTodo);
