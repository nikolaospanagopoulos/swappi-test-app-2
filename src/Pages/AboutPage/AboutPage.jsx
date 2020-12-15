import React from 'react';
import './AboutPage.css'

const AboutPage = () => {
    return ( 
        <div>
            <h1 className='about-title'>About this awesome website</h1>
            <h3 className='about-subtitle'> this website was created because the knowledge about STAR WARS should be shared freely with the rest of the world. Check the people and movie links. With every card you click, more information and more links appear.</h3>
            <p className='about-information'> created by Nikolaos Panagopoulos, using react.js </p>
            <div className='about-link-container'>
            <a href="https://www.nikospan.com/" target="_blank"  rel="noreferrer" className='about-link'>visit website</a>
            </div>
            
        </div>
     );
}
 
export default AboutPage;