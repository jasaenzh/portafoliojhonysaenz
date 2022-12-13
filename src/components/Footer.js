import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css"

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <a href="https://www.linkedin.com/in/jhony-saenz-hurtado/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                <a href="https://github.com/jasaenzh" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
                <a href="mailto:jash0310@gmail.com" target="_blank" rel="noopener noreferrer"><EmailIcon /></a>
            </div>
        </div>
    )
}

export default Footer