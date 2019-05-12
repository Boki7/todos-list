import React from "react";

const Todo = ({ title, classes, styles }) => {
  return (
    <p className={classes} style={styles}>
      {title}
    </p>
  );
};

export default Todo;
