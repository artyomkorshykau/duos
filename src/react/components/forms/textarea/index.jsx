'use client'

import cssIf from '@/scripts/helpers/css.if';
import s from './textarea.module.scss';
import { useEffect, useState, useRef } from 'react';

const MIN_HEIGHT = 110;

const Textarea = ( props ) => {

  const { 

    id = "", 
    set = () => {},
    value, 
    withTitle = false,
    title = "", 
    error = "", 
    type = "text",
    placeholder = "",
    className = "",
    inputClassName = "",
    refDOM = null,  
    onClick = () => {},
    onKeyUp = () => {},
    onBlur = () => {},
    onChange = () => {},
    ...inputParams

  } = props;

  const [height, setHeight] = useState(MIN_HEIGHT); 
  const [isResizing, setIsResizing] = useState(false);
  const [startY, setStartY] = useState(0);
  const textfieldDivRef = useRef(null);

  const handleMouseDown = (e) => {

    setIsResizing(true);
    setStartY(e.clientY);

  };

  const handleMouseMove = (e) => {

    if (isResizing) {

      const newHeight = height + (e.clientY - startY);

      setHeight(newHeight);
      setStartY(e.clientY);
      
    }

  };

  const handleMouseUp = () => {

    setIsResizing(false);

  };

  const handleTouchStart = (e) => {
    
    setIsResizing(true);
    setStartY(e.touches[0].clientY);

  };

  const handleTouchMove = (e) => {

    if (isResizing) {

      const newHeight = height + (e.touches[0].clientY - startY);
      setHeight(newHeight);
      setStartY(e.touches[0].clientY);

    }

  };

  const handleTouchEnd = () => {

    setIsResizing(false);

  };

  useEffect(() => {

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {

      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
  
    };

  }, [isResizing, height]);

  return (
    
    <div  

      className = { `${ s.textfield } ${ cssIf( error === "", s['textfield--error'] ) } ${ className }` }
      ref={ textfieldDivRef }
      style={ { height: `${height}px` } }
      
      >

      { !!title && <p className = { s.title }>{ title }</p> }

      <div 

        className={ s.resizer } 
        onMouseDown={ handleMouseDown }
        onTouchStart={ handleTouchStart }

        ></div>
      
      <textarea 

        id = { id }
        ref = { refDOM }
        value = { value }
        type = { type }
        placeholder = { placeholder }
        className = { inputClassName }
        onChange = { onChange }
        onKeyUp = { onKeyUp }
        onBlur = { onBlur }
        { ...inputParams }
        onClick = {( e ) => {
          
          onClick && onClick();
          e.stopPropagation();

        }} 
      
      />

      { !!error && <p className = { s.error }>{ error }</p> }

    </div>
    
  );

}

export default Textarea;