import { useEffect, useContext } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { EpisodePanel } from "../components/EpisodePanel/EpisodePanel";
import { LoadingContext } from "../contexts/LoadingContext";
export const EpisodeDetails = () => {
  const { episodeId } = useParams();
  const episodes = useOutletContext();
  const { setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [episodeId, setIsLoading]);
  const episode = episodes.find(
    (episode) => JSON.stringify(episode.id) === episodeId
  );

  if (!episode) return <div>Episode not found</div>;
  return <EpisodePanel episode={episode} />;
};
