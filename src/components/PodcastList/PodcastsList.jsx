import styles from "./PodcastList.module.css";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { PodcastContext } from "../../contexts/PodcastContext";
import { PodcastCard } from "../PodcastCard/PodcastCard";
import { usePodcasts } from "../../hooks/usePodcasts";

export const PodcastsList = () => {
  const { filteredPodcasts, setFilteredPodcasts } = useContext(PodcastContext);
  const { data: podcasts, isLoading, isError } = usePodcasts();


  useEffect(() => {
    setFilteredPodcasts(podcasts);
  }, [setFilteredPodcasts, podcasts]);

  if (!podcasts.length && !isError && isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading podcasts</div>;

  return (
    <ul className={styles.podcastList}>
      {filteredPodcasts.map((podcast) => (
        <li key={podcast.id}>
          <Link to={`podcast/${podcast.id}`}>
            <PodcastCard podcast={podcast} />
          </Link>
        </li>
      ))}
    </ul>
  );
};