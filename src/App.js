import React from "react";
import "./index.css";
import './App.css';
import Weather from "./Weather";
import BirdFlight from "./BirdFlight";

export default function App() {
  return (
    <div className="App">
      <BirdFlight />
      <div className="container">
     
      <Weather defaultCity="Richmond" />
      <footer>
        This project was coded by Tonya Rice and is {" "}
      <a href="https://github.com/tonyarice/tonya-weather-react-final" target="blank" rel="noreferrer">open-sourced on GitHub</a>.
      </footer>
    </div>
    </div>
  );
}


