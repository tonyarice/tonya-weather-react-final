import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

    return (
        <div>
        <div className="WeatherForecast-day">{day()}</div>
    <div><img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt="weather" width="60" /></div>
    <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">{Math.round(props.data.temp.max)}°{" "}
        </span>
        <span className="WeatherForecast-temperature-min">{Math.round(props.data.temp.min)}°
        </span>
        </div>
    </div>
    );
}