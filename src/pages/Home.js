import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import React from 'react';
import "../styles/Home.css"
import { technologies } from '../helpers/Data'

function Home() {
    return (
        <div className='home'>
            <div className='about'>
                <h2>Hola, mi nombre Jhony Alberto Saenz Hurtado</h2>
                <div className='prompt'>
                    <p>
                        Soy Full Stack Web Develop, Tecnólogo en sistemas de información, estudiante de Ingeniería de Sistemas entre otros cursos que he obtenido a lo largo de mi vida profesional,
                        actualmente estoy trabajando para NCR que es el líder mundial en tecnología empresarial para restaurantes, minoristas y bancos.
                        Mi vida profesional siempre ha estado enfocada al ámbito de la tecnología, pero más para el lado del servicio.
                    </p>
                    <a href="https://www.linkedin.com/in/jhony-saenz-hurtado/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                    <a href="https://github.com/jasaenzh" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
                    <a href="mailto:jash0310@gmail.com" target="_blank" rel="noopener noreferrer"><EmailIcon /></a>
                </div>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <div className="photo-gallery">
                    {technologies.map(data => (
                        <div className="photo-container">
                            <a target='_blank' href={data.link} rel="noreferrer"><img className='skills_icons' src={data.image} alt="imagenSkill" /></a>
                            <p className='card-text'>{data.title}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Home