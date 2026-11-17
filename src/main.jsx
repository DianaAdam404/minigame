import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Form from "./App.jsx";
import debuggerhook from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
        <Form />
        <debuggerHook />
    </StrictMode>,
);
