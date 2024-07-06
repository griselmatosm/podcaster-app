import styles from "./Header.module.css";
import { useNavigation } from "react-router-dom";
import { Loader } from "../Loader/Loader";
export const Header = ({ title }) => {
  const { state } = useNavigation();
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      {state === "loading" && <Loader />}
    </header>
  );
};
