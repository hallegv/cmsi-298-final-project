import { useState, useEffect } from "react";

export default function Picture() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pics, setPics] = useState([]);
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
    cars: ["truck", "sedan", "van", "ferrari", "bmw", "ford", "mustang"],
    clothes: [
      "shirt",
      "jeans",
      "sweatshirt",
      "jeanjacket",
      "pufferjacket",
      "boots",
      "tophat",
    ],
    food: [
      "burger",
      "fries",
      "shake",
      "pizza",
      "icecream",
      "tomato",
      "tatertots",
    ],
    tvshows: [
      "phineasandferb",
      "spongebob",
      "simpsons",
      "familyguy",
      "modernfamily",
      "arresteddevelopment",
      "theoffice",
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
  console.log("random key " + randomKey);
  console.log("query " + queryParams.query);

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

  if (error) {
    console.log(error);
    return <div>Error! Cannot display photo</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    console.log("pics " + pics);
    // Figure out a way to not have pics[0]
    return (
      pics && (
        <img
          class="pictureForGame"
          key={pics[0].id}
          alt="Randomized for game"
          src={pics[0].assets.large_thumb.url}
        />
      )
    );
  }
}
