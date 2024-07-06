import React from "react";
import { Outlet, Link } from "react-router-dom";
import { PodcastProvider } from "./contexts/PodcastContext";
import { Header } from "./components/Header/Header";

const App = () => {
  return (
    <PodcastProvider>
      <Header className="header" title={<Link to="/">Podcaster</Link>} />
      <Outlet />
      <footer></footer>
    </PodcastProvider>
  );
};

export default App;
