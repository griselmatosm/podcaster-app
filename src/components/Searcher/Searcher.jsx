import { useContext, useState } from "react";
import styles from "./Searcher.module.css";
import { PodcastContext } from "../../contexts/PodcastContext";
import { useTopPodcasts } from "../../hooks/useTopPodcasts.ts";

export const Searcher = () => {
  const { filteredPodcasts, filterPodcasts } = useContext(PodcastContext);
  const { data: podcasts } = useTopPodcasts();
  const [filterText, setFilterText] = useState("");

  const handleFilterTextChange = (event) => {
    const { value } = event.target;
    setFilterText(value);
    filterPodcasts(value, podcasts);
  };

  return (
    <div className={styles.searcher}>
      <span className={styles.searcherCount}>{filteredPodcasts.length}</span>
      <input
        className={styles.searcherInput}
        onChange={handleFilterTextChange}
        value={filterText}
        type="text"
        placeholder="Filter podcasts..."
      />
    </div>
  );
};
