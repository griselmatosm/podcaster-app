import styles from "./PodcastCardDetail.module.css";

export const PodcastCardDetail = ({ podcast }) => {
  return (
    <div className={styles.podcastCardDetail}>
      <img
        className={styles.image}
        alt={podcast["im:name"].label}
        src={podcast["im:image"][2]["label"]}
      />
      <hr />
      <h3>{podcast["im:name"].label}</h3>
      <em>by {podcast["im:artist"].label}</em>
      <hr />
      <h3>Description:</h3>
      <em>{podcast.summary.label}</em>
    </div>
  );
};
