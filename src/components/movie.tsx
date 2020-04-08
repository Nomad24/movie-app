import React from "react";

interface MovieQueryProps {
  query: any;
}

const Movie: React.FC<MovieQueryProps> = (props) => {
  return (
    <div className="row">
      {props.query.map((movie: any) => {
        return (
          <div className="col s12" key={movie.id}>
            <h3>{movie.title}</h3>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt="#"
            />
            <p className="date">
              Release date: {movie.release_date}
              <br />
              <br />
              Rating: {movie.vote_average}
            </p>
            <br />
            <div>
              <p className="description">
                <strong>Description: </strong>
                <hr />
                {movie.overview}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Movie;
