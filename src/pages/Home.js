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
                <h2>Hola, mi nombre es Jhony Saenz Hurtado</h2>
                <div className='prompt'>
                    <p>
                        Soy Full Stack Web Developer, Tecnólogo en sistemas de información y estudiante de Ingeniería de Software. En mi vida laboral siempre
                        he estado enfocado en el ámbito de la tecnología, principalmente en labores administrativas. Sin embargo, con el tiempo me di cuenta
                        de que mi verdadera pasión es la programación. Por eso, decidí formarme como Full Stack Web Developer y, al mismo tiempo, continuar mis
                        estudios universitarios en Ingeniería de Software. Me siento muy satisfecho de haber tomado esta decisión, ya que me ha permitido
                        desarrollar una amplia gama de habilidades y conocimientos técnicos, y también me ha brindado la oportunidad de trabajar en proyectos
                        interesantes y desafiantes. Además, estoy constantemente buscando nuevas oportunidades de aprendizaje y me encanta estar al tanto de
                        las últimas tendencias y novedades en el mundo de la tecnología. En resumen, soy un apasionado de la programación y estoy comprometido
                        a seguir aprendiendo y creciendo en mi carrera.
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