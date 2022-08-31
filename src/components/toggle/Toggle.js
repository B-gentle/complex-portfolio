import React, {useContext} from 'react';
import './toggle.css';
import { BsSun, BsMoon } from 'react-icons/bs';
import { ThemeContext } from '../../Context';

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () =>{
    theme.dispatch({type : 'toggle'})
  }
    return (
    <div className='toggle' onClick={handleClick}>
        <BsMoon/>
        <BsSun/>
        <div className='toggle-button'
        style={
          darkMode? {left: '2px'} : {right: '2px'}
        }></div>
        </div>
  )
}

export default Toggle