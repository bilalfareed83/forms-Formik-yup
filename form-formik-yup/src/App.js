import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FormikForm } from "./components/FormikForm";
import { FormikFormWithYup } from "./components/FormikFormWithYup";
function App() {
  return (
    <div className="App">
      <h2>Login Form</h2>
      {/* <FormikForm /> */}
      <FormikFormWithYup />
    </div>
  );
}

export default App;
