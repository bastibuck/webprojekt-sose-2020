import React from "react";
import logo from "./logo.svg";
import html5 from "./html5.svg";
import "./App.css";

function App() {
  const [count, setCount] = React.useState(0);

  const clickHandler = () => {
    setCount(count + 1);
  };

  const languages = ["JavaScript", "Rust", "C#", "Swift"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="area main-area">
        <ul>
          {languages.map((lang) => (
            <li>{lang}</li>
          ))}
        </ul>
      </div>

      <div className="area btn-area">
        <div>
          <p>Button clicked {count} times.</p>
          <button onClick={clickHandler}>Hit me!</button>
          {count > 10 && <p>Wooooow! Soviele Klicks</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
