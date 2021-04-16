import "./App.css";
import Game from "./components/Game";
import Picture from "./components/Picture";
import HomePage from "./components/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button, ButtonGroup } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ButtonGroup toggle size = "lg">
            <Button variant="info"><Link to="/">Home</Link></Button>
            <Button variant="success"><Link to="/play">Play</Link></Button>
            <Button variant="light"><Link to="/picture">Picture</Link></Button>
          </ButtonGroup>
  

          <Switch>
          <Route path="/picture">
              <Image />
            </Route>
            <Route path="/play">
              <Play />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          </div>
      </Router>
</div>
  );
  
}

function Home() {
  return <HomePage />;
}

function Play() {
  return <Game />;
}

function Image() {
  return <Picture />;
}

export default App;
