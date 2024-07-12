import { useState, useEffect } from "react";
import { cleanEpisode } from "../utils/utils";
import { fetcher, podcastDetail } from "../services/podcastService";

export const usePodcastDetails = (podcastId) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const checkAndFetchData = async () => {
      const cachedData = localStorage.getItem(`podcast-${podcastId}`);
      const lastFetched = localStorage.getItem(
        `podcast-${podcastId}-lastFetched`
      );

      if (cachedData && lastFetched) {
        const lastFetchedDate = new Date(parseInt(lastFetched, 10));
        const now = new Date();
        const oneDay = 1000 * 60 * 60 * 24; // 1 day in milliseconds

        if (now - lastFetchedDate < oneDay) {
          console.log("Using cached data within 1 day of last fetch");
          setData(JSON.parse(cachedData));
          setIsLoading(false);
          return;
        }
      }

      try {
        console.log("Fetching data again");
        const fetchedData = await fetcher(podcastDetail(podcastId));
        console.log("fetchedData new request", fetchedData);
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
        setIsLoading(false);
      }
    };

    checkAndFetchData();
  }, [podcastId]);

  return { data, isLoading, isError };
};
