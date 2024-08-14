'use client'

import s from './date.module.scss';
import useGlobal from '@/store';
import {useCallback, useEffect, useRef, useState} from 'react';
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CalendarIcon from "@/react/components/icons/calendar";
import ArrowSelect from "@/react/components/icons/arrow_select";
import cssIf from "@/scripts/helpers/css.if";
import { months, years } from "@/react/components/forms/select/contants";
import ru from "date-fns/locale/ru";
import ItemSelect from "@/react/components/date/itemselect";

registerLocale( "ru", ru );

const DateField = ( props ) => {

  const {
    className,
    placeholder,
    value,
    onChange,
  } = props;

  const [ globalState, globalActions ] = useGlobal();

  const [ isOpen, setIsOpen ] = useState( false );
  const [ date, setDate ] = useState( Date( value ) ?? null );
  const [ calendarType, setCalendarType ] = useState( "days" );
  const [ btnsContainerWidth, setBtnsContainerWidth ] = useState( 0 );

  const [ startHours, setStartHours ] = useState(  "00" );
  const [ startMinutes, setStartMinutes ] = useState(  "00" );

  const containerRef = useRef( null );
  const btnsContainersContainerRef = useRef( null );

  const handleChangeDate = ( value ) => {

    setDate( Date( value ) );
    onChange?.( value );
    setIsOpen( false );
    
  };

  const onChangeStartHours = ( e ) => {

    let newValue = e.target.value;

    // Убедиться, что значение состоит только из цифр
    if ( /^\d*$/.test(newValue) ) {
      // Преобразовать в число и проверить диапазон
      let numberValue = parseInt( newValue, 10 );

      if ( numberValue > 0 && numberValue <= 23 ) {
        setStartHours( newValue );
      }
    }

  };

  const getPlaceholder = () => {

    if ( value ) {

      const day = String( ( new Date( value ) ).getDate() ).padStart( 2, '0') ;
      const month = String( ( new Date( value ) ).getMonth() + 1 ).padStart( 2, '0' ); // месяцы в JavaScript начинаются с 0
      const year = ( new Date( value ) ).getFullYear();

      return `${ day }.${ month }.${ year }`;

    }

    return placeholder;

  }

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

  useEffect( () => {

    if ( btnsContainersContainerRef.current ) {

      setBtnsContainerWidth( btnsContainersContainerRef.current.offsetWidth );

    }

  }, [ isOpen ] );


  return (

    <div

      className = {`${ s.wrapper }`}
      ref={containerRef}

    >

      <div className = {`${ s.wrapper__container } ${ cssIf( isOpen, s.open ) } ${ className }`}>

        <div className = {`${ s.wrapper__container__header_container }`} onClick = { () => setIsOpen(prev => !prev) }>

          <div

            className = {`${ s.wrapper__container__header_container__icon_container }`}

          >

            { isOpen ? (

              <ArrowSelect

                direction = "up"
                className = {`
                  ${s.wrapper__container__header_container__icon_container__icon }
                  ${ cssIf( isOpen, s.wrapper__container__header_container__activeicon ) }
                `}
                fill = "#7C92A7"

              />

            ) : (

              <CalendarIcon

                className = {`${ s.wrapper__container__header_container__icon_container__icon }`}
                fill = "#7C92A7"

              />

            ) }

          </div>

          <div className = {`${ s.wrapper__container__header_container__header } ${ cssIf( isOpen, s.header_active ) }`}>

            { getPlaceholder() }

          </div>

        </div>

        { isOpen && (

          <div className = {`${ s.wrapper__container__calendar_wrapper }`}>

            <DatePicker

              selected = { date }
              onChange = { handleChangeDate }
              dateFormat = "dd MMMM yyyy"
              locale = "ru"
              // showTimeSelect
              // timeFormat = "HH:mm"
              // timeIntervals = { 15 }
              // timeCaption = "Время"
              // minTime = { new Date().setHours( 0, 0 ) }
              // maxTime = { new Date().setHours( 23, 59 ) }
              // renderCustomHeader = { () => null }
              renderCustomHeader = { ( { date, changeYear, changeMonth } ) => {

                const onChangeMonth = ( month ) => {

                  changeMonth( month );
                  setCalendarType( "days" );

                }

                const onChangeYear = ( year ) => {

                  changeYear( year );
                  setCalendarType( "days" );

                }

                return (

                  <div
                    className={`${s.wrapper__container__calendar_wrapper__btns_container}`}
                    ref={btnsContainersContainerRef}
                  >

                    <ItemSelect

                      // value = { months[ date ? date.getMonth() : new Date().getMonth() ] }
                      value = { months[ (date instanceof Date ? date : new Date()).getMonth() ] }
                      isOpen = { calendarType === "months" }
                      onOpen = { () => setCalendarType( "months" ) }
                      onClose = { () => setCalendarType( "days" ) }
                      onChange = { onChangeMonth }
                      items = { months }
                      isMonths

                    />

                    <ItemSelect

                      // value = { date ? date.getFullYear() : new Date().getFullYear() }
                      value = { date instanceof Date ? date.getFullYear() : new Date().getFullYear() }
                      isOpen = { calendarType === "years" }
                      onOpen = { () => setCalendarType( "years" ) }
                      onClose = { () => setCalendarType( "days" ) }
                      onChange = { onChangeYear }
                      items = { years }
                      containerWidth = { btnsContainerWidth }

                    />

                  </div>
                )
              } }
              inline

            />

            <div className = {`${ s.wrapper__container__calendar_wrapper__times_container }`}>

              <div className = {`${ s.wrapper__container__calendar_wrapper__times_container__time_container }`}>
                <span>00</span>
                <span>:</span>
                <span>00</span>
              </div>

              <div className = {`${ s.wrapper__container__calendar_wrapper__times_container__time_container }`}>
                <span>23</span>
                <span>:</span>
                <span>59</span>
              </div>

            </div>

          </div>

        ) }

      </div>

    </div>

  )

}

export default DateField;


