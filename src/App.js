import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dogs from "./components/Dogs";
import Navbar from "./components/Navbar";
import Whiskey from "./images/whiskey.jpg";
import Hazel from "./images/hazel.jpg";
import Tubby from "./images/tubby.jpg";

function App() {
  const whiskeyHandler = () => {
    document.querySelector("#whiskey").style.opacity = 1;
    document.querySelector("#hazel").style.opacity = 0.4;
    document.querySelector("#tubby").style.opacity = 0.4;
  };

  const hazelHandler = () => {
    document.querySelector("#whiskey").style.opacity = 0.4;
    document.querySelector("#hazel").style.opacity = 1;
    document.querySelector("#tubby").style.opacity = 0.4;
  };

  const tubbyHandler = () => {
    document.querySelector("#whiskey").style.opacity = 0.4;
    document.querySelector("#hazel").style.opacity = 0.4;
    document.querySelector("#tubby").style.opacity = 1;
  };

  const dogInfo = [
    {
      name: "Whiskey",
      age: "4",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey ist a terrible guard dog.",
        "Whiskey wants to cuddle with you.",
      ],
      to: "/dogs/whiskey",
      img: Whiskey,
      handler: whiskeyHandler,
    },
    {
      name: "Hazel",
      age: "0",
      facts: [
        "Hazel has so much energy.",
        "Hazel is higly intelligent.",
        "Hazel loves people more than dogs.",
      ],
      to: "/dogs/hazel",
      img: Hazel,
      handler: hazelHandler,
    },
    {
      name: "Tubby",
      age: "4",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walking.",
        "Angelina hats Tubby",
      ],
      to: "/dogs/tubby",
      img: Tubby,
      handler: tubbyHandler,
    },
  ];

  return (
    <div className="App">
      <h1>Hello, we have dogs.</h1>
      <h2>Click on the picture for more information.</h2>
      <Router>
        <Navbar dogInfo={dogInfo} />

        <Switch>
          <Route exact path="/">
            <Dogs dogInfo={dogInfo} />
          </Route>

          <Route path="/dogs/:dogName">
            <Dogs dogInfo={dogInfo} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
