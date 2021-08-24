import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";


import WeatherInfo from "./WeatherInfo";


export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready : false});
    const [city, setCity] = useState(props.defaultCity);
    
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            icon: response.data.weather[0].icon,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
        
        });

    

    }

    function search() {
        let apiKey = "16cd6fd99fc921f3bd2763bbd7c2b61b";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        //search for a city
        search();

    }

    function handleCityChange(event) {
        setCity(event.target.value);
        

    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-8">
                    <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange} />
                    </div>
                    <div className="col-2">
                <input type="submit" value="Search" className="btn btn-primary" />
                </div>
                <div className="col-2">
                    <input type="submit" value="Current" class="btn btn-success" />
                </div>
                </div>
                </form>
                <WeatherInfo data={weatherData}/>
                </div>
                
        );

    
    } else {
        search();
        
        return "Loading...";

    }
 
}