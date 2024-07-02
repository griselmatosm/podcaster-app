import useSWR from "swr";
import { topPodcasts, fetcher } from "../services/podcastService";

export const useTopPodcasts = () => {
  const { data, error, isLoading } = useSWR(topPodcasts, fetcher, {
    dedupingInterval: 86400000, // 1 day in miliseconds
  });

  return {
    data: data?.feed?.entry || [],
    isLoading,
    isError: error,
  };
};
