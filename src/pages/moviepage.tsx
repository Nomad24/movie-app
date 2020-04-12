import React from "react";
import Form from "../components/form";
import Movie from "../components/movielist";
import Loader from "../components/loader";
import Genre from "../components/genre";

const MoviePage: React.FC = () => {
  const APP_ID = "4a95e1527eda6e2ac4f3b0ebab2fc1a3";

  const [query, setQuery] = React.useState([]);

  const [load, setLoad] = React.useState(true);

  const addQuery = (query: any) => {
    const newQuery: any = query;
    setQuery(newQuery);
    //console.log(newQuery);
  };

  const searchQuery = async (querys: string) => {
    setLoad(true);
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${APP_ID}&query=${querys}`
    );
    const data = await response.json();
    if (data) {
      setLoad(false);
    }
    addQuery(data.results);
  };

  const getMovie = async () => {
    setLoad(false);
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APP_ID}&language=en-US&page=1`
    );
    const data = await response.json();
    addQuery(data.results);
    console.log(data.results)
  };

  const getGenre = async (e: React.MouseEvent, genre: string) => {
    setLoad(true);
    e.preventDefault();
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${genre}?api_key=${APP_ID}&language=en-US&page=1&region=US`
    );
    const data = await response.json();
    if (data) {
      setLoad(false);
    }
    addQuery(data.results);
  };

  //const getTVShow = async (e: React.MouseEvent) => {
  //  setLoad(true);
  //  e.preventDefault();
  //  const response = await fetch(
  //    `https://api.themoviedb.org/3/tv/top_rated?api_key=${APP_ID}&language=en-US&page=1`
  //  );
  //  const data = await response.json();
  //  console.log(data);
  //  if (data) {
  //    setLoad(false);
  //  }
  //  addQuery(data.results);
  //};

  React.useEffect(() => {
    getMovie();
  }, []);

  return (
    <React.Fragment>
      <Form onSearch={searchQuery} />

      <Genre onGenre={getGenre} />

      {load ? <Loader /> : <Movie query={query} />}
    </React.Fragment>
  );
};

export default MoviePage;
