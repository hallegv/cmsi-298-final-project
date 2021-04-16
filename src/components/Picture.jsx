import { useState, useEffect } from "react";

export default function Picture() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pics, setPics] = useState([]);
  // const [animalList, setAnimalList] = useState({
  // animalTypes: [
  //   "hippo",
  //   "dog",
  //   "cat",
  //   "dolphin",
  //   "walrus",
  //   "lizard",
  //   "platypus",
  //   "bird",
  //   "perrytheplatypus",
  // ],
  // });
  // const USER_ID = "cl2VWcsJbkCm52q4fYZEHxqhti7jWfkB";
  // const url = "https://api.shutterstock.com/v2/images/search?query=dog";
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
    food: [
      "burger",
      "fries",
      "shake",
      "pizza",
      "icecream",
      "tomato",
      "tatertots",
    ],
    clothes: ["shirt", "jeans", "sweatshirt"],
  };

  const sstk = require("shutterstock-api");
  const api = new sstk.ImagesApi();
  const queryParams = {
    query:
      queries[
        Object.keys(queries)[
          Object.values(Object.keys(queries))[
            Math.floor(Math.random() * Object.keys.length)
          ]
        ]
      ],
    sort: "popular",
    orientation: "horizontal",
  };
  console.log("query" + queryParams.query);

  useEffect(() => {
    sstk.setAccessToken(
      "v2/Y2wyVldjc0pia0NtNTJxNGZZWkVIeHFodGk3aldma0IvMjk4NTQxMjc0L2N1c3RvbWVyLzQvUXd6aDVoUGg0MVlLQTdmeWpCYVJaUzVzYlAtRUNTQ045ZlhZR1JMT1lhMDFCSlhYT3hDX1ZSVTB3dnpUUUQyTTZoTUUwTHdLMDN3WllDTV9HTENBNGFDXzk0Z2V2amVHbWJhTm5GTFMwX1lWSkxsdE1aaUJIXzhSOHFDckZpd1ZGQWRiMXZ0XzBjMko4LVluUV90OVVGZmk3SHRsVGxDN1JVUEFuY3E5ZVJlT1lnNHFHV0Q5STZxTFpBcXBNM283WlhWOXpDakx3dWdLQnJMRjJZc3pTdy9tSG4wZWRMTFBPeHVfN1gwVmtXdWNB"
    );
    api
      .searchImages(queryParams)
      .then(function ({ data }) {
        console.log(data);
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
    return <div>Error! Cannot display photo{error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {pics.map((pic) => (
          <img
            key={pic.id}
            alt="Randomized for game"
            src={pic.assets.large_thumb.url}
          />
        ))}
      </ul>
    );
  }
}
