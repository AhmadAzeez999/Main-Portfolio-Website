import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I have crafted immersive user experiences through intuitive
                and responsive web interfaces. Using React, Angular, and CSS.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have made robust server-side systems to power dynamic and 
                scalable web applications. Using NodeJS, MySQL, and MongoDB.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have not only designed multiple web pages but also developed robust design systems
                to maintain visual harmony and efficiency throughout my projects.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <a href="https://abiodapro.itch.io/" target="blank">
              <div className={styles.aboutItemText}>
                <h3>Game Developer</h3>
                <p>
                  I have made a couple of games that I'm really proud of. Using Unity and C#.
                </p>
              </div>
            </a>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Graphic Designer</h3>
              <p>
                I have crafted visually captivating designs across various mediums, blending
                creativity with strategic thinking to deliver impactful graphic solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Pixel Artist</h3>
              <p>
                Made art with squares.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Music Composer</h3>
              <p>
                I have made music for my games. Setting the tone and atmosphere through captivating soundtracks and melodies.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
