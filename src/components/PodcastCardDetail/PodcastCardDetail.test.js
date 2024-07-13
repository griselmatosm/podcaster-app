import React from "react";
import { render, screen } from "@testing-library/react";
import { PodcastCardDetail } from "./PodcastCardDetail";

const mockPodcast = {
  title: "Sample Podcast",
  author: "John Doe",
  description: "This is a sample podcast description.",
  image: "sample-image.jpg",
};

test("renders podcast details correctly", () => {
  render(<PodcastCardDetail podcast={mockPodcast} />);

  expect(screen.getByText("Sample Podcast")).toBeInTheDocument();
  expect(screen.getByText("by John Doe")).toBeInTheDocument();
  expect(
    screen.getByText("This is a sample podcast description.")
  ).toBeInTheDocument();
  expect(screen.getByAltText("Sample Podcast")).toHaveAttribute(
    "src",
    "sample-image.jpg"
  );
});
