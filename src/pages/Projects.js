import React from 'react'
import ProjectItem from '../components/ProjectItem'
import "../styles/Projects.css"
import { ProjecList } from '../helpers/ProjectList'

function Projects() {
    return (
        <div className='projects'>
            <h1>Proyectos Personales</h1>
            <div className='projectList'>
                {
                    ProjecList.map((project, idx) => {
                        return <ProjectItem id={idx} name={project.name} image={project.image} />
                    })
                }
            </div>
        </div>
    )
}

export default Projects