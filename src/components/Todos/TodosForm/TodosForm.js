import React from "react";
import { connect } from "react-redux";
import { Field, formValueSelector, reduxForm, reset } from "redux-form";
import Button from "../../UI/Button/Button";
import TodosInput from "../../UI/Input/Input";

const TodosForm = props => {
  const { handleSubmit, onSubmit, todoValue } = props;
  const onSubmitHandler = formValues => {
    onSubmit(formValues);
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="input-group mb-3">
              <Field
                name="todoTitle"
                type="text"
                component={TodosInput}
                classes="form-control"
              />
              <div className="input-group-append">
                <Button
                  title="Add"
                  classes="btn btn-dark"
                  disabled={!todoValue}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const afterSubmit = (result, dispatch) => dispatch(reset("todos"));
const selector = formValueSelector("todos");
const wrappedComponent = reduxForm({
  form: "todos",
  onSubmitSuccess: afterSubmit
})(TodosForm);

export default connect(state => {
  const todoValue = selector(state, "todoTitle");
  return {
    todoValue
  };
})(wrappedComponent);
