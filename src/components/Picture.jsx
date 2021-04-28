import { useState, useEffect } from "react";

export default function Picture() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pics, setPics] = useState([]);
  const [zoom, setZoom] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
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
      "perrytheplatypus",
    ],
    cars: [
      "truck", 
      "sedan", 
      "van", 
      "ferrari", 
      "bmw", 
      "ford", 
      "mustang",
    ],
    clothes: [
      "shirt",
      "jeans",
      "sweatshirt",
      "jeanjacket",
      "pufferjacket",
      "boots",
      "hat",
    ],
    food: [
      "burger",
      "frenchfries",
      "shake",
      "pizza",
      "icecream",
      "tomato",
      "tatertots",
    ],
    searchTerm: "",
  };
  const keys = Object.keys(queries);
  const randomKey = keys[(keys.length * Math.random()) << 0];
  const randomIndex = Math.floor(Math.random() * 7);
  const queryParams = {
    query: queries[randomKey][randomIndex],
    sort: "popular",
    orientation: "horizontal",
  };
  console.log("random key " + randomKey);
  console.log("query " + queryParams.query);

  const handleSubmit = ()=>{
if(searchTerm !== ""){
  alert('that is correct')
}
  }
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
      })
      .catch(function (error) {
        console.error(error);
        setIsLoaded(true);
        setError(true);
      });
  }, []);

  const pictureStyle = {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    transform: "scale(" + zoom + ")",
  };

  const wrapperStyle = {
    display: "inline-block",
    overflow: "hidden",
    marginLeft: 100,
    paddingRight: 100
  };

  function editSearchTerm(e) {
    setSearchTerm(e.target.value);
  }

  function dynamicSearch() {
    return queries[randomKey].filter((query) =>
      query.toLowerCase().includes(queries.searchTerm.toLowerCase())
    );
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
        <div class="img-wrapper" style={wrapperStyle}>
          <img
            class="pictureForGame"
            key={pics[0].id}
            alt="Randomized for game"
            style={pictureStyle}
            src={pics[0].assets.preview_1000.url}
          />
          <h1>{pics[0].description}</h1>
          <input
            id="input"
            type="text"
            value = {searchTerm}
            onChange={editSearchTerm}
            placeholder="Guess the image!"
          />
          <button 
          onClick={handleSubmit} 
          placeholder="submit" >Submit</button>
          {/* <h1>{pics[0].description.includes(queries.searchTerm)}</h1> */}
        </div>
      )
    );
  }
}
