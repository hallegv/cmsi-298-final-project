import "./App.css";
import Picture from "./components/Picture";
import HomePage from "./components/HomePage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { Button } from "react-bootstrap";

function App() {
  const buttonStyle = {
    fontFamily: "Ubuntu",
    padding:"1%",
    fontSize:"150%"
  }

  return (
    <Router>
      <Switch>
        <Route path="/play">
          <div style={{backgroundColor:"#F2F2F2"}}>
          <Picture />
          
          <div style={{margin:"5%"}}>
            <NavLink to="/">
              <Button
                block
                variant="secondary"
                style={buttonStyle}
                >
                Back to home
              </Button>
            </NavLink>
          </div>
          </div>
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
