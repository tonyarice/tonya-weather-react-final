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
      <div className="WeatherWrapper">
      <Weather defaultCity="Richmond" />
      </div>
      <a
            href="https://www.animatedimages.org/cat-birds-230.htm"
            className="bird-line"
            ><img
              src="https://www.animatedimages.org/data/media/230/animated-bird-image-0509.gif"
              border="0"
              alt="animated-birds"
          /></a>
      <footer><span className="credit">
        🐈This project was coded by Tonya Rice and is {" "}</span>
      <a href="https://github.com/tonyarice/tonya-weather-react-final" target="blank" rel="noreferrer">open-sourced on GitHub</a>.<a href="https://app.netlify.com/sites/nostalgic-hoover-d17535/overview" target="blank" rel="noreferrer"> Hosted on Netlify</a>.
      </footer>
    </div>
    </div>
  );
}


