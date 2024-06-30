import { Outlet, Link } from "react-router-dom";

export const PodcastDetails = () => {
  return (
    <aside>
      <h1>
        <Link to={`/podcast/1234`}>Podcast Details</Link>
      </h1>
      <Outlet />
    </aside>
  );
};
