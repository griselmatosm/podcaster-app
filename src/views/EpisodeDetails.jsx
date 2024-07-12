import { useParams, useOutletContext } from "react-router-dom";
export const EpisodeDetails = () => {
  const { episodeId } = useParams();
  const episodes = useOutletContext();
  const episode = episodes.find(
    (episode) => JSON.stringify(episode.id) === episodeId
  );
  return (
    <div>
      <h1>Episode Details</h1>
      <h2>{episode.title}</h2>
      <p>{episode.description}</p>
    </div>
  );
};
