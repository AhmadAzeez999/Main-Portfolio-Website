import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => 
{
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi! I'm Ahmad</h1>
        <hr />
        <p className={styles.description}>  
          I am a Computer Science student, passionate about both web development (my main focus)
          and game development (as a hobby). I'm proficient in React, Angular, NodeJS, and Javascript.
        </p>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
