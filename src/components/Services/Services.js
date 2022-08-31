import React from 'react';
import Card from '../Card/Card';
import './services.css';
import { FaReact, FaNodeJs } from "react-icons/fa";
import cv from './beecv.pdf';


const Services = () => {
    return (
        <div className='services'>
            <div className='services-left'>
                <span>My Services</span>
                <span>I offer quality and great design <br/> website that is very scalable <br /> with any platform</span>
                <a href={cv} download>
                <button className='button services-button'>Download CV</button>
                </a>
                <div className='blur services-blur' style={{ backgroundColor: 'var(--second-layer-color)' }}></div>
            </div>
            <div className='services-right'>
                <div style={{ left: '30rem' }}>
                    <Card
                        emoji={<FaReact />}
                        Title='Web Developer'
                        Description='Designs websites using the following frontend Technologies: HTML, CSS, and Javacascript(ReactJS)'
                    />
                </div>
                <div style={{top: '12rem', left: '10rem'}}>
                    <Card
                        emoji={<FaNodeJs/>}
                        Title='Web Tutor'
                        Description='Teaches web development with the following Technologies: HTML, CSS, and Javacascript(ReactJS)'
                    />
                </div>
                <div className='blur services-blur-2' style={{backgroundColor: 'var(--third-layer-color)'}}></div>

            </div>

        </div>
    )
}

export default Services