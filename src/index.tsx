import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <>
    <GlobalStyles />
    <Router>
      <App />
    </Router>
  </>
  // </React.StrictMode>
);
