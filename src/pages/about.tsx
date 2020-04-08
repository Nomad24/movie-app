import React from "react";
import { useHistory } from "react-router-dom";

const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="container">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum
          vero, repudiandae expedita beatae iure? Mollitia tempore quae qui
          voluptatum.
        </p>
        <button className="btn" onClick={() => history.push("/")}>
          Back to main page
        </button>
      </div>
    </React.Fragment>
  );
};

export default AboutPage;
