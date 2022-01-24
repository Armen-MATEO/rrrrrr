import { StrictMode } from "react";
import ReactDOM from "react-dom";
import ReducerTutorial from './App'
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ReducerTutorial />
  </StrictMode>,
  rootElement
);
