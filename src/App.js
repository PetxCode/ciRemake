import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./components/Home";
import Body from "./components/Body/Body";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Body} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
