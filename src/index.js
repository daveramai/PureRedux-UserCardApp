import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store";
import "./index.css";

const render = function () {
  ReactDOM.render(<App />, document.getElementById("root"));
};

render();
store.subscribe(render); //to use redux to subscribe to state changes and rerender the App component

// ReactDOM.render(<App />, document.getElementById('root'));
