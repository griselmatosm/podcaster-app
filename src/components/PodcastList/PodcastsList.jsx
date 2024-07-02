import React from "react";
import { Link } from "react-router-dom";
import { useTopPodcasts } from "../../hooks/useTopPodcasts";
import { PodcastCard } from "../PodastCard/PodcastCard";

const PodcastsList = () => {
  const { data, isLoading, isError } = useTopPodcasts();
  console.log("en el componente Podcast List", data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading podcasts</div>;

  return (
    <div>
      <ul>
        {data.map((podcast) => (
          <li key={podcast.id.attributes["im:id"]}>
            <Link to={`/podcast/${podcast.id.attributes["im:id"]}`}>
              <PodcastCard podcast={podcast} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PodcastsList;
