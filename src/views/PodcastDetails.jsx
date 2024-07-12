import { useEffect, useContext } from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import { TwoColumnsLayout } from "../layouts/TwoColumnsLayout/TwoColumnsLayout";
import { PodcastCardDetail } from "../components/PodcastCardDetail/PodcastCardDetail";
import { usePodcastDetails } from "../hooks/usePodcastDetails";
import { usePodcasts } from "../hooks/usePodcasts";
import { LoadingContext } from "../contexts/LoadingContext";

export const PodcastDetails = () => {
  const { podcastId } = useParams();
  const { data: episodes, isLoading, isError } = usePodcastDetails(podcastId);
  const { data: podcasts } = usePodcasts();
  const { setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading podcast details</div>;

  const selectedPodcast = podcasts?.find((podcast) => podcast.id === podcastId);

  return (
    <TwoColumnsLayout>
      <Link to={`/podcast/${podcastId}`}>
        <PodcastCardDetail podcast={selectedPodcast} />
      </Link>
      <Outlet context={episodes} />
    </TwoColumnsLayout>
  );
};
