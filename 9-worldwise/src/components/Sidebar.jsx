import AppNav from "./AppNav";
import Logo from "../components/Logo";
import styles from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Kutay Şahin
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
