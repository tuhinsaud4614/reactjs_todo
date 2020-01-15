import React from "react";
import classes from "./TodoItems.module.css";
import TodoItem from "./TodoItem/TodoItem";

const TodoItems = props => {
  let filteredTodo = [];
  filteredTodo = props.items.filter(item => {
    if (props.todoType === "all") {
      return item;
    } else if (props.todoType === "active") {
      return !item.isComplete;
    } else if (props.todoType === "completed") {
      return item.isComplete;
    } else {
      return item;
    }
  });
  return (
    <div className={classes.TodoItems}>
      {filteredTodo.map(item => {
        return (
          <TodoItem
            onEdited={() => props.onEdited(item.id, item.value)}
            taskClicked={() => props.taskClicked(item.id)}
            key={item.id}
            isChecked={item.isComplete}
            onEditedChanged={props.onEditedChanged}
            onEditedKeyPressed={props.onEditedKeyPressed}
            isEditable={
              props.isEditableId === item.id &&
              props.isEditableId !== "" &&
              !item.isComplete
            }
            editedValue={props.editedValue}
            onDeleted={() => props.onDeleted(item.id)}
          >
            {item.value}
          </TodoItem>
        );
      })}
    </div>
  );
};

export default TodoItems;
