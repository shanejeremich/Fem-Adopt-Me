import React, { StrictMode } from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <StrictMode>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <Details path="/details/:id" />
          <SearchParams path="/" />
        </Router>
      </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
