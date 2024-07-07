import useSWR from "swr";
import { topPodcasts, fetcher } from "../services/podcastService";
import { cleanPodcast } from "../utils/utils";

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

export const useTopPodcasts = (fallbackData) => {
  const { data, error, isLoading, isValidating } = useSWR(
    topPodcasts,
    fetcher,
    {
      fallbackData,
      dedupingInterval: 86400000, // 1 day in miliseconds
    }
  );

  const cleanedData = cleanPodcast(data?.feed?.entry);

  return {
    data: cleanedData || [],
    isLoading,
    isValidating,
    isError: error,
  };
};
