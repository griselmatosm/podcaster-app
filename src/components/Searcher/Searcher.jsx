import { useContext, useState, useEffect } from "react";
import styles from "./Searcher.module.css";
import { PodcastContext } from "../../contexts/PodcastContext";
import { usePodcasts } from "../../hooks/usePodcasts";
import { useDebounce } from "../../hooks/useDebounce";

export const Searcher = () => {
  const { filteredPodcasts, filterPodcasts } = useContext(PodcastContext);
  const { data: podcasts } = usePodcasts();
  const [filterText, setFilterText] = useState("");
  const debouncedFilterText = useDebounce(filterText, 500);

  useEffect(() => {
    filterPodcasts({ query: debouncedFilterText, podcasts });
  }, [debouncedFilterText, filterPodcasts, podcasts]);


  const handleFilterTextChange = (event) => {
    const { value } = event.target;
    setFilterText(value);
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
