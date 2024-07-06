import styles from "./TwoColumnsLayout.module.css";

export const TwoColumnsLayout = ({ children }) => {
  const [leftColumn, rightColumn] = children;
  return (
    <main className={styles.twoColumnsLayout}>
      <aside>{leftColumn}</aside>
      <section>{rightColumn}</section>
    </main>
  );
};
