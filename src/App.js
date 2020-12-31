import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>BrighterDays CodeLab BootCamp 2020</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textTransform: "uppercase", textDecoration: "none" }}
        >
          Become a Dev
        </a>
      </header>
    </div>
  );
}

export default App;
