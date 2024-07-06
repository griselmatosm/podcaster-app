import { useContext } from "react";
import styles from "./Searcher.module.css";
import { PodcastContext } from "../../contexts/PodcastContext";

export const Searcher = () => {
  const { filteredPodcasts, filterPodcasts, filterText } =
    useContext(PodcastContext);

  return (
    <div className={styles.searcher}>
      <span className={styles.searcherCount}>{filteredPodcasts.length}</span>
      <input
        className={styles.searcherInput}
        onChange={(e) => filterPodcasts(e.target.value)}
        value={filterText}
        type="text"
        placeholder="Filter podcasts..."
      />
    </div>
  );
};
