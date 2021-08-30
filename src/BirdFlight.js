import React from "react";
// import FlyingBirdImage from "./images/birds-in-flight-clipart-library.gif";
import BirdFormation from "./images/flying-birds.gif";


// import TwoFlyingBirds from "./images/two-flying-birds2.gif";

export default function BirdFlight() {
    return (
    <div className="BirdFlight">
        
    <img src={BirdFormation} alt="flying birds" width="125" height="85" />
    <img src={BirdFormation} alt="flying birds" width="125" height="85" />
    <img src={BirdFormation} alt="flying birds" width="125" height="85" />
    
    </div>
    
    )
}