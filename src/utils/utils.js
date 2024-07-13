export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const formatDuration = (milliseconds) => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  } else {
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }
};

export const cleanPodcast = (podcastList) => {
  if (!podcastList) return [];
  return podcastList.map((podcast) => {
    return {
      id: podcast.id.attributes["im:id"],
      title: podcast["im:name"].label,
      image: podcast["im:image"][2].label,
      author: podcast["im:artist"].label,
      description: podcast.summary.label,
    };
  });
}

export const cleanEpisode = (episodeList) => {
  if (!episodeList) return [];
  return episodeList
    .filter((episode) => episode.kind === "podcast-episode")
    .map((episode) => {
      return {
        id: episode.trackId,
        title: episode.trackName,
        description: episode.description,
        date: episode.releaseDate,
        duration: episode.trackTimeMillis,
        url: episode.episodeUrl,
      };
    });
};
