import styles from "./PodcastCardDetail.module.css";

export const PodcastCardDetail = ({ podcast }) => {
  return (
    <div className={styles.podcastCardDetail}>
      <img
        className={styles.image}
        alt={podcast.title}
        src={podcast.image}
      />
      <hr />
      <h3>{podcast.title}</h3>
      <em>by {podcast.author}</em>
      <hr />
      <h3>Description:</h3>
      <em>{podcast.description}</em>
    </div>
  );
};
