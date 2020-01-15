import React from "react";
import "./App.css";
import AddTodo from "./containers/AddTodo/AddTodo";
import TodoList from "./containers/TodoList/TodoList";

import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <h1 className="Title">todos</h1>
      <div className="TodoSection">
        <AddTodo />
        {props.todo.length === 0 ? null : <TodoList />}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(mapStateToProps)(App);
