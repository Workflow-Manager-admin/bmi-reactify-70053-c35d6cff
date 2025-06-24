import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

// Mount the App to a root element (for standard web/SPA usage)
/* eslint-disable no-undef */
const container =
  document.getElementById("root") ||
  (() => {
    const node = document.createElement("div");
    node.id = "root";
    document.body.appendChild(node);
    return node;
  })();
/* eslint-enable no-undef */

createRoot(container).render(<App />);
