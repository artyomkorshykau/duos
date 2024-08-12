'use client'

import s from './date.module.scss';
import useGlobal from '@/store';
import {forwardRef, useEffect, useRef, useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CalendarIcon from "@/react/components/icons/calendar";
import ArrowSelect from "@/react/components/icons/arrow_select";
import cssIf from "@/scripts/helpers/css.if";

const DateField = (props) => {

  const {
    placeholder,
    value,
  } = props;

  const [ globalState, globalActions ] = useGlobal();

  const [isOpen, setIsOpen] = useState( false );
  const [date, setDate] = useState( value || null );

  const containerRef = useRef( null );

  const handleChange = (date) => {

    setDate(date);
    
  };

  useEffect( () => {

    const handleClickOutside = ( event ) => {

      if ( containerRef.current && !containerRef.current.contains( event.target ) ) {

        setIsOpen(false);

      }

    };

    if ( isOpen ) {

      document.addEventListener( 'mousedown', handleClickOutside );

    } else {

      document.removeEventListener( 'mousedown', handleClickOutside );

    }

    return () => {

      document.removeEventListener('mousedown', handleClickOutside);

    };
  }, [ isOpen ] );

  return (

    <div

      className = {`${ s.wrapper }`}
      ref={containerRef}
      onClick = { () => setIsOpen( prev => !prev ) }

    >

      <div className = {`${ s.wrapper__container } ${ cssIf( isOpen, s.open ) }`}>

        { isOpen ? (

          <ArrowSelect

            direction = "up"
           className = {`${ s.wrapper__container__icon } ${ cssIf( isOpen, s.wrapper__container__activeicon ) }`}
            fill = "#7C92A7"

          />

        ) : (

          <CalendarIcon className = {`${ s.wrapper__container__icon }`} fill = "#7C92A7"/>

        ) }

        <div className = {`${ s.wrapper__container__header }`}>

          { placeholder }

        </div>

        { isOpen && (

          <div className = {`${ s.wrapper__container__calendar_container }`} />

        ) }

      </div>

    </div>

  )

}

export default DateField;


