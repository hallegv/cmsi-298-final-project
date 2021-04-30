import { useState, useEffect } from "react";

export default function Picture() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pics, setPics] = useState([]);
  const [zoom, setZoom] = useState(3);
  const [searchTerm, setSearchTerm] = useState("");
  const [solution, setSolution] = useState("");
  const [points, setPoints] = useState(0);

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
    // clothes: [
    //   "shirt",
    //   "jeans",
    //   "sweatshirt",
    //   "jeanjacket",
    //   "pufferjacket",
    //   "boots",
    //   "hat",
    //   "scarf",
    //   "shorts",
    // ],
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
  const [currentQuery, setCurrentQuery] = useState(queryParams);

  const [handleSubmitWrapper, setHandleSubmitWrapper] = useState(null);

  console.log("query nurse??" + queryParams.query);
  const handleSubmit = function () {
    // correct
    console.log("current query??", queryParams);
    if (solution.includes(searchTerm) && searchTerm.length >= 3) {
      setPoints(points + 1);

      api
        .searchImages(queryParams)
        .then(function ({ data }) {
          console.log("data" + data);
          setIsLoaded(true);
          setZoom(3);
          setPics(data);
          setSolution(data[0].description.toLowerCase());
          setCurrentQuery(queryParams.query);
        })
        .catch(function (error) {
          console.error(error);
          setIsLoaded(true);
          setError(true);
        });
      alert("that's correct");
    } else if (searchTerm.length < 2) {
      alert("Guess word too short. Try again!");
    } else {
      // incorrect
      alert("try again");
      if (zoom > 1) {
        api
          .searchImages(currentQuery)
          .then(function ({ data }) {
            console.log("data" + data);
            setIsLoaded(true);
            setZoom(zoom - 0.5);
            setPics(data);
            setSolution(data[0].description.toLowerCase());
          })
          .catch(function (error) {
            console.error(error);
            setIsLoaded(true);
            setError(true);
          });
      }
    }
  };

  useEffect(() => {
    sstk.setAccessToken(
      "v2/Y2wyVldjc0pia0NtNTJxNGZZWkVIeHFodGk3aldma0IvMjk4NTQxMjc0L2N1c3RvbWVyLzQvUXd6aDVoUGg0MVlLQTdmeWpCYVJaUzVzYlAtRUNTQ045ZlhZR1JMT1lhMDFCSlhYT3hDX1ZSVTB3dnpUUUQyTTZoTUUwTHdLMDN3WllDTV9HTENBNGFDXzk0Z2V2amVHbWJhTm5GTFMwX1lWSkxsdE1aaUJIXzhSOHFDckZpd1ZGQWRiMXZ0XzBjMko4LVluUV90OVVGZmk3SHRsVGxDN1JVUEFuY3E5ZVJlT1lnNHFHV0Q5STZxTFpBcXBNM283WlhWOXpDakx3dWdLQnJMRjJZc3pTdy9tSG4wZWRMTFBPeHVfN1gwVmtXdWNB"
    );
    api
      .searchImages(queryParams)
      .then(function ({ data }) {
        console.log("data" + data);
        console.log("query params", queryParams);
        setIsLoaded(true);
        setPics(data);
        setSolution(data[0].description.toLowerCase());
      })
      .catch(function (error) {
        console.error(error);
        setIsLoaded(true);
        setError(true);
      });
    setHandleSubmitWrapper();
  }, [currentQuery]);

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
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    marginLeft: 100,
    paddingRight: 100,
  };

  const inputStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "100px",
    paddingTop: "20px",
    fontFamily: "Ubuntu"
  };

  function editSearchTerm(e) {
    setSearchTerm(e.target.value);
  }

  const pointsStyle ={
    textAlign: "center",
    fontFamily:"Ubuntu"
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
        <div>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap" rel="stylesheet"></link>
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
              <h1 style={pointsStyle}>Points: {points}</h1>
            </div>
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
        </div>
      )
    );
  }
}
