import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { MainView } from "./views/MainView";
import { PodcastDetails } from "./views/PodcastDetails/PodcastDetails";
import { EpisodeDetails } from "./views/EpisodeDetails";
import { EpisodesList } from "./components/EpisodesList/EpisodesList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainView />,
        errorElement: <div>Error loading top podcasts</div>,
      },
      {
        path: "podcast/:podcastId",
        element: <PodcastDetails />,
        errorElement: <div>Error loading podcast</div>,
        children: [
          { index: true, element: <EpisodesList /> },
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
