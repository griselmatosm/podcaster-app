import { useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { EpisodePanel } from "../components/EpisodePanel/EpisodePanel";
import { useLoadingState } from "../hooks/useLoadingState";
export const EpisodeDetails = () => {
  const { episodeId } = useParams();
  const episodes = useOutletContext();
  const setIsLoading = useLoadingState();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  const episode = episodes.find(
    (episode) => JSON.stringify(episode.id) === episodeId
  );

  if (!episode) return <div>Episode not found</div>;
  return <EpisodePanel episode={episode} />;
};
