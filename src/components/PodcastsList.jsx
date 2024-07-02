import React from "react";
import { Link } from "react-router-dom";
import { useTopPodcasts } from "../hooks/useTopPodcasts";

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
              {podcast["im:name"].label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PodcastsList;
