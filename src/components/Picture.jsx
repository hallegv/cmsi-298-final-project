import { useState, useEffect } from "react";
//import image from './images/image.jpg';

export default function Picture() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pics, setPics] = useState([]);
  const url =
    "https://api.shutterstock.com/v2/images/search?query=animals&image_type=photo";
  useEffect(() => {
    fetch(url, {
      mode: "no-cors",
      method: "GET",
      headers: {
        // TODO: resolve 401 Invalid access token error
        authorizaion: "Bearer Token" + pics?.id_token,
        consumerKey: "cl2VWcsJbkCm52q4fYZEHxqhti7jWfkB",
        consumerSecret: "RRwkRI85NGUllXzQ",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPics(result);
          console.log(pics);
        },
        (error) => {
          setIsLoaded(true);
          setError(true);
        }
      );
  }, [pics]);

  if (error) {
    return <div>Error! Cannot display photo{error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {pics.map((pic) => (
          <img key={pic.id} alt="Randomized for game">
            {pic.preview_1000.url}
          </img>
        ))}
      </ul>
    );
  }
}
