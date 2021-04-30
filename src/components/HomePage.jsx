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
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    backGroundColor: "#030838",
    width: "40%",
  }
  
  const buttonStyle = {
    fontFamily: 'Ubuntu',
    padding:"1%",
    fontSize:"150%"
  }
  
  const pStyle = {
  fontSize: "150%",
  textAlign: "center",
  backgroundColor: "#49baf2",
  fontFamily: 'Ubuntu',
  fontColor:"#100125"
}

  return (
    <div>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap" rel="stylesheet"></link>

      <Router>
        <Switch>
          <Route path="/play">
            <Picture />

            <div style={{margin:"5%"}}>
              <NavLink to="/">
                <Button
                  block
                  variant="secondary"
                  style={buttonStyle}
                  >
                  Back to Home
                </Button>
              </NavLink>
            </div>
          </Route>
          <Route path ="/">
            <img src="https://i.imgur.com/kmlzo6m.png" alt = "b0rken" align="middle" style={imgStyle}></img>
            <p style={pStyle}>PicPredict is a game that tests how much you sweat the details!</p>
            <p style={pStyle}>Start with a super zoomed-in image and guess what it is!</p>
            <p style={pStyle}>Get it right and get a point!</p>
            <p style={pStyle}>Try to guess as many pictures as you can within the time limit!</p>
            

            <div style={{margin:"5%"}}>
              <NavLink to="/play">
                <Button
                  block
                  style={buttonStyle}
                  >
                  Play!
                </Button>
              </NavLink>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
