import { Link } from "react-router-dom";
import styles from "./EpisodesList.module.css";

export const EpisodesList = ({ episodes }) => {
  return (
    <ul className={styles.episodesList}>
      {episodes.map((episode) => (
        <li key={episode.id}>
          <Link to={`/episode/${episode.id}`}>
            <h3>{episode.title}</h3>
          </Link>
          <p>{episode.date}</p>
        </li>
      ))}
    </ul>
  );
};
