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
};

export const useTopPodcasts = (fallbackData) => {
  const { data, error, isLoading, isValidating } = useSWR(topPodcasts, fetcher, {
    fallbackData,
    dedupingInterval: 86400000, // 1 day in miliseconds
  });

  const cleanData = data?.feed?.entry?.map((podcast: Podcast) => {
    return {
      id: podcast.id.attributes["im:id"],
      title: podcast["im:name"].label,
      image: podcast["im:image"][2].label,
      author: podcast["im:artist"].label,
      description: podcast.summary.label,
    };
  });

  return {
    data: cleanData || [],
    isLoading,
    isValidating,
    isError: error,
  };
};
