import { createContext, useState, useEffect } from "react";
import { useTopPodcasts } from "../hooks/useTopPodcasts";

const PodcastContext = createContext();

const PodcastProvider = ({ children }) => {
  const { data, isLoading, isError } = useTopPodcasts();
  const [podcasts, setPodcasts] = useState([]);
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);
  const [filterText, setFilterText] = useState("");

  const filterPodcasts = (query) => {
    console.log("query", query);
    if (!query) {
      setFilteredPodcasts(podcasts);
      return;
    }
    const filtered = podcasts.filter((podcast) => {
      return podcast.title.label.toLowerCase().includes(query.toLowerCase());
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
      value={{
        isError,
        isLoading,
        filterPodcasts,
        filteredPodcasts,
        filterText,
        setFilterText,
      }}
    >
      {children}
    </PodcastContext.Provider>
  );
};

export { PodcastContext, PodcastProvider };
