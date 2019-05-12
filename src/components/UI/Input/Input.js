import React from "react";

const TodosInput = ({ input, type, classes }) => {
  console.log(input);
  return <input {...input} type={type} className={classes} />;
};

export default TodosInput;
