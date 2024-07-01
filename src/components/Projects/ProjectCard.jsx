import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = (
{
  project: { title, imageSrc, description, skills, demo, source },
}) => 
{
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <div className={styles.container-top}>
        <h3 className={styles.title}>{title}</h3>
        <ul className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.links}>
          <a href={demo} className={styles.link} target="blank">
            Demo
          </a>
          <a href={source} className={styles.link} target="blank">
            GitHub
          </a>
        </div>
    </div>
  );
};
