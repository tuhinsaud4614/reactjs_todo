import React, { Component } from "react";
import classes from "./AddTodo.module.css";
import AddTodoField from "../../components/AddTodoField/AddTodoField";

import * as actionCreators from "../../store/actions/index";

import { connect } from "react-redux";

class AddTodo extends Component {
  state = {
    task: ""
  };
  onChangeHandler = event => {
    this.setState({
      task: event.target.value
    });
  };

  onKeyPressHandler = event => {
    // console.log();
    if (event.key === "Enter" && this.state.task !== "") {
      this.props.addTodoIntoTodo(this.state.task);
      this.setState({ task: "" });
    }
  };
  render() {
    return (
      <div className={classes.AddTodo}>
        {this.props.todo.length === 0 ? (
          <span className={classes.PlacedIcon}></span>
        ) : (
          <i className={`fa fa-angle-down ${classes.TodoViewIcon}`}></i>
        )}
        <AddTodoField
          onChanged={this.onChangeHandler}
          onChangedValue={this.state.task}
          onKeyPressed={this.onKeyPressHandler}
          placeHolderValue="What need to be done?"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo
});

const mapDispatchToProps = dispatch => ({
  addTodoIntoTodo: val => dispatch(actionCreators.addTodo(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
