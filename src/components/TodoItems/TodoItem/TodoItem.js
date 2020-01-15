import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem = props => {
  return (
    <div className={classes.TodoItem}>
      {
        <i
          onClick={props.taskClicked}
          className={`far ${
            props.isChecked ? "fa-check-circle " + classes.Checked : "fa-circle"
          } ${classes.TodoItemIcon}`}
        ></i>
      }

      <div className={classes.TodoItemContent}>
        {props.isEditable ? (
          <input
            className={classes.EditTodo}
            value={props.editedValue}
            onChange={props.onEditedChanged}
            onKeyPress={props.onEditedKeyPressed}
          />
        ) : (
          <>
            <p
              className={props.isChecked ? classes.CheckedText : ""}
              onDoubleClick={props.onEdited}
            >
              {props.children}
            </p>
            <i className={`fa fa-times ${classes.TodoItemIconClose}`} onClick={props.onDeleted}></i>
          </>
        )}
      </div>
    </div>
  );
};
export default TodoItem;
