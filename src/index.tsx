import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ModalState } from "./context/ModalContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    {/* 
      // обернули APP в ModalState - и теперь все что находиться внутри этого стейта (ModalState) 
      // получает доступ до той логики которая у нас есть в контексте ModalContext 
    */}
    <ModalState>
      <App />
    </ModalState>
  </BrowserRouter>
);
