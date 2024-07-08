import { Link } from "react-router-dom";
import styles from "./EpisodesList.module.css";

export const EpisodesList = ({ episodes }) => {
  return (
    <div>
      <header>
        <h2>Episodes: {episodes.length}</h2>
      </header>
      <table className={styles.episodesList}>
        <thead>
          <th>Title</th>
          <th>Date</th>
          <th>Duration</th>
        </thead>
        <tbody>
          {episodes.map((episode) => (
            <tr key={episode.id}>
              <td>
                <Link to={`episode/${episode.id}`}>{episode.title} </Link>
              </td>
              <td>{episode.date}</td>
              <td>{episode.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
