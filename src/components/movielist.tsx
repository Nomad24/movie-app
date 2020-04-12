import React from "react";

interface MovieQueryProps {
  query: any;
}

const Movie: React.FC<MovieQueryProps> = (props) => {
  const getGenreMovie = (genre: number) => {
    let text: string = "";
    switch (genre) {
      case 28:
        text = "Action, ";
        break;
      case 12:
        text = "Adventure, ";
        break;
      case 16:
        text = "Animation, ";
        break;
      case 35:
        text = "Comedy, ";
        break;
      case 80:
        text = "Crime, ";
        break;
      case 99:
        text = "Documentary, ";
        break;
      case 18:
        text = "Drama, ";
        break;
      case 10751:
        text = "Family, ";
        break;
      case 14:
        text = "Fantasy, ";
        break;
      case 36:
        text = "History, ";
        break;
      case 27:
        text = "Horror, ";
        break;
      case 10402:
        text = "Music, ";
        break;
      case 9648:
        text = "Mystery, ";
        break;
      case 10749:
        text = "Romance, ";
        break;
      case 878:
        text = "Science Fiction, ";
        break;
      case 10770:
        text = "TV Movie, ";
        break;
      case 53:
        text = "Thriller, ";
        break;
      case 10752:
        text = "War, ";
        break;
      case 37:
        text = "Western, ";
        break;
      default:
        text = "";
    }
    return text;
  };

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
              <br />
              <br />
              Genre: {movie.genre_ids.map(getGenreMovie)}
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
