import React from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import {graphql} from "gatsby";
import * as styles from './projects.module.css';

function Projects({data}) {
    return (
        <div className="px-8">
            <div className="mt-12 mb-12">
                <span className={`${styles.header}`}>Projects</span>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
                {
                    data.allContentfulProject.nodes.map(project => {
                        return <ProjectCard key={project.projectName} projectName={project.projectName}
                                            projectDescription={project.projectDescription.projectDescription}
                                            projectImage={project.projectImage}
                                            projectTags={project.projectTags}
                                            projectDemoLink={project.projectDemoLink}/>
                    })
                }
            </div>
        </div>
    )
}


export const query = graphql`
  query MyQuery{
      allContentfulProject {
        nodes {
          projectName
          projectTags
          projectDescription {
            projectDescription
          }
          projectDemoLink
          projectImage {
            gatsbyImage(width: 310, height: 180)
          }
        }
      }
    }
`



export default Projects;