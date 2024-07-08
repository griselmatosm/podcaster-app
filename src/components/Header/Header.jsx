import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Loader } from "../Loader/Loader";
export const Header = ({ title }) => {
  const [isPending, setIsPending] = useState(false);
  console.log("isPending", isPending);
  const location = useLocation();

  useEffect(() => {
    setIsPending(true);
    const timer = setTimeout(() => {
      setIsPending(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      {isPending && <Loader />}
    </header>
  );
};
