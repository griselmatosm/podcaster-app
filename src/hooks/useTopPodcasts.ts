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

export const useTopPodcasts = () => {
  const { data, error, isLoading, isValidating } = useSWR(topPodcasts, fetcher, {
    dedupingInterval: 86400000, // 1 day in miliseconds
  });

  console.log("useTopPodcasts", data, error, isLoading);

  return {
    data: data?.feed?.entry || [],
    isLoading,
    isValidating,
    isError: error,
  };
};
