import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function navClass({ isActive }) {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

export default function Layout() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [darkMode]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <span className={styles.logo}>AutoService</span>
          <nav className={styles.nav} data-testid="nav">
            <NavLink to="/" end className={navClass}>
              Task-uri
            </NavLink>
            <NavLink to="/despre" className={navClass}>
              Despre
            </NavLink>
            <button
              type="button"
              className={styles.link}
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Schimbă tema"
            >
              {darkMode ? "☀️ Luminos" : "🌙 Întunecat"}
            </button>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>Proiect Tehnologii Web</footer>
    </>
  );
}