'use client'

import s from './date.module.scss'
import useGlobal from '@/store'
import { useEffect, useRef, useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import CalendarIcon from '@/react/components/icons/calendar'
import ArrowSelect from '@/react/components/icons/arrow_select'
import cssIf from '@/scripts/helpers/css.if'
import { months, years } from '@/react/components/forms/select/contants'
import ru from 'date-fns/locale/ru'
import ItemSelect from '@/react/components/date/itemselect'
import TimeInput from '@/react/components/date/timeinput'

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

  const [ startHours, setStartHours ] = useState(  "" );
  const [ startMinutes, setStartMinutes ] = useState(  "" );
  const [ endHours, setEndHours ] = useState(  "" );
  const [ endMinutes, setEndMinutes ] = useState(  "" );

  const containerRef = useRef( null );
  const btnsContainersContainerRef = useRef( null );

  const handleChangeDate = ( value ) => {

    setDate( Date( value ) );
    onChange?.( value );
    setIsOpen( false );
    
  };

  const onChangeStartHours = ( value ) => {

    setStartHours( value );

  };

  const onChangeStartMinutes = ( value ) => {

    setStartMinutes( value );

  };

  const onChangeEndHours = ( value ) => {

    setEndHours( value );

  };

  const onChangeEndMinutes = ( value ) => {

    setEndMinutes( value );

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

      <div

        className = {`
          ${ s.wrapper__container }
          ${ cssIf( isOpen, s.open ) }
          ${ cssIf( !!value, s.active ) }
          ${ className }
        `}

      >

        <div className = {`${ s.wrapper__container__header_container }`}
             onClick = { () => setIsOpen((prev) => !prev) }
        >

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

                <TimeInput

                  placeholder = "00"
                  value = { startHours }
                  onChange = { onChangeStartHours }
                  minValue = { 0 }
                  maxValue = { 23 }

                />

                <span>:</span>

                <TimeInput

                  placeholder = "00"
                  value = { startMinutes }
                  onChange = { onChangeStartMinutes }
                  minValue = { 0 }
                  maxValue = { 59 }

                />

              </div>

              <div className = {`${ s.wrapper__container__calendar_wrapper__times_container__time_container }`}>

                <TimeInput

                  placeholder = "23"
                  value = { endHours }
                  onChange = { onChangeEndHours }
                  minValue = { 0 }
                  maxValue = { 23 }

                />

                <span>:</span>

                <TimeInput

                  placeholder = "59"
                  value = { endMinutes }
                  onChange = { onChangeEndMinutes }
                  minValue = { 0 }
                  maxValue = { 59 }

                />

              </div>

            </div>

          </div>

        ) }

      </div>

    </div>

  )

}

export default DateField;


