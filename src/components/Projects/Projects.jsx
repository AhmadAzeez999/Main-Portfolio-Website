import React, { useState } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

const categories = [
    "Web Development",
    "Mobile App Development",
    "Desktop App Development",
    "Game Development",
    "AI Projects",
    "Others"
];

export const Projects = () => 
{
    const [selectedCategory, setSelectedCategory] = useState("Web Development");

    const handleCategoryClick = (category) => 
    {
        setSelectedCategory(category);
    };

    const filteredProjects = projects.filter(
        (project) => project.category === selectedCategory
    );

    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.categories}>
                {categories.map((category) => (
                <button
                    key={category}
                    className={`${styles.categoryButton} ${category === selectedCategory ? styles.active : ""}`}
                    onClick={() => handleCategoryClick(category)}
                >
                    {category}
                </button>
                ))}
            </div>
            <div className={styles.projects}>
                {filteredProjects.map((project, id) => (
                <ProjectCard key={id} project={project} />
                ))}
            </div>
        </section>
    );
};
