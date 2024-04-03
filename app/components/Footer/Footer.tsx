import { FC } from "react";
import styles from "./Footer.module.css";
import { Link } from "@remix-run/react";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Link to="/">Home</Link>
    </footer>
  );
};
