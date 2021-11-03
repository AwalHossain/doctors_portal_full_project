import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home/Home";
import Services from "./pages/Home/Services/Services";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
