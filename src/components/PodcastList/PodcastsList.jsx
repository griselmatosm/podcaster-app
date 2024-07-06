import styles from "./PodcastList.module.css";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTopPodcasts } from "../../hooks/useTopPodcasts.ts";
import { PodcastContext } from "../../contexts/PodcastContext";
import { PodcastCard } from "../PodcastCard/PodcastCard";

const PodcastsList = () => {
  const { filteredPodcasts, setFilteredPodcasts } = useContext(PodcastContext);
  const { data: podcasts, isLoading, isValidating, isError } = useTopPodcasts();

  useEffect(() => {
    if (podcasts && podcasts.length) {
      setFilteredPodcasts(podcasts);
    }
  }, [podcasts, setFilteredPodcasts]);

  if (isLoading || isValidating) return <div>Loading...</div>;
  if (isError) return <div>Error loading podcasts</div>;

  return (
    <ul className={styles.podcastList}>
      {filteredPodcasts.map((podcast) => (
        <li key={podcast.id.attributes["im:id"]}>
          <Link to={`/podcast/${podcast.id.attributes["im:id"]}`}>
            <PodcastCard podcast={podcast} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PodcastsList;
