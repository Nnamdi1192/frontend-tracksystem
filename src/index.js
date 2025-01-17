import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter as Router } from "react-router-dom";
import { UiContextProvider } from "./context/UiContext/UiContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <UiContextProvider>
          <App />
        </UiContextProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);
