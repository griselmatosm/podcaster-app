import React from "react";
import { Outlet, Link } from "react-router-dom";
import { PodcastProvider } from "./contexts/PodcastContext";

const App = () => {
  return (
    <PodcastProvider>
      <div>
        <header>
          <h1>
            <Link to="/">Podcaster</Link>
          </h1>
        </header>
        <Outlet />
        <footer></footer>
      </div>
    </PodcastProvider>
  );
};

export default App;
