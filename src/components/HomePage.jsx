import React from "react";
import Button from "react-bootstrap/Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Picture from "./Picture"

export default function HomePage() {
  const imgStyle = {
    width: "20%",
  }
  
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/play">
            <Picture />

            <NavLink to="/">
              <Button
                block
                style={{ fontFamily: "Monaco" }}
                >
                Back to home
              </Button>
            </NavLink>
          </Route>
          <Route path ="/">
            <img src="https://i.imgur.com/kmlzo6m.png" alt = "b0rken" align="middle" style={imgStyle}></img>
            <p>PicPredict is a game that tests how much you sweat the details!</p>
            <p>Start with a super zoomed-in image and guess what it is!</p>

            <NavLink to="/play">
              <Button
                block
                style={{ fontFamily: "Monaco" }}
                >
                Play!
              </Button>
            </NavLink>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
