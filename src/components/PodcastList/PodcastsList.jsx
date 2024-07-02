import styles from "./PodcastList.module.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { PodcastContext } from "../../contexts/PodcastContext";
import { PodcastCard } from "../PodastCard/PodcastCard";

const PodcastsList = () => {
  const { podcasts, isError, isLoading } = useContext(PodcastContext);
  console.log("en el componente Podcast List", podcasts);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading podcasts</div>;

  return (
    <div>
      <ul className={styles.podcastList}>
        {podcasts.map((podcast) => (
          <li key={podcast.id.attributes["im:id"]}>
            <Link to={`/podcast/${podcast.id.attributes["im:id"]}`}>
              <PodcastCard podcast={podcast} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PodcastsList;
