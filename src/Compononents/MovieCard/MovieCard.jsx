import React, { useState } from "react";
import "./MovieCard.css";
const MovieCard = ({ movie }) => {
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
        <h1>{movie.title}</h1>
      </div>
      <div className="movie-details">
        <h5> Director: {movie.director} </h5>
        <h5> Producer: {movie.producer} </h5>
        <h5> Release Date: {movie.release_date} </h5>
        <h5>
          {" "}
          opening crawl: <p>{movie.opening_crawl}</p>{" "}
        </h5>
        <div>
          Characters:
          <p> {showResults && movie.characters.length} </p>
          <p onClick={unToggle}>
            {" "}
            {showResults &&
              movie.characters.map((character) => (
                <a
                  href={character}
                  key={character}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  {character}{" "}
                </a>
              ))}{" "}
          </p>
        </div>
        <div>
          Planets:
          <p> {showResults && movie.planets.length} </p>
          <p onClick={unToggle}>
            {" "}
            {showResults &&
              movie.planets.map((planet) => (
                <a href={planet} key={planet} target="_blank" rel="noreferrer">
                  {" "}
                  {planet}{" "}
                </a>
              ))}{" "}
          </p>
        </div>
        <div>
          Starships:
          <p> {showResults && movie.starships.length} </p>
          <p onClick={() => unToggle()}>
            {" "}
            {showResults &&
              movie.starships.map((starship) => (
                <a
                  key={starship}
                  href={starship}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  {starship}{" "}
                </a>
              ))}{" "}
          </p>
        </div>
        <div>
          Vehicles:
          <p> {showResults && movie.vehicles.length} </p>
          <p onClick={unToggle}>
            {" "}
            {showResults &&
              movie.vehicles.map((vehicle) => (
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
          Species:
          <p> {showResults && movie.species.length} </p>
          <p onClick={unToggle}>
            {" "}
            {showResults &&
              movie.species.map((speciment) => (
                <a
                  href={speciment}
                  key={speciment}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  {speciment}{" "}
                </a>
              ))}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
