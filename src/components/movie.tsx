import React, { useState, useEffect } from "react";

interface MovieQueryProps {
  query: any
}

const Movie: React.FC<MovieQueryProps> = props => {
  

  if (props.query.length === 0) {
    return <p><strong>Write something here</strong></p>;
  }

  return (
    <div>
      {props.query.map((movie: any) => {
        return (
          <div className="col s6" key={movie.id}>
            <h3>{movie.title}</h3>
            <p>Release date: {movie.release_date}</p>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt="#"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Movie;
