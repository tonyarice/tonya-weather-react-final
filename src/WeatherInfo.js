import React from "react";
import FormattedDate from "./FormattedDate";

import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
            
            <ul>
                <li><FormattedDate date={props.data.date} /></li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="d-flex weather-temperature">
                    <div className="float-left"> 
                    <img src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`} alt="weather" /> 

                        </div>
                    
                    <div className="float-left">
                    <WeatherTemperature fahrenheit={props.data.temperature} />
                    
                    </div>
               </div>
                </div>
                <div className="col-6">
                    <ul>
                    <li>Precipitation: 9%</li>
                    <li>Humidity: {props.data.humidity}%</li>
                    <li>Wind: {Math.round(props.data.wind)} mph</li>
                    <li>Sunrise: 06:15 am</li>
                    <li>Sunset: 08:45 pm</li>
                    </ul>
                </div>
            </div>
        </div>  
    )
}
