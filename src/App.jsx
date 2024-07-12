import React from "react";
import { Outlet, Link } from "react-router-dom";
import { PodcastProvider } from "./contexts/PodcastContext";
import { Header } from "./components/Header/Header";
import { LoadingProvider } from "./contexts/LoadingContext";

const App = () => {
  return (
    <PodcastProvider>
      <LoadingProvider>
        <Header className="header" title={<Link to="/">Podcaster</Link>} />
        <Outlet />
      </LoadingProvider>
    </PodcastProvider>
  );
};

export default App;
