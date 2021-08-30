import React from "react";

export default function SunTime(props) {
    let date = new Date(props.time * 1000);

  let hours = date.getHours() % 12;
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}`;
}
