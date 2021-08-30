import React from "react";

export default function SunTime(timestamp, props) {
    let date = new Date(timestamp * 1000);

  let hours = props.date.getHours() % 12;
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}`;
}
