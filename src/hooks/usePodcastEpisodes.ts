import useSWR from "swr";
import { podcastDetail, fetcher } from "../services/podcastService";

export const usePodcastEpisodes = (podcastId) => {
  const { data, error, isLoading, isValidating } = useSWR(
    podcastDetail(podcastId),
    fetcher,
    {
      dedupingInterval: 86400000, // 1 day in miliseconds
    }
  );

  const cleanedData = data?.results
    .filter((episode) => episode.kind === "podcast-episode")
    .map((episode) => {
      return {
        id: episode.trackId,
        title: episode.trackName,
        description: episode.description,
        date: episode.releaseDate,
        duration: episode.trackTimeMillis,
      };
    });

  return {
    data: cleanedData || [],
    isLoading,
    isValidating,
    isError: error,
  };
};
