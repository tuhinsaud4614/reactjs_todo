import { uuid } from "uuidv4";

import * as actions from "../actions/actionTypes";

const setOrRemoveLocalStorage = todoData => {
  if (todoData.length === 0) {
    localStorage.removeItem("todoLists");
  } else {
    localStorage.setItem("todoLists", JSON.stringify(todoData));
  }
};

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_TODO:
      let oldAllTodo = action.value;
      return oldAllTodo;
    case actions.ADD_TODO:
      let newState = JSON.parse(JSON.stringify(state));
      newState.push({
        id: uuid(),
        value: action.value,
        isComplete: false
      });
      setOrRemoveLocalStorage(newState);
      // localStorage.setItem("todoLists", JSON.stringify(newState));
      return newState;
    case actions.CLEAR_COMPLETED_TODO:
      let clearedTodo = JSON.parse(JSON.stringify(state));
      clearedTodo = clearedTodo.filter(item => !item.isComplete);
      // localStorage.setItem("todoLists", JSON.stringify(clearedTodo));
      setOrRemoveLocalStorage(clearedTodo);
      return clearedTodo;
    case actions.ADD_AS_A_COMPLETE_TODO:
      let allTodo = JSON.parse(JSON.stringify(state));
      allTodo = allTodo.map(item => {
        if (item.id === action.taskId) {
          item.isComplete = !item.isComplete;
        }
        return item;
      });
      // localStorage.setItem("todoLists", JSON.stringify(allTodo));
      setOrRemoveLocalStorage(allTodo);
      return allTodo;
    case actions.EDIT_TODO:
      let newEditedTodo = JSON.parse(JSON.stringify(state));

      newEditedTodo = newEditedTodo.map(item => {
        if (item.id === action.taskId && !item.isComplete) {
          item.value = action.updatedTaskValue;
        }
        return item;
      });
      setOrRemoveLocalStorage(newEditedTodo);
      // localStorage.setItem("todoLists", JSON.stringify(newEditedTodo));

      return newEditedTodo;
    case actions.DELETE_TODO:
      let newDeletedTodo = JSON.parse(JSON.stringify(state));
      newDeletedTodo = newDeletedTodo.filter(item => item.id !== action.taskId);
      setOrRemoveLocalStorage(newDeletedTodo);
      // localStorage.setItem("todoLists", JSON.stringify(newDeletedTodo));
      return newDeletedTodo;
    default:
      return state;
  }
};

export default reducer;
