import React from "react";
import Button from 'react-bootstrap/Button';
//import Picture from "./components/Picture";

export default function Game() {
  return (
    <h1
      style={{
        backgroundColor: "CornflowerBlue",
        fontSize: "4vh",
        border: "0px",
        margin: "0px",
        padding: "2px",
        textAlign: "center",
      }}
    >
    <Button onclick = "Home">Home</Button>
    </h1>
  );
}
