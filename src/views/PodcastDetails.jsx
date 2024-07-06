import { useContext } from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import { PodcastContext } from "../contexts/PodcastContext";
import { TwoColumnsLayout } from "../layouts/TwoColumnsLayout/TwoColumnsLayout";
import { PodcastCardDetail } from "../components/PodcastCardDetail/PodcastCardDetail";

export const PodcastDetails = () => {
  const { podcastId } = useParams();
  const { filteredPodcasts } = useContext(PodcastContext);

  const selectedPodcast = filteredPodcasts.find(
    (podcast) => podcast.id.attributes["im:id"] === podcastId
  );
  return (
    <TwoColumnsLayout>
      <Link to={`/podcast/${podcastId}`}>
        <PodcastCardDetail podcast={selectedPodcast} />
      </Link>
      <h2>Lista de episodios</h2>
      <Outlet />
    </TwoColumnsLayout>
  );
};
