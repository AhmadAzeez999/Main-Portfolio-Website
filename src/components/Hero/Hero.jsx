import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => 
{
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi! I'm Ahmad</h1>
        <p className={styles.subtitle}>  
          BCS | Full-Stack Developer | Game Developer | Cybersecurity Enthusiast
        </p>
        <hr />
        <p className={styles.description}>  
          I'm passionate about building innovative projects and solving 
          real-world problems with code. I'm contantly exploring new technologies and learning, to improve my skills in development, problem-solving, and design.
        </p>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
