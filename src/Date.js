import React from "react";
import "./Date.css";

export default function Date(props) {
  if (props.time === "forecast") {
    return <div className="Date"> In {props.timing} hours </div>;
  } else {
    return <div className="Date"> Right now </div>;
  }
}
