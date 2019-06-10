import React from "react";

const TodosInput = ({ input, type, classes }) => {
  return <input {...input} type={type} className={classes} />;
};

export default TodosInput;
