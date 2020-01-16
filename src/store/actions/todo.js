import * as actions from "./actionTypes";

export const addTodo = todoData => ({
  type: actions.ADD_TODO,
  value: todoData
});

export const fetchTodo = allTodo => ({
  type: actions.FETCH_TODO,
  value: allTodo
});

export const clearCompletedTodo = () => ({
  type: actions.CLEAR_COMPLETED_TODO
});

export const addAsACompleteTodo = taskId => ({
  type: actions.ADD_AS_A_COMPLETE_TODO,
  taskId: taskId
});

export const editTodo = (taskId, updatedTaskValue) => ({
  type: actions.EDIT_TODO,
  taskId: taskId,
  updatedTaskValue: updatedTaskValue
});

export const deleteTodo = taskId => ({
  type: actions.DELETE_TODO,
  taskId: taskId
});
