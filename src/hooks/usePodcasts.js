import { useState, useEffect } from "react";
import { cleanPodcast } from "../utils/utils";
import { fetcher, topPodcasts } from "../services/podcastService";

export const usePodcasts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const checkAndFetchData = async () => {
      const cachedPodcasts = localStorage.getItem("podcasts");
      const dateLastFetched = localStorage.getItem("dateLastFetched");

      if (cachedPodcasts && dateLastFetched) {
        const lastFetchedDate = new Date(parseInt(dateLastFetched, 10));
        const now = new Date();
        const oneDay = 1000 * 60 * 60 * 24; // 1 day in milliseconds

        if (now - lastFetchedDate < oneDay) {
          setData(JSON.parse(cachedPodcasts));
          setIsLoading(false);
          return;
        }
      }

      try {
        const fetchedData = await fetcher(topPodcasts);
        const cleanedData = cleanPodcast(fetchedData.feed.entry);

        setData(cleanedData);

        localStorage.setItem("podcasts", JSON.stringify(cleanedData));
        localStorage.setItem("dateLastFetched", Date.now().toString());
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    checkAndFetchData();
  }, []);

  return { data, isLoading, isError };
};
