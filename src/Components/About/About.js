import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css';
const About = () => {
    return (
        <div>
            <div className='about '>
                <Header />
                <div className="about-me container">
                    <h1 className='special text-white text-center mt-4'>About MySelf</h1>
                    <p className='text-white'>
                        I'm FHRC Aiman from Sylhet. Currently studying Science at Madan Mohan College. And my goal is to become a Web Developer. Currently I'm Learning it from Programming Hero Web Course and making progress. I'm really determined about my goal. By doing hard work I will become a web developer. </p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;