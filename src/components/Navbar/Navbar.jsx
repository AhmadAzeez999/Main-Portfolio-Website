import { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => 
{
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  const toggleLightMode = () => 
  {
    setLightMode(!lightMode);
    const root = document.documentElement;
    if (lightMode) 
    {
      root.style.setProperty("--color-text", "#fff");
      root.style.setProperty("--color-primary", "#00a5b3");
      root.style.setProperty("--color-secondary", "#009ef7");
      root.style.setProperty("--color-dark", "#005276");
      root.style.setProperty("--color-bg", "#000626");
      root.style.setProperty("--color-display-circle", "#005276");
    }
    else 
    {
      root.style.setProperty("--color-text", "#131313");
      root.style.setProperty("--color-primary", "#bee3f1");
      root.style.setProperty("--color-secondary", "#00a5b3");
      root.style.setProperty("--color-dark", "#ccf6ff");
      root.style.setProperty("--color-bg", "#F4F3F2");
      root.style.setProperty("--color-display-circle", "#00a5b3");
    }
  };

  return (
    <nav className={`${styles.navbar} ${lightMode && styles.lightMode}`}>
      <a className={styles.title} href="/">
        Ahmad Azeez
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className={styles.lightModeSwitch} onClick={toggleLightMode}>
          <img
            src={
              lightMode
                ? getImageUrl("nav/moon.png")
                : getImageUrl("nav/light.png")
            }
            alt="Light mode switch button"
          />
        </div>
      </div>
    </nav>
  );
};
