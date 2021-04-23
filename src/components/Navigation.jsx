import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, ButtonGroup } from "react-bootstrap";
import { Picture } from "./Picture";

export default function GenerateButton() {
  return (
    <Router>
      <div>
        {/* <Navigation /> */}
        <ButtonGroup toggle size="lg" style={{}}>
          <Button variant="info">
            <Link to="/">Home</Link>
          </Button>
          <Button variant="success">
            <Link to="/play">Play</Link>
          </Button>
          <Button variant="light">
            <li>
              <Link to="/picture">Picture</Link>
            </li>
          </Button>
        </ButtonGroup>

        <Switch>
          <Route path="./Picture" component={Picture}>
            <Picture />
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
  );
}
