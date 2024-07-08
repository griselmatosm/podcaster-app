import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { MainView } from "./views/MainView";
import { PodcastDetails } from "./views/PodcastDetails";
import { EpisodeDetails } from "./views/EpisodeDetails";
import { topPodcasts, podcastDetail, fetcher } from "./services/podcastService";
import { cleanPodcast, cleanEpisode } from "./utils/utils";

const topPodcastsLoader = async () => {
  const data = await fetcher(topPodcasts);
  const cleanedData = cleanPodcast(data.feed.entry);
  return cleanedData;
};

const podcastDetailsLoader = async ({ params }) => {
  console.log("podcastDetailsLoader", "params", params);
  const data = await fetcher(podcastDetail(params.podcastId));
  const cleanedData = cleanEpisode(data?.results);
  return cleanedData;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <MainView />, loader: topPodcastsLoader },
      {
        path: "podcast/:podcastId",
        element: <PodcastDetails />,
        loader: podcastDetailsLoader,
        children: [
          {
            path: "episode/:episodeId",
            element: <EpisodeDetails />,
          },
        ],
      },
    ],
  },
]);

export default router;
