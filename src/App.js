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

function App() {
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setLoading(false);
  }, [setLoading]);

  const imgStyle = {
    width: "20%",
  }

  if (loading) {
    return <Spinner animation="border" style={{ margin: "50%" }} />;
  } else if (playing) {
    return <Picture />;
  } else {
    return (
      <div className="App">

      <img src="https://i.imgur.com/kmlzo6m.png" alt = "b0rken" align="middle" style={imgStyle}></img>

        <p>PicPredict is a game that tests how much you sweat the details!</p>
        <p>Start with a super zoomed-in image and guess what it is!</p>

        <Router>
          <NavLink to="/play">
            <Button
              block
              style={{ fontFamily: "Monaco" }}
              onClick={() => setPlaying(true)}
            >
              Play!
            </Button>
          </NavLink>

          <Switch>
            <Route path="/play">
              <Picture />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
