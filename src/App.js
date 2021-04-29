import "./App.css";
import Picture from "./components/Picture";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import HomePage from "./components/HomePage";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setLoading(false);
  }, [setLoading]);

  if (loading) {
    return <Spinner animation="border" style={{ margin: "50%" }} />;
  } else {
    return (
      <Router>
        <Switch>
          <Route path="/play">
            <Picture />

            <NavLink to="/play">
              <Button
                block
                style={{ fontFamily: "Monaco" }}
                >
                Back to home
              </Button>
            </NavLink>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
