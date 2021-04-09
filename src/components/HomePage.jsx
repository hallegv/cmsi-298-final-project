import React from "react";

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

    <button style = {{
      width: "40%",
      height: 100,
      fontSize: 50,
      fontFamily: "Monaco",
    }}>Play!</button>
  </div>;

}