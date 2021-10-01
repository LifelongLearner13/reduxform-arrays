import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "./store";
import showResults from "./showResults";
import FieldArraysForm from "./FieldArraysForm";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Field Arrays</h2>
      <FieldArraysForm onSubmit={showResults} />
      <Values form="fieldArrays" />
    </div>
  </Provider>,
  rootEl
);
