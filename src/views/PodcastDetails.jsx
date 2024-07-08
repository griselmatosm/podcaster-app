import { useContext, useEffect } from "react";
import { Outlet, Link, useParams, useLoaderData } from "react-router-dom";
import { PodcastContext } from "../contexts/PodcastContext";
import { TwoColumnsLayout } from "../layouts/TwoColumnsLayout/TwoColumnsLayout";
import { PodcastCardDetail } from "../components/PodcastCardDetail/PodcastCardDetail";
import { usePodcastEpisodes } from "../hooks/usePodcastEpisodes.ts";
import { EpisodesList } from "../components/EpisodesList/EpisodesList.jsx";
import { useTopPodcasts } from "../hooks/useTopPodcasts.ts";

export const PodcastDetails = () => {
  const { podcastId } = useParams();
  const { filteredPodcasts, setFilteredPodcasts } = useContext(PodcastContext);
  const episodes = useLoaderData();

  const {data: podcasts, isLoading: isLoadingPodcasts} = useTopPodcasts();
  const { isLoading, isValidating } = usePodcastEpisodes(podcastId, episodes);

  useEffect(() => {
    if (podcasts && podcasts.length > 0 && filteredPodcasts.length === 0) {
      setFilteredPodcasts(podcasts);
    }
  }, [podcasts, filteredPodcasts.length, setFilteredPodcasts]);

  const selectedPodcast = podcasts.find(
    (podcast) => podcast.id === podcastId
  );
  if (isLoading || isValidating || isLoadingPodcasts) return <div>Loading...</div>;

  console.log('Episodes passed to Outlet:', episodes);

  return (
    <TwoColumnsLayout>
      <Link to={`podcast/${podcastId}`}>
        <PodcastCardDetail podcast={selectedPodcast} />
      </Link>
      <EpisodesList episodes={episodes} />
      <Outlet context={episodes} />
    </TwoColumnsLayout>
  );
};
