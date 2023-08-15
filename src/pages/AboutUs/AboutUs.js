import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="aboutUs-container">
      <h1>About us</h1>
      <p>
        We are a small team of passionate people with the aim to build our own
        independent nature-oriented society. We do not follow any specific
        religion, but we do believe that the Universe functionates according to
        distinct laws and rules. We are the owners of a permaculture garden,
        organized on the principles of maximum environment preservation.
      </p>
      <p>Our fundamental assumptions are:</p>
      <ul className="aboutUs-list">
        <li>no chemicals (herbicides, pesticides, fertilizers)</li>
        <li>no weeding</li>
        <li>no tillage</li>
      </ul>
      <p>
        We try to use natural materials in our households and buildings,
        although we always speak for green technologies helping us to be more
        independent from the general power system and improving our well-being.{" "}
      </p>
      <p>
        Our aim is to organize a network of 100% self-maintained farming
        households, sharing experience and products, ready to build up a stable
        community independent from political and social movements, safe and
        reliable throughout time.
      </p>
    </div>
  );
}
