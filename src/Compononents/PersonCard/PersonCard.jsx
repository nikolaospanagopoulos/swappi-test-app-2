import React, { useState } from "react";
import "./PersonCard.css";

const PersonCard = ({ person }) => {
  const [showResults, setShowResults] = useState(false);
  const toggle = () => {
    setShowResults((showResults) => !showResults);
  };

  const unToggle = () => {
    setShowResults(!showResults);
  };


// i use the toggle function to open and close my card on click
// i use the untoggle function to keep the state from changing when a link is clicked
// i map throught the results and i create links from each one


  return (
    <div className="card" onClick={() => toggle()}>
      <div className="container">
        <h1> {person.name} </h1>
      </div>
      <div className="person-details">
        <h3> height: {person.height} cm</h3>
        <h3> mass: {person.mass} kg</h3>
        <h3> hair color: {person.hair_color} </h3>
        <h3> skin color: {person.skin_color} </h3>
        <h3> eye color: {person.eye_color} </h3>
        <h3> birth year: {person.birth_year} </h3>
        <h3> gender: {person.gender} </h3>
        <h3 onClick={unToggle}>
          {" "}
          homeworld:{" "}
          <a href={person.homeworld} target="_blank" rel="noreferrer">
            {person.homeworld}
          </a>{" "}
        </h3>
        <div>
          Films:
          <p> {showResults && person.films.length} </p>
          <p onClick={unToggle}>
            {showResults &&
              person.films.map((film) => (
                <a href={film} key={film} target="_blank" rel="noreferrer">
                  {" "}
                  {film}{" "}
                </a>
              ))}{" "}
          </p>
        </div>
        <div>
          vehicles:
          <p> {showResults && person.vehicles.length} </p>
          <p onClick={unToggle}>
            {showResults &&
              person.vehicles.map((vehicle) => (
                <a
                  href={vehicle}
                  key={vehicle}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  {vehicle}{" "}
                </a>
              ))}{" "}
          </p>
        </div>

        <div>
          Spaceships:
          <p> {showResults && person.starships.length} </p>
          <p onClick={unToggle}>
            {showResults &&
              person.starships.map((starship) => (
                <a
                  href={starship}
                  key={starship}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  {starship}{" "}
                </a>
              ))}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
