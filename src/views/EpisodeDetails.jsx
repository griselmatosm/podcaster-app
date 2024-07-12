import { useParams, useOutletContext } from "react-router-dom";
import { EpisodePanel } from "../components/EpisodePanel/EpisodePanel";
export const EpisodeDetails = () => {
  const { episodeId } = useParams();
  const episodes = useOutletContext();
  const episode = episodes.find(
    (episode) => JSON.stringify(episode.id) === episodeId
  );

  if (!episode) return <div>Episode not found</div>;
  return <EpisodePanel episode={episode} />;
};
