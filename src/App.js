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

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              
              <li>
                <Link to="/play">Play</Link>
              </li>

              <li>
                <Link to="/picture">Picture</Link>
              </li>
              
            </ul>
          </nav>

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
