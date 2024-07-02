import { createContext, useState, useEffect } from "react";
import { useTopPodcasts } from "../hooks/useTopPodcasts";

const PodcastContext = createContext();

const PodcastProvider = ({ children }) => {
  const { data, isLoading, isError } = useTopPodcasts();
  const [podcasts, setPodcasts] = useState([]);
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);

  const filterPodcasts = (query) => {
    const filtered = podcasts.filter((podcast) => {
      return podcast.title.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredPodcasts(filtered);
  };

  useEffect(() => {
    if (data) {
      setPodcasts(data);
    }
  }, [data]);

  return (
    <PodcastContext.Provider
      value={{ podcasts, isError, isLoading, filterPodcasts, filteredPodcasts }}
    >
      {children}
    </PodcastContext.Provider>
  );
};

export { PodcastContext, PodcastProvider };
