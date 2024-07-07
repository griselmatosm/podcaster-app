import { useContext } from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import { PodcastContext } from "../contexts/PodcastContext";
import { TwoColumnsLayout } from "../layouts/TwoColumnsLayout/TwoColumnsLayout";
import { PodcastCardDetail } from "../components/PodcastCardDetail/PodcastCardDetail";
import { usePodcastEpisodes } from "../hooks/usePodcastEpisodes.ts";
import { EpisodesList } from "../components/EpisodesList/EpisodesList.jsx";

export const PodcastDetails = () => {
  const { podcastId } = useParams();
  const { filteredPodcasts } = useContext(PodcastContext);

  const {
    data: podcastEpisodes,
    isLoading,
    isValidating,
  } = usePodcastEpisodes(podcastId);
  console.log("podcastEpisodes", podcastEpisodes);

  const selectedPodcast = filteredPodcasts.find(
    (podcast) => podcast.id === podcastId
  );
  console.log("selectedPodcast", selectedPodcast);
  if (isLoading || isValidating) return <div>Loading...</div>;

  return (
    <TwoColumnsLayout>
      <Link to={`/podcast/${podcastId}`}>
        <PodcastCardDetail podcast={selectedPodcast} />
      </Link>
      <EpisodesList episodes={podcastEpisodes} />
      <Outlet />
    </TwoColumnsLayout>
  );
};
