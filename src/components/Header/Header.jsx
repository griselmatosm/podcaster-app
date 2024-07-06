import styles from "./Header.module.css";

export const Header = ({ title }) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
    </header>
  );
};
