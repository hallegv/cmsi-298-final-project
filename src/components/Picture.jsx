import { useState, useEffect } from "react";
//import image from './images/image.jpg';

export default function Picture() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pics, setPics] = useState([]);
  const USER_ID = "cl2VWcsJbkCm52q4fYZEHxqhti7jWfkB";
  const url = "https://api.shutterstock.com/v2/images/search?query=dog";
  useEffect(() => {
    fetch(url, {
      mode: "no-cors",
      method: "GET",
      authorization:
        "Bearer v2/Y2wyVldjc0pia0NtNTJxNGZZWkVIeHFodGk3aldma0IvMjk4NTQxMjc0L2N1c3RvbWVyLzQvUXd6aDVoUGg0MVlLQTdmeWpCYVJaUzVzYlAtRUNTQ045ZlhZR1JMT1lhMDFCSlhYT3hDX1ZSVTB3dnpUUUQyTTZoTUUwTHdLMDN3WllDTV9HTENBNGFDXzk0Z2V2amVHbWJhTm5GTFMwX1lWSkxsdE1aaUJIXzhSOHFDckZpd1ZGQWRiMXZ0XzBjMko4LVluUV90OVVGZmk3SHRsVGxDN1JVUEFuY3E5ZVJlT1lnNHFHV0Q5STZxTFpBcXBNM283WlhWOXpDakx3dWdLQnJMRjJZc3pTdy9tSG4wZWRMTFBPeHVfN1gwVmtXdWNB",
      headers: {
        // TODO: resolve 401 Invalid access token error
        user_id: USER_ID,
        "User-Agent": "cmsi298finalproject",
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
