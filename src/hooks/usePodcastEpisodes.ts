import useSWR from "swr";
import { podcastDetail, fetcher } from "../services/podcastService";
import { cleanEpisode } from "../utils/utils";

export const usePodcastEpisodes = (podcastId) => {
  const { data, error, isLoading, isValidating } = useSWR(
    podcastDetail(podcastId),
    fetcher,
    {
      dedupingInterval: 86400000, // 1 day in miliseconds
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
