import React, { useState, useEffect } from "react";
import Form from "../components/form";
import Movie from "../components/movie";
import Loader from "../components/loader";
import Genre from "../components/genre";

const MoviePage: React.FC = () => {
  const APP_ID = "4a95e1527eda6e2ac4f3b0ebab2fc1a3";

  const [query, setQuery] = useState([]);

  const [load, setLoad] = useState(true);

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
    //console.log(query);
  };

  const getMovie = async () => {
    setLoad(false);
    const response1 = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APP_ID}&language=en-US&page=1`
    );
    const data1 = await response1.json();
    addQuery(data1.results);
  };

  const getGenre = async (e: React.MouseEvent, genre: string) => {
    setLoad(true);
    e.preventDefault();
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${genre}?api_key=${APP_ID}&language=en-US&page=1&region=US`
    );
    const data = await response.json();
    if(data) {
      setLoad(false);
    }
    addQuery(data.results)
    //console.log(data.results);
  };

  useEffect(() => {
    getMovie();
  }, [])

  return (
    <React.Fragment>
      <Form onSearch={searchQuery} />

      <Genre onGenre={getGenre} />

      {load ? <Loader /> : <Movie query={query} />}
    </React.Fragment>
  );
};

export default MoviePage;
