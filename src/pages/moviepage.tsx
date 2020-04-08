import React, { useState } from "react";
import Form from "../components/form";
import Movie from "../components/movie";

const MoviePage: React.FC = () => {
  const APP_ID = "4a95e1527eda6e2ac4f3b0ebab2fc1a3";

  const [query, setQuery] = useState([]);

  const addQuery = (query: any) => {
    const newQuery: any = query;
    setQuery(newQuery);
  };

  const searchQuery = async (querys: string) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${APP_ID}&query=${querys}`
    );
    const data = await response.json();
    addQuery(data.results);
    //console.log(query);
  };

  return (
    <React.Fragment>
      <Form onSearch={searchQuery} />
      <div className="row">
        <Movie query={query} />
      </div>
    </React.Fragment>
  );
};

export default MoviePage;
