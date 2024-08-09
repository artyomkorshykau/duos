import cssIf from '@/scripts/helpers/css.if';
import s from './textfield.module.scss';
import Eye from "@/react/components/icons/eye.icon";
import { useState } from "react";

const Textfield = ( props ) => {

  const [ hide, setHide ] = useState( false )

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
    password,
    onClick = () => {},
    onKeyUp = () => {},
    onBlur = () => {},
    onChange = () => {},
    ...inputParams

  } = props;

  return (
    
    <div className = {`${ s.textfield } ${cssIf(value !== '', s.filled)} ${ cssIf( error === "", s['textfield--error'] ) } ${ className }`}>

      { !!title && <p className = { s.title }>{ title }</p> }
      
      <input 

        id = { id }
        ref = { refDOM }
        value = { value }
        type = { hide ? 'password' : type }
        placeholder = { placeholder }
        className = { inputClassName }
        onChange = { onChange }
        onKeyUp = { onKeyUp }
        onBlur = { onBlur }
        {...inputParams}
        onClick = {( e ) => {
          
          onClick && onClick();
          e.stopPropagation();

        }}
      
      />

      { password &&

        <Eye

          stroke = { '#7C92A7' }
          hide = { hide }
          className = { `${ s.textfield__eye }` }
          onClick = { () => setHide( !hide ) }

        />

      }

      { !!error && <p className = { s.error }>{ error }</p> }

    </div>

  );

}

export default Textfield;