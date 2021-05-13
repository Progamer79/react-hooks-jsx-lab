import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <p>I Made This</p>
    <h2>About Me</h2>
    <img src={image} alt="I made this" />
  </div>
  );
}

export default About;
