import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import React from 'react';
import "../styles/Home.css"

function Home() {
    return (
        <div className='home'>
            <div className='about'>
                <h2>Hola, mi nombre Jhony Alberto Saenz Hurtado</h2>
                <div className='prompt'>
                    <p>
                        Soy Programador Full Stack Web Developer y Estudiante de Ingenieria de Software
                    </p>
                    <a href="https://www.linkedin.com/in/jhony-saenz-hurtado/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                    <a href="https://github.com/jasaenzh" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
                    <a href="mailto:jash0310@gmail.com" target="_blank" rel="noopener noreferrer"><EmailIcon /></a>
                </div>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>
                            React, Angular, Redux, HTML, CSS, BootStrap
                        </span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span> Node.js, Express, Sequelize, Postgres </span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>JavaScript, TypeScript</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home