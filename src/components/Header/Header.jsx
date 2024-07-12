import styles from "./Header.module.css";
import { useContext } from "react";
import { LoadingContext } from "../../contexts/LoadingContext";
import { Loader } from "../Loader/Loader";
export const Header = ({ title }) => {
  const { isLoading } = useContext(LoadingContext);

  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      {isLoading && <Loader />}
    </header>
  );
};
