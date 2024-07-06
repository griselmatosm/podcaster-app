import { createContext, useState, useEffect } from "react";
import { useTopPodcasts } from "../hooks/useTopPodcasts.ts";

const PodcastContext = createContext();

const PodcastProvider = ({ children }) => {
  const { data, isLoading, isError } = useTopPodcasts();
  const [podcasts, setPodcasts] = useState([]);
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);
  const [filterText, setFilterText] = useState("");

  const filterPodcasts = (query) => {
    setFilterText(query);
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
    if (data && data.length) {
      console.log("Setting podcasts data", data);
      setPodcasts(data);
      setFilteredPodcasts(data);
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
