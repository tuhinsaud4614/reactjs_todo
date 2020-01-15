import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";

import { Provider } from "react-redux";
import App from "./App";
import todoReducer from "./store/reducers/todo";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "@fortawesome/fontawesome-free/css/all.min.css";


const rootReducers = combineReducers({
  todo: todoReducer
});

const store = createStore(rootReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
