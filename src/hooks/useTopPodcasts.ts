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
    attributes: {
      height: string;
      width: string;
    };
  }[];
  category: {
    attributes: {
      label: string;
    };
  };
};

export const useTopPodcasts = (fallbackData) => {
  const { data, error, isLoading, isValidating } = useSWR(topPodcasts, fetcher, {
    fallbackData,
    dedupingInterval: 86400000, // 1 day in miliseconds
  });

  return {
    data: data?.feed?.entry || [],
    isLoading,
    isValidating,
    isError: error,
  };
};
