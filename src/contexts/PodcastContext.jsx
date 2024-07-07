import { createContext, useState } from "react";

const PodcastContext = createContext();

const PodcastProvider = ({ children }) => {
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);

  const filterPodcasts = (query, podcasts) => {
    console.log("query", query, "podcasts", podcasts);
    if (!query) {
      setFilteredPodcasts(podcasts);
      return;
    }
    const filtered = podcasts.filter((podcast) => {
      return podcast.title.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredPodcasts(filtered);
  };

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
