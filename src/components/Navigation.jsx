import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { Button, ButtonGroup } from "react-bootstrap";

  export default function GenerateButton() {
    return (
        <Router>
        <div>
          <Navigation />
          <ButtonGroup toggle size = "lg" style = {{
            
          }}>
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
    );
  }