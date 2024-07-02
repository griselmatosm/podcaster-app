import PodcastsList from "../components/PodcastList/PodcastsList";
import { MainLayout } from "../layouts/MainLayout/MainLayout";

export const MainView = () => {
  return (
    <MainLayout>
      <PodcastsList />
    </MainLayout>
  );
};
