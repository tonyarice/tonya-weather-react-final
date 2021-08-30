import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import SunTime from "./SunTime";



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
                        <div className="CurrentTemp">
                    <strong><WeatherTemperature 
                    fahrenheit={props.data.temperature} /></strong>
                    </div>
                    </div>
               </div>
                </div>
                <div className="col-6">
                    <ul>
                    {/* <li>Precipitation: {props.data.pop}%</li> */}
                    <li>Humidity: {props.data.humidity}%</li>
                    <li>Wind: {Math.round(props.data.wind)} mph</li>
                    <li>Sunrise: <SunTime time={props.data.sunrise}/> am</li>
                    <li>Sunset: <SunTime time={props.data.sunset}/> pm</li>
                    </ul>
                </div>
            </div>
        </div>  
    )
}
