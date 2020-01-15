import React from "react";
import classes from "./AddTodoField.module.css";

const AddTodoField = props => {
  return (
    <input
      value={props.onChangedValue}
      onChange={props.onChanged}
      onKeyPress={props.onKeyPressed}
      name="task"
      className={classes.TodoField}
      placeholder={props.placeHolderValue}
    />
  );
};

export default AddTodoField;
