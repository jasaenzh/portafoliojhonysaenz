import React from 'react';
import { useParams } from 'react-router-dom'
import { ProjecList } from '../helpers/ProjectList';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Button } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import WebIcon from '@material-ui/icons/Web';
import "../styles/ProjectDisplay.css"

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjecList[id]
    return (
        <div className='project'>
            <h1> {project.name} </h1>
            <img src={project.image} />
            <div className='parrafoProject'>
                {project.description}
            </div>
            <p>
                <b>Skills:</b> {project.skills}
            </p>

            <div className='projectIcon'>
                <Button className='projectButtonLink'>
                    <div>
                        <div>
                            <a href={project.linkGitHubBackEnd} target="_blank" rel="noopener noreferrer"  >
                                <GitHubIcon></GitHubIcon>
                            </a>
                        </div>
                        <div>
                            <h5>backend</h5>
                        </div>
                    </div>
                </Button>

                <Button className='projectButtonLink'>
                    <div>
                        <div>
                            <a href={project.linkGitFrontEnd} target="_blank" rel="noopener noreferrer"  >
                                <GitHubIcon></GitHubIcon>
                            </a>
                        </div>
                        <div>
                            <h5>frontend</h5>
                        </div>
                    </div>
                </Button>

                <Button className='projectButtonLink'>
                    <div>
                        <div>
                            <a href={project.linkDeploy} target="_blank" rel="noopener noreferrer"  >
                                <WebIcon></WebIcon>
                            </a>
                        </div>
                        <div>
                            <h5>Page</h5>
                        </div>
                    </div>
                </Button>

            </div>

        </div>
    )
}

export default ProjectDisplay