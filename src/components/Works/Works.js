import React from 'react';
import './works.css';
import BTECH from '../../images/BTECH.jpg';
import koloz from '../../images/koloz.png';
import pickk from '../../images/pickk_logo_withouth_bg.png';
import revanga from '../../images/Revanga.jpg';
import cssa from '../../images/cssalognobg.png';

const Works = () => {
    return (
        <div className='works'>
            <div className='services-left'>
                <span>CLIENTS</span>
                <span>Worked for and with all this<br /> Brands and Companies <br /> Revanga, BeeTech, </span>
                <button className='button services-button'>Hire Me</button>
                <div className='blur services-blur' style={{ backgroundColor: 'var(--second-layer-color)' }}></div>
            </div>

            <div className='works-right'>
                <div className='works-main-circle'>
                    <div className='works-sub-circle'>
                        <img src={koloz} alt=''/>
                    </div>
                    <div className='works-sub-circle'>
                        <img src={BTECH} alt=''/>
                    </div>
                    <div className='works-sub-circle'>
                        <img src={pickk} alt=''/>
                    </div>
                    <div className='works-sub-circle'>
                        <img src={revanga} alt=''/>
                    </div>
                    <div className='works-sub-circle'>
                        <img src={cssa} alt=''/>
                    </div>
                </div>
                <div className='works-background-circle blue-circle'></div>
                <div className='works-background-circle yellow-circle'></div>
            </div>
        </div>
    )
}

export default Works