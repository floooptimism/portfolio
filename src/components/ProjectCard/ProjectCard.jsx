import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from './ProjectCard.module.css';
import ArrowRight from '../Icons/ArrowRight/ArrowRight';

function ProjectCard({projectImage, projectName, projectDescription, projectDemoLink, projectTags}){
    const image = getImage(projectImage);
    return (
        <div className={styles.ProjectCard}>
            <div className={``}>
                <GatsbyImage image={image} alt={projectName} />
            </div>
            <div className={styles.ProjectCardInfoContainer}>
                <h3 className={styles.ProjectCardName}>{projectName}</h3>
                <p className={styles.ProjectCardDescription}>{projectDescription}</p>
                <div className={styles.ProjectCardTagsContainer}>
                    {projectTags.map((tag, index) => {
                        return (
                            <div key={index} className={styles.ProjectCardTag}>
                                {tag}
                            </div>
                        )
                    }
                    )}
                </div>
                <div className={styles.ProjectCardDemoLinkContainer}>
                    <a href={projectDemoLink} target="_blank" rel="noopener noreferrer">
                        <button>
                            <span>
                                View Demo
                            </span>
                            <ArrowRight className={`${styles.DemoArrow}`} width={18} height={18}/>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;