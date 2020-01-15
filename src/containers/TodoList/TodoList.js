import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./TodoList.module.css";
import ControllerBtn from "../../components/ControllerBtn/ControllerBtn";
import TodoItems from "../../components/TodoItems/TodoItems";

import * as actionCreators from "../../store/actions/index";

class TodoList extends Component {
  state = {
    controllers: {
      all: {
        label: "All",
        isActive: true
      },

      active: {
        label: "Active",
        isActive: false
      },
      completed: {
        label: "Completed",
        isActive: false
      }
    },
    todoType: "all",
    isEditableId: "",
    editedValue: ""
  };

  onClickHandler = (event, controllerType) => {
    let newControllers = JSON.parse(JSON.stringify(this.state.controllers));
    let newTodoType = this.state.todoType;
    for (let key in newControllers) {
      if (key === controllerType) {
        newTodoType = controllerType;
        newControllers[key].isActive = true;
      } else {
        newControllers[key].isActive = false;
      }
    }
    this.setState({
      controllers: newControllers,
      todoType: newTodoType
    });
  };

  onClearCompletedClickHandler = () => {
    this.props.clearCompletedTodo();
  };

  taskClickHandler = taskId => {
    this.props.addAsACompleteTodo(taskId);
  };

  onEditHandler = (taskId, taskValue) => {
    this.setState({ isEditableId: taskId, editedValue: taskValue });
  };

  onEditedChangeHandler = event => {
    this.setState({ editedValue: event.target.value });
  };

  onEditedKeyPressHandler = event => {
    if (event.key === "Enter" && this.state.editedValue !== "") {
      this.props.editTodo(this.state.isEditableId, this.state.editedValue);
      this.setState({ editedValue: "", isEditableId: "" });
    }
  };

  onDeleteHandler = taskId => {
    this.props.deleteToo(taskId);
  };

  render() {
    const allControllers = [];
    for (let key in this.state.controllers) {
      allControllers.push({
        key,
        ...this.state.controllers[key]
      });
    }

    const isNotCompletedTodo = this.props.todo.filter(item => !item.isComplete);
    const isCompletedTodo = this.props.todo.filter(item => item.isComplete);

    return (
      <div className={classes.TodoList}>
        <TodoItems
          items={this.props.todo}
          taskClicked={this.taskClickHandler}
          todoType={this.state.todoType}
          onEdited={this.onEditHandler}
          isEditableId={this.state.isEditableId}
          onEditedChanged={this.onEditedChangeHandler}
          editedValue={this.state.editedValue}
          onEditedKeyPressed={this.onEditedKeyPressHandler}
          onDeleted={this.onDeleteHandler}
        />
        <div className={classes.TodosController}>
          <p>
            {isNotCompletedTodo.length > 0 ? isNotCompletedTodo.length : "0"}{" "}
            items left
          </p>
          <div className={classes.TodosControllerMain}>
            {allControllers.map((item, index, arr) => {
              return (
                <ControllerBtn
                  key={item.key}
                  onClicked={event => this.onClickHandler(event, item.key)}
                  name={item.key}
                  isActive={item.isActive}
                  isDisabled={false}
                >
                  {item.label}
                </ControllerBtn>
              );
            })}
          </div>
          <ControllerBtn
            onClicked={this.onClearCompletedClickHandler}
            name="clearCompleted"
            isActive={false}
            isDisabled={isCompletedTodo.length === 0}
          >
            Clear Completed
          </ControllerBtn>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo
});

const mapDispatchToProps = dispatch => ({
  clearCompletedTodo: () => dispatch(actionCreators.clearCompletedTodo()),
  addAsACompleteTodo: taskId =>
    dispatch(actionCreators.addAsACompleteTodo(taskId)),
  editTodo: (taskId, updatedTaskValue) =>
    dispatch(actionCreators.editTodo(taskId, updatedTaskValue)),
  deleteToo: taskId => dispatch(actionCreators.deleteTodo(taskId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
