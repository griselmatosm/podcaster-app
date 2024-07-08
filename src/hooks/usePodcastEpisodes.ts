import useSWR from "swr";
import { podcastDetail, fetcher } from "../services/podcastService";
import { cleanEpisode } from "../utils/utils";

export const usePodcastEpisodes = (podcastId, fallbackData) => {
  const { data, error, isLoading, isValidating } = useSWR(
    podcastDetail(podcastId),
    fetcher,
    {
      fallbackData,
    }
  );

  const cleanedData = cleanEpisode(data?.results);

  return {
    data: cleanedData || [],
    isLoading,
    isValidating,
    isError: error,
  };
};
