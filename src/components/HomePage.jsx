import React from "react";
import Button from "react-bootstrap/Button";

export default function HomePage(props) {

  return <div>
    <h1 style = {{
      textAlign: "center",
      fontFamily: "Papyrus",
      fontSize: 75,
      borderBottom: 0,
      paddingBottom: 0,
      marginBottom: 0}}
      >Welcome to the Game!</h1>

    <p>[GAME NAME HERE] is a game that tests how much you sweat the details!</p>
    <p>Start with a super zoomed-in image and guess what it is!</p>

    <Button block style = {{
      fontFamily: "Monaco",
    }}>Play!</Button>
  </div>;

}