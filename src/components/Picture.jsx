import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Countdown from "react-countdown";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

export default function Picture() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pics, setPics] = useState([]);
  const [zoom, setZoom] = useState(3);
  const [searchTerm, setSearchTerm] = useState("");
  const [solution, setSolution] = useState("");
  const [points, setPoints] = useState(0);
  const [timer, setTimer] = useState(Date.now() + 20000);
  // const [gameOver, setGameOver] = useState(false);

  const sstk = require("shutterstock-api");
  const api = new sstk.ImagesApi();

  const queries = {
    animals: [
      "hippo",
      "dog",
      "cat",
      "dolphin",
      "walrus",
      "lizard",
      "platypus",
      "bird",
      "platypus",
    ],
    cars: [
      "truck",
      "sedan",
      "van",
      "ferrari",
      "bmw",
      "ford",
      "mustang",
      "boat",
      "ram",
    ],
    clothes: [
      "shirt",
      "jeans",
      "sweatshirt",
      "jeanjacket",
      "pufferjacket",
      "boots",
      "hat",
      "scarf",
      "shorts",
    ],
    food: [
      "burger",
      "frenchfries",
      "shake",
      "pizza",
      "icecream",
      "tomato",
      "tatertots",
      "pasta",
      "smoothie",
    ],
  };

  const keys = Object.keys(queries);
  const randomKey = keys[(keys.length * Math.random()) << 0];
  const randomIndex = Math.floor(Math.random() * 7);
  const queryParams = {
    query: queries[randomKey][randomIndex],
    sort: "popular",
    orientation: "horizontal",
  };

  const handleSubmit = () => {
    if (solution.includes(searchTerm) && searchTerm.length >= 3) {
      setPoints(points + 1);
      setTimer(Date.now() + 10000);
      Countdown.stop();
      alert("that's correct");
    } else if (searchTerm.length < 2) {
      alert("Guess word too short. Try again!");
    } else {
      alert("try again");
      if ({ zoom } > 0) {
        setZoom(zoom + 0.5);
      }
    }
  };

  const handleGameOver = () => {
    // setGameOver(true);
    return "Time's up! Game Over!";
  };

  useEffect(() => {
    sstk.setAccessToken(
      "v2/Y2wyVldjc0pia0NtNTJxNGZZWkVIeHFodGk3aldma0IvMjk4NTQxMjc0L2N1c3RvbWVyLzQvUXd6aDVoUGg0MVlLQTdmeWpCYVJaUzVzYlAtRUNTQ045ZlhZR1JMT1lhMDFCSlhYT3hDX1ZSVTB3dnpUUUQyTTZoTUUwTHdLMDN3WllDTV9HTENBNGFDXzk0Z2V2amVHbWJhTm5GTFMwX1lWSkxsdE1aaUJIXzhSOHFDckZpd1ZGQWRiMXZ0XzBjMko4LVluUV90OVVGZmk3SHRsVGxDN1JVUEFuY3E5ZVJlT1lnNHFHV0Q5STZxTFpBcXBNM283WlhWOXpDakx3dWdLQnJMRjJZc3pTdy9tSG4wZWRMTFBPeHVfN1gwVmtXdWNB"
    );
    api
      .searchImages(queryParams)
      .then(function ({ data }) {
        console.log("data" + data);
        setIsLoaded(true);
        setPics(data);
        setSolution(data[0].description.toLowerCase());
      })
      .catch(function (error) {
        console.error(error);
        setIsLoaded(true);
        setError(true);
      });
  }, []);

  /**
   * Styling for page
   */
  const pictureStyle = {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    transform: "scale(" + zoom + ")",
    width: "30vw",
    height: "auto",
  };

  const wrapperStyle = {
    display: "inline-block",
    overflow: "hidden",
    marginLeft: 100,
    paddingRight: 100,
  };

  const inputStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "100px",
    paddingTop: "20px",
  };

  const timerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "20px",
    paddingTop: "20px",
    fontSize: "50px",
  };

  function editSearchTerm(e) {
    setSearchTerm(e.target.value);
  }

  if (error) {
    console.log(error);
    return <div>Error! Cannot display photo</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      pics &&
      pics.length > 0 && (
        <div class="col">
          <div class="row" style={wrapperStyle}>
            <img
              class="pictureForGame"
              key={pics[0].id}
              alt="Randomized for game"
              style={pictureStyle}
              src={pics[0].assets.preview_1000.url}
            />
          </div>
          <div class="row">
            <h1>{pics[0].description}</h1>
          </div>
          <div class="row">
            <h1>Points: {points}</h1>
          </div>
          <Countdown
            date={timer}
            style={timerStyle}
            isCompleted={() => handleGameOver()}
          />
          <h1>{handleGameOver()}</h1>
          <div class="row" style={inputStyle}>
            <input
              id="input"
              type="text"
              value={searchTerm}
              onChange={editSearchTerm}
              placeholder="Guess the image!"
            />
            <button onClick={handleSubmit} placeholder="submit">
              Submit
            </button>
          </div>
        </div>
      )
    );
  }
}
