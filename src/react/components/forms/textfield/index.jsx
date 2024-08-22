import { useState } from 'react'
import Eye from '@/react/components/icons/eye.icon'
import InputMask from 'react-input-mask'
import cssIf from '@/scripts/helpers/css.if'
import s from './textfield.module.scss'

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
    placeholderClassName = "",
    className = "",
    inputClassName = "",
    password,
    onChange,
    onClick,
    onIconClick,
    classNameControls,
    clearFiled,
    disabled,
    editable,
    ...inputParams

  } = props;

  return (

    <div className = {`
    ${ s.textfield } 
    ${ cssIf( value, s.filled ) } 
    ${ cssIf( error, s.textfield__error ) }
    ${ cssIf( disabled, s.textfield__disabled )}
    ${ className }`}
    >

      { !!title && <p className = { s.title }>{ title }</p> }

      { type === 'phone' ?

        <>

          <InputMask

            mask={ '+7 (999) 999-99-99' }
            value={ value }
            onChange={ onChange }
            placeholder={ '' }
            type={ 'tel' }
            disabled={disabled}

          >

            { ( inputProps ) => <input { ...inputProps } /> }

          </InputMask>

          <span className = {`${ s.placeholderLabel }`}>{ placeholder }</span>

          {/*{ !!error &&*/}

          {/*  <div className = { `flex items-center ${s.textfield__error__text}` }>*/}

          {/*    <NotiseError/>*/}

          {/*    <p>{ error }</p>*/}

          {/*  </div>*/}

          {/*}*/}

        </>

        :

        <>
          { placeholderIcon &&

            <div className={ s.textfield__icon } onClick={ onIconClick }> { placeholderIcon } </div>

          }

          <input

                value={ value }
                type={ hide && password ? 'password' : type }
                placeholder={''}
                className = { `${ inputClassName } ${ cssIf( placeholderIcon, s.hasicon ) }` }
                onChange={ onChange }
                disabled = { disabled }
                { ...inputParams }
                onClick={ ( e ) => {

              onClick && onClick();
              e.stopPropagation();

            } }

          />

          <span className = {`${ s.placeholderLabel } ${ cssIf( placeholderIcon, s.hasicon ) } ${placeholderClassName}`}>

            { placeholder }

          </span>

          {/*{ !!error &&*/}

          {/*<div className = { `flex items-center ${s.textfield__error__text}` }>*/}

          {/*  <NotiseError/>*/}

          {/*  <p>{ error }</p>*/}

          {/*</div>*/}

          {/*}*/}

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

    </div>

  );

}

export default Textfield;