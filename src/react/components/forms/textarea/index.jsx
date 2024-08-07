'use client'

import { useEffect, useState, useRef } from 'react';
import cssIf from '@/scripts/helpers/css.if';
import s from './textarea.module.scss';
import Save from "@/react/components/icons/save";

const MIN_HEIGHT = 110;

const Textarea = ( props ) => {

  const { 

    id = "", 
    set = () => {},
    value, 
    withTitle = false,
    title = "", 
    error = "",
    placeholder = "",
    className = "",
    inputClassName = "",
    refDOM = null,  
    onClick = () => {},
    onKeyUp = () => {},
    onBlur = () => {},
    onChange = (e) => {},
    icon,
    ...inputParams

  } = props;

  const [text, setText] = useState(value);
  const [height, setHeight] = useState(MIN_HEIGHT);
  const [isResizing, setIsResizing] = useState(false);
  const [startY, setStartY] = useState(0);
  const textareaDivRef = useRef(null);

  const handleChange = ( e ) => {

    setText( e.currentTarget.value );
    onChange( e );

  }

  const handleMouseDown = (e) => {

    setIsResizing(true);
    setStartY(e.clientY);

  };

  const handleMouseMove = (e) => {

    if (isResizing) {

      const newHeight = height + (e.clientY - startY);

      setStartY(e.clientY);
      setHeight(newHeight);
      
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

      className = {`${ s.textfield } ${ cssIf( error === "", s['textfield--error'] ) } ${ className }`}
      ref={ textareaDivRef }
      style={ { height: `${ height }px` } }

      >

      { !!title && <p className = { s.title }>{ title }</p> }

      <div

        className={ s.resizer }
        onMouseDown={ handleMouseDown }
        onTouchStart={ handleTouchStart }

      />

      <div className={ `${ s.textfield__icon_container } ${ cssIf( text !== "", s.visible ) }` }>

        { icon }

      </div>

      <textarea

        id = { id }
        ref = { refDOM }
        value = { value }
        placeholder = { placeholder }
        className = { inputClassName }
        onChange = { handleChange }
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