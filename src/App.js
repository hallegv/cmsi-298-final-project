import "./App.css";
import Game from "./components/Game";
import Picture from "./components/Picture";
import HomePage from "./components/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { Button, ButtonGroup } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <ButtonGroup toggle size="lg">
            <NavLink to={'/'}>
              <Button variant="info">Home</Button>
            </NavLink>

            <NavLink to={'/play'}>
              <Button variant="success">Play</Button>
            </NavLink>

            <NavLink to="/picture">
              <Button variant="light">Picture</Button>
            </NavLink>
          </ButtonGroup>

          <Switch>
            <Route path="/picture">
              <Picture />
            </Route>
            <Route path="/play">
              <Game />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
          </div>
      </Router>
</div>
  );
  
}

export default App;
