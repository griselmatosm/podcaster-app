import PodcastsList from "../components/PodcastList/PodcastsList";
import { Searcher } from "../components/Searcher/Searcher";
import { MainLayout } from "../layouts/MainLayout/MainLayout";

export const MainView = () => {
  return (
    <MainLayout>
      <Searcher />
      <PodcastsList />
    </MainLayout>
  );
};
