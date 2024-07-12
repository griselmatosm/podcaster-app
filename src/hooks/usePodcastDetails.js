import { useState, useEffect, useContext } from "react";
import { cleanEpisode } from "../utils/utils";
import { fetcher, podcastDetail } from "../services/podcastService";
import { LoadingContext } from "../contexts/LoadingContext";

export const usePodcastDetails = (podcastId) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { setIsLoading: setIsLoadingContext } = useContext(LoadingContext);

  const setIsLoadingState = (isLoading) => {
    if (!isLoading) {
      setTimeout(() => setIsLoadingContext(isLoading), 500);
    } else {
      setIsLoadingContext(isLoading);
    }
  };


  useEffect(() => {
    const checkAndFetchData = async () => {
      // Delay to ensure spinner visibility
      setIsLoadingState(true);
      setIsLoading(true);

      const cachedData = localStorage.getItem(`podcast-${podcastId}`);
      const lastFetched = localStorage.getItem(
        `podcast-${podcastId}-lastFetched`
      );

      if (cachedData && lastFetched) {
        const lastFetchedDate = new Date(parseInt(lastFetched, 10));
        const now = new Date();
        const oneDay = 1000 * 60 * 60 * 24; // 1 day in milliseconds

        if (now - lastFetchedDate < oneDay) {
          setData(JSON.parse(cachedData));
          setIsLoadingState(false);
          setIsLoading(false);
          return;
        }
      }

      try {
        const fetchedData = await fetcher(podcastDetail(podcastId));
        const cleanedData = cleanEpisode(fetchedData.results);

        setData(cleanedData);

        localStorage.setItem(
          `podcast-${podcastId}`,
          JSON.stringify(cleanedData)
        );
        localStorage.setItem(
          `podcast-${podcastId}-lastFetched`,
          Date.now().toString()
        );
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsError(true);
      } finally {
        setIsLoadingState(false);
        setIsLoading(false);
      }
    };

    checkAndFetchData();
  }, [podcastId]);

  return { data, isLoading, isError };
};
