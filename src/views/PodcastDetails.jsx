import { useContext } from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import { PodcastContext } from "../contexts/PodcastContext";
import { PodcastCardDetail } from "../components/PodcastCardDetail/PodcastCardDetail";

export const PodcastDetails = () => {
  const { podcastId } = useParams();
  const { filteredPodcasts } = useContext(PodcastContext);

  const selectedPodcast = filteredPodcasts.find(
    (podcast) => podcast.id.attributes["im:id"] === podcastId
  );
  console.log("selectedPodcast", selectedPodcast);
  return (
    <aside>
      <Link to={`/podcast/${podcastId}`}>
        <PodcastCardDetail podcast={selectedPodcast} />
      </Link>
      <Outlet />
    </aside>
  );
};
