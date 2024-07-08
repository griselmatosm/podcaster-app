import useSWR from "swr";
import { topPodcasts, fetcher } from "../services/podcastService";

interface Podcast {
  id: {
    attributes: {
      "im:id": string;
    };
  };
  "im:name": {
    label: string;
  };
  "im:image": {
    label: string;
  };
  "im:artist": {
    label: string;
  };
  summary: {
    label: string;
  };
}

export const useTopPodcasts = () => {
  const { data, error, isLoading, isValidating } = useSWR(
    topPodcasts,
    fetcher,
    {
      dedupingInterval: 86400000, // 1 day in miliseconds
    }
  );

  const cleanedData = data?.feed?.entry.map((podcast) => {
    return {
      id: podcast.id.attributes["im:id"],
      title: podcast["im:name"].label,
      image: podcast["im:image"][2].label,
      author: podcast["im:artist"].label,
      description: podcast.summary.label,
    };
  });

  return {
    data: cleanedData || [],
    isLoading,
    isValidating,
    isError: error,
  };
};
