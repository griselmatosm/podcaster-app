import useSWR from "swr";
import { podcastDetail, fetcher } from "../services/podcastService";

export const usePodcastEpisodes = (podcastId, fallbackData) => {
  const { data, error, isLoading, isValidating } = useSWR(
    podcastDetail(podcastId),
    fetcher,
    {
      fallbackData,
    }
  );

  const filteredEpisodes = data?.results?.filter(
    (episode) => episode.kind === "podcast-episode"
  );

  const cleanData = filteredEpisodes?.map((episode) => {
    return {
      id: episode.episodeGuid,
      title: episode.trackName,
      description: episode.description,
      date: episode.releaseDate,
      duration: episode.trackTimeMillis,
    };
  });

  return {
    data: cleanData || [],
    isLoading,
    isValidating,
    isError: error,
  };
};
