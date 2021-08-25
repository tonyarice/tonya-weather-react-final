import React from "react";
import FlyingBirdImage from "./images/birds-in-flight-clipart-library.gif";


export default function BirdFlight() {
    return (
    <div className="BirdFlight">
       <img src={FlyingBirdImage} alt="flying birds" width="192" height="120" />
    </div>
    )
}