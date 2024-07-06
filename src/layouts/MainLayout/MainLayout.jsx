import styles from "./MainLayout.module.css";

export const MainLayout = ({ children }) => {
  return <main className={styles.mainLayout}>{children}</main>;
};
