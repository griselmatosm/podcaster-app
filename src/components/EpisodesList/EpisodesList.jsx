import { Link, useOutletContext } from "react-router-dom";
import styles from "./EpisodesList.module.css";
import { formatDate, formatDuration } from "../../utils/utils";

export const EpisodesList = () => {
const episodes = useOutletContext();

  return (
    <div className={styles.episodesList}>
      <header className={styles.episodesListHeader}>
        <h2>Episodes: {episodes.length}</h2>
      </header>
      <div className={styles.episodesListContainer}>
        <table className={styles.episodesListTable}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {episodes.map((episode) => (
              <tr className={styles.episodeRow} key={episode.id}>
                <td>
                  <Link to={`episode/${episode.id}`}>{episode.title} </Link>
                </td>
                <td>{formatDate(episode.date)}</td>
                <td>{formatDuration(episode.duration)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
