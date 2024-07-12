import styles from "./PodcastCard.module.css";

export const PodcastCard = ({ podcast }) => {
  return (
    <div className={styles.podcastCard}>
      <img
        alt={podcast.title}
        src={podcast.image}
      />
      <h3>{podcast.title.toUpperCase()}</h3>
      <p>Author: {podcast.author}</p>
    </div>
  );
};
