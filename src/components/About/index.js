import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import AnimatedLetter from '../AnimatedLetters';
import './index.scss';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() => {
        const funcSetTimeout = () => {
            setTimeout(() => {
                setLetterClass('text-animate-hover')
            }, 3000)
        };
        funcSetTimeout();
    }, []);
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetter 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>I am a Junior React Developer and I am currently opened to new opportunities. I was working as a Wordpress developer for 4 years. I coordinated development department with 4 developers.</p>
                <p>A few years ago, I discovered an irresistible desire to program. Using open sources and courses, I studied HTML, CSS and JavaScript, based on the knowledge gained, I created several applications. Now I am focusing on ReactJS. I aim to work in a team of professionals where I can unleash my potential and participate in creating wonderful web applications.</p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#dd0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#f06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
};

export default About;