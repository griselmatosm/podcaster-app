import styles from "./PodcastList.module.css";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { PodcastContext } from "../../contexts/PodcastContext";
import { LoadingContext } from "../../contexts/LoadingContext";
import { PodcastCard } from "../PodcastCard/PodcastCard";
import { usePodcasts } from "../../hooks/usePodcasts";

const PodcastsList = () => {
  const { filteredPodcasts, setFilteredPodcasts } = useContext(PodcastContext);
  const { setIsLoading } = useContext(LoadingContext);
  const { data: podcasts, isLoading, isError } = usePodcasts();

  useEffect(() => {
    console.log("isLoading en la lista de podcasts", isLoading);
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

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

export default PodcastsList;
