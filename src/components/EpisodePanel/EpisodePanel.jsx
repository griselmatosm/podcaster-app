import styles from "./EpisodePanel.module.css";

export const EpisodePanel = ({ episode }) => {
  return (
    <div className={styles.episodePanel}>
      <h2 className={styles.episodePanelTitle}>{episode.title}</h2>
      <p
        className={styles.episodePanelDescription}
        dangerouslySetInnerHTML={{ __html: episode.description }}
      ></p>
      <audio className={styles.episodePanelAudio} controls>
        <source src={episode.url} />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};
