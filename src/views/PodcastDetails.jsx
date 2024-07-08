import { useContext, useEffect } from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import { PodcastContext } from "../contexts/PodcastContext";
import { TwoColumnsLayout } from "../layouts/TwoColumnsLayout/TwoColumnsLayout";
import { PodcastCardDetail } from "../components/PodcastCardDetail/PodcastCardDetail";
import { usePodcastEpisodes } from "../hooks/usePodcastEpisodes.ts";
import { useTopPodcasts } from "../hooks/useTopPodcasts.ts";

export const PodcastDetails = () => {
  const { podcastId } = useParams();
  const { filteredPodcasts, setFilteredPodcasts } = useContext(PodcastContext);

  const {data: podcasts, isLoading: isLoadingPodcasts} = useTopPodcasts();
  const {data: episodes, isLoading, isValidating } = usePodcastEpisodes(podcastId);

  useEffect(() => {
    if (podcasts && podcasts.length > 0 && filteredPodcasts.length === 0) {
      setFilteredPodcasts(podcasts);
    }
  }, [podcasts, filteredPodcasts.length, setFilteredPodcasts]);

  const selectedPodcast = podcasts.find(
    (podcast) => podcast.id === podcastId
  );
  if (isLoading || isValidating || isLoadingPodcasts) return <div>Loading...</div>;

  return (
    <TwoColumnsLayout>
      <Link to={`/podcast/${podcastId}`}>
        <PodcastCardDetail podcast={selectedPodcast} />
      </Link>
      <Outlet context={episodes} />
    </TwoColumnsLayout>
  );
};
