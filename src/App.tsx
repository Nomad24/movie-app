import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MoviePage from "./pages/moviepage";
import AboutPage from "./pages/about";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component = {MoviePage} path = "/" exact />
          <Route component = {AboutPage} path = "/about" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
