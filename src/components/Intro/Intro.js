import React from 'react';
import './Intro.css';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { BiCode } from 'react-icons/bi';
import {FaCode} from 'react-icons/fa';
import mypic from './../../images/theBee.png';
import vector1 from './../../images/Vector1.png';
import vector2 from './../../images/Vector2.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-name">
          <span>Hi! I am </span>
          <span>Bright Eyo</span>
          <span>I am a Front-end Web developer, with a zeal to grow and transition to a full stack web developer</span>
        </div>
        <button className="button intro-button">Hire Me</button>
        <div className="intro-icons">
          <AiFillGithub />
          <AiFillLinkedin />
          <AiFillTwitterCircle />
        </div>
      </div>
      <div className="intro-right">
        <img src={vector1} alt='' />
        <img src={vector2} alt='' />
        <img src={mypic} alt='' />
        <div style={{top: '-4%', left: '70%'}}>
          <FloatingDiv image={<BiCode/>} text1='Web' text2='developer' />
        </div>
        <div style={{top: "70%", right: '70%'}}>
          <FloatingDiv image={<FaCode />} text1='Web' text2='Tutor' />
        </div>
        <div className='blur' style={{backgrundColor: 'var(--first-layer-color)'}}></div>
        <div className='blur' style={
          {backgroundColor: 'var(--second-layer-color)',
      top: '17rem',
      left: '-9rem',
      width: '21rem',
      height: '11rem'
      }
      }></div>
      </div>
    </div>
  )
}

export default Intro