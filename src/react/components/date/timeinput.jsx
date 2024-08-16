"use client"

import {useState} from "react";
import s from "./timeinput.module.scss";

const TimeInput = (props) => {

  const {

    placeholder,
    value,
    onChange,
    minValue,
    maxValue,

  } = props;

  const [ isFocused, setIsFocused ] = useState( false );

  const increase = ( e, value ) => {

    e.preventDefault();

    if ( Number( value ) < maxValue ) {

      onChange( ( Number( value ) + 1 ).toString().padStart(2, '0') );

    }

  }

  const decrease = ( e, value ) => {

    e.preventDefault();

    if ( Number( value ) > minValue ) {

      onChange( ( Number( value ) - 1 ).toString().padStart(2, '0') );

    }

  }

  const handleChange = ( e ) => {

    let value = e.target.value;

    if ( !/^\d*$/.test( value ) ) return;

    if ( value !== '' && (parseInt( value ) < 0 || parseInt( value ) > 23) ) return;

    if ( value.length > 2 ) value = value.slice( 0, 2 );

    onChange?.( value );

  }

  const handleBlur = () => {

    setIsFocused( false );

    if (value.length === 1) {

      onChange?.( `0${ value }` );

    }

  };

  const handleFocus = () => {

    if ( value === "" ) onChange?.( "00" );

    setIsFocused( true );

  }

  return (

    <div className = {`${ s.wrapper }`}>

      <input

        className = {`${ s.wrapper__input }`}
        placeholder ={ placeholder }
        type = "number"
        value = { value }
        onChange = { handleChange }
        onBlur = { handleBlur }
        onFocus = { handleFocus }
        min = "0"
        max = "23"

      />

      { isFocused && (

        <div className = {`${ s.wrapper__btns_container }`}>

          <button

            type = "button"
            onMouseDown = { e => increase( e, value ) }

          >+</button>

          <button

            type = "button"
            onMouseDown = { e => decrease( e, value ) }

          >-</button>

        </div>

      ) }

    </div>

  )

};

export default TimeInput;