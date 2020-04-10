import React from "react";

interface MovieGenreProps {
  onGenre(e: React.MouseEvent, genres: any): void;
}

const Genre: React.FC<MovieGenreProps> = (props): any => {
  return (
    <div className="buttons">
      <a
        className="waves-effect waves-light btn-small"
        href="#"
        onClick={(e) => props.onGenre(e, "popular")}
      >
        Popular
      </a>

      <a
        className="waves-effect waves-light btn-small"
        href="#"
        onClick={(e) => props.onGenre(e, "now_playing")}
      >
        Now Playing
      </a>
      <a
        className="waves-effect waves-light btn-small"
        href="#"
        onClick={(e) => props.onGenre(e, "top_rated")}
      >
        Top Rated
      </a>
      <a
        className="waves-effect waves-light btn-small"
        href="#"
        onClick={(e) => props.onGenre(e, "upcoming")}
      >
        Upcoming
      </a>
    </div>
  );
};

export default Genre;
