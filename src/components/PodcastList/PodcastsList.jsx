import styles from "./PodcastList.module.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { PodcastContext } from "../../contexts/PodcastContext";
import { Card } from "../PodcastCardDetail/PodcastCardDetail";
import { PodcastCard } from "../PodcastCard/PodcastCard";

const PodcastsList = () => {
  const { filteredPodcasts, isError, isLoading } = useContext(PodcastContext);

  if (isLoading) return <div>Loading...</div>;
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
