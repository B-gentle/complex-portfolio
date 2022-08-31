import React, {useContext} from 'react';
import './FloatingDiv.css';
import { ThemeContext } from '../../Context';
const FloatingDiv = ({image, text1, text2}) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
<div className='floaters'>
        <span>{image}</span>
        <span
        style={{ color: darkMode? 'black' : '' }}>{text1} <br/> {text2}</span>
    </div>
  )
}

export default FloatingDiv