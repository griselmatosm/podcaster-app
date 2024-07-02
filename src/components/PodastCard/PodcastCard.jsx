import styles from "./PodcastCard.module.css";
export const PodcastCard = ({ podcast }) => {
  return (
    <div className={styles.podcastCard}>
      <img
        alt={podcast["im:name"].label}
        src={podcast["im:image"][2]["label"]}
      />
      <h3>{podcast["im:name"].label.toUpperCase()}</h3>
      <p>Author: {podcast["im:artist"].label}</p>
    </div>
  );
};
