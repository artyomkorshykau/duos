import { useState } from "react";
import Eye from "@/react/components/icons/eye.icon";
import Cross from "@/react/components/icons/cross";
import InputMask from "react-input-mask";
import Save from "@/react/components/icons/save";
import cssIf from '@/scripts/helpers/css.if';
import s from './textfield.module.scss';

const Textfield = ( props ) => {

  const [ hide, setHide ] = useState( true )

  const {

    value,
    withTitle = false,
    title = "", 
    error = "", 
    type = "text",
    placeholder = "",
    placeholderIcon = null,
    className = "",
    inputClassName = "",
    password,
    onChange,
    onClick,
    onIconClick,
    classNameControls,
    clearFiled,
    ...inputParams

  } = props;

  const showSaveButton = (value) => /\d.*\d/.test(value)

  return (

    <div className = {`${ s.textfield } ${ cssIf( value, s.filled ) } ${ cssIf( error === "", s['textfield--error'] ) } ${ className }`}>

      { !!title && <p className = { s.title }>{ title }</p> }

      { type === 'phone' ?

        <InputMask

          mask = { '+7 (999) 999-99-99' }
          value = { value }
          onChange = { onChange }
          placeholder = { placeholder }
          type = { 'tel' }

        >

        { ( inputProps ) => <input { ...inputProps } /> }

        </InputMask>

        : 
        
        <>
          { placeholderIcon && 

            <div className={s.textfield__icon} onClick={onIconClick}> {placeholderIcon} </div> 
            
          }

          <input

            value = { value }
            type = { hide && password ? 'password' : type }
            placeholder = { placeholder }
            className = { `${ inputClassName } ${ cssIf( placeholderIcon, s.hasicon ) }` }
            onChange = { onChange }
            { ...inputParams }
            onClick = { ( e ) => {

              onClick && onClick();
              e.stopPropagation();

            } }

          />

        </>

      }

      { password &&

        <Eye

          stroke = { '#7C92A7' }
          hide = { !hide }
          className = { `${ s.textfield__eye }` }
          onClick = { () => setHide( !hide ) }

        />

      }

      { showSaveButton(value) && classNameControls &&

        <div className = {`${ classNameControls }`}>

          <Cross

            stroke = { '#7C92A7' }
            onClick = { clearFiled }
            className = { `${s.textfield__cross }`}

          />

          <div

            className = {`${ s.textfield__save }`}
            onClick = { () => alert('Отправка на сервер') }

          >

            <Save fill = { "#fff" }/>

          </div>

        </div>

      }

      { !!error && <p className={ s.error }>{ error }</p> }

    </div>

  );

}

export default Textfield;