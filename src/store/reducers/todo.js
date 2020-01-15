import { uuid } from "uuidv4";

import * as actions from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      let newState = JSON.parse(JSON.stringify(state));
      newState.push({
        id: uuid(),
        value: action.value,
        isComplete: false
      });
      return newState;
    case actions.CLEAR_COMPLETED_TODO:
      let clearedTodo = JSON.parse(JSON.stringify(state));
      clearedTodo = clearedTodo.filter(item => !item.isComplete);
      return clearedTodo;
    case actions.ADD_AS_A_COMPLETE_TODO:
      let allTodo = JSON.parse(JSON.stringify(state));
      allTodo = allTodo.map(item => {
        if (item.id === action.taskId) {
          item.isComplete = !item.isComplete;
        }
        return item;
      });
      return allTodo;
    case actions.EDIT_TODO:
      let newEditedTodo = JSON.parse(JSON.stringify(state));
      newEditedTodo = newEditedTodo.map(item => {
        if (item.id === action.taskId && !item.isComplete) {
          item.value = action.updatedTaskValue;
        }
        return item;
      });
      return newEditedTodo;
    case actions.DELETE_TODO:
      let newDeletedTodo = JSON.parse(JSON.stringify(state));
      newDeletedTodo = newDeletedTodo.filter(item => item.id !== action.taskId);
      return newDeletedTodo;
    default:
      return state;
  }
};

export default reducer;
