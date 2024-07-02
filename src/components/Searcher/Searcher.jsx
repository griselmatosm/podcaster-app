import { useContext } from "react";
import styles from "./Searcher.module.css";
import { PodcastContext } from "../../contexts/PodcastContext";

export const Searcher = () => {
  const { filteredPodcasts, filterPodcasts, setFilterText, filterText } =
    useContext(PodcastContext);

  const handleChange = (e) => {
    setFilterText(e.target.value);
    filterPodcasts(e.target.value);
  };

  return (
    <div className={styles.searcher}>
      <span className={styles.searcherCount}>{filteredPodcasts.length}</span>
      <input
        className={styles.searcherInput}
        onChange={handleChange}
        value={filterText}
        type="text"
        placeholder="Filter podcasts..."
      />
    </div>
  );
};
