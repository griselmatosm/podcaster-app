import { createContext, useState, useCallback } from "react";

const PodcastContext = createContext();

const PodcastProvider = ({ children }) => {
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);

  const filterPodcasts = useCallback(({ query, podcasts }) => {
    if (!query) {
      setFilteredPodcasts(podcasts);
      return;
    }
    const filtered = podcasts.filter((podcast) => {
      return podcast.title.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredPodcasts(filtered);
  }, []);

  return (
    <PodcastContext.Provider
      value={{
        filterPodcasts,
        filteredPodcasts,
        setFilteredPodcasts,
      }}
    >
      {children}
    </PodcastContext.Provider>
  );
};

export { PodcastContext, PodcastProvider };
