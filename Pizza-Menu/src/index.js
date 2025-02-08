import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  const anything = <p>hello world</p>;
  return <h1>Hello {true ? <p>hello world</p> : anything} world</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
