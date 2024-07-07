import axios from "axios";

const API_URL = "https://itunes.apple.com";
const allOriginsUrl = "https://api.allorigins.win/get?url=";

export const fetcher = async (url) => {
  try {
    const response = await axios.get(
      `${allOriginsUrl}${encodeURIComponent(url)}`
    );
    return JSON.parse(response.data.contents);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const topPodcasts = `${API_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`;

export const podcastDetail = (podcastId) =>
  `${API_URL}/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode`;
