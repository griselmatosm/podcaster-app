export const cleanPodcast = (podcastList) => {
  return podcastList && podcastList.map((podcast) => {
    return {
      id: podcast.id.attributes["im:id"],
      title: podcast["im:name"].label,
      image: podcast["im:image"][2].label,
      author: podcast["im:artist"].label,
      description: podcast.summary.label,
    };
  });
};
