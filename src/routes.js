import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { MainView } from "./views/MainView";
import { PodcastDetails } from "./views/PodcastDetails";
import { EpisodeDetails } from "./views/EpisodeDetails";
import { topPodcasts, podcastDetail, fetcher } from "./services/podcastService";

const topPodcastsLoader = async () => {
  console.log("Loader is running");
  const data = await fetcher(topPodcasts);
  return data.feed.entry;
};

const podcastDetailsLoader = async ({ params }) => {
  const data = await fetcher(podcastDetail(params.podcastId));
  return data.results;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <MainView />, loader: topPodcastsLoader },
      {
        path: "/podcast/:podcastId",
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
