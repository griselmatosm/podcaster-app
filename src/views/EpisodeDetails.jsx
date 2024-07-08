import { useParams, useOutletContext } from "react-router-dom";
export const EpisodeDetails = () => {
  const { episodeId } = useParams();
  const episodes = useOutletContext();
  console.log("episodes en EpisodeDetails", episodes);
  const episode = episodes.find((episode) => episode.id === episodeId);
  return (
    <div>
      <h2>{episode.title}</h2>
      <p>{episode.description}</p>
    </div>
  );
};
