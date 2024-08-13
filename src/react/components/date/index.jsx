'use client'

import s from './date.module.scss';
import useGlobal from '@/store';
import { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CalendarIcon from "@/react/components/icons/calendar";
import ArrowSelect from "@/react/components/icons/arrow_select";
import cssIf from "@/scripts/helpers/css.if";
import { months, years } from "@/react/components/forms/select/contants";
import CloseIcon from "@/react/components/icons/close";
import cls from "./date-picker.module.scss"

const DateField = (props) => {

  const {
    placeholder,
    value,
  } = props;

  const [ globalState, globalActions ] = useGlobal();

  const [isOpen, setIsOpen] = useState( false );
  const [date, setDate] = useState( value || null );
  const [month, setMonth] = useState( months[ new Date().getMonth() ] );
  const [year, setYear] = useState( String(new Date().getFullYear()) );
  const [calendarType, setCalendarType] = useState( "days" );

  const containerRef = useRef( null );
  const yearsContainerRef = useRef( null );

  useEffect( () => {

    if ( yearsContainerRef.current && calendarType === "years" ) {

      const container = yearsContainerRef.current;
      container.scrollTop = container.scrollHeight;

    }

  }, [ calendarType ]);

  const chooseMonth = ( value ) => {

    setMonth( value );
    setCalendarType( "days" );

  }

  const chooseYear = ( value ) => {

    setYear( value );
    setCalendarType( "days" );

  }

  const handleChange = (date) => {

    setDate(date);
    
  };

  const changeCalendarType = ( e, value ) => {

    e.preventDefault();
    setCalendarType( prev => prev === value ? "days" : value );

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

    >

      <div className = {`${ s.wrapper__container } ${ cssIf( isOpen, s.open ) }`}>

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

            { placeholder }

          </div>

        </div>

        { isOpen && (

          <div className = {`${ s.wrapper__container__calendar_wrapper }`}>

            <div className = {`${ s.wrapper__container__calendar_wrapper__btns_container }`}>

              <button
                className = {`${ s.wrapper__container__calendar_wrapper__btns_container__btn }`}
                onClick = { ( e ) => changeCalendarType( e, "months" ) }
              >

                { month }

                { calendarType === "months" ? (

                  <CloseIcon />

                ) : (

                  <ArrowSelect direction = "down" fill = "#7C92A7" />

                ) }

              </button>

              <button

                className = {`
                  ${ s.wrapper__container__calendar_wrapper__btns_container__btn }
                  ${ s.wrapper__container__calendar_wrapper__btns_container__year_btn }
                `}
                onClick = { ( e ) => changeCalendarType( e, "years" ) }

              >

                { year }

                { calendarType === "years" ? (

                  <CloseIcon/>

                ) : (

                  <ArrowSelect direction = "down" fill = "#7C92A7"/>

                ) }

              </button>

            </div>

            { calendarType === "days" && (

              <DatePicker

                selected={date || new Date()}
                onChange={(date) => setDate(date)}
                dateFormat="dd MMMM yyyy"
                // showTimeSelect
                // timeFormat = "HH:mm"
                // timeIntervals = { 15 }
                // timeCaption = "Время"
                // minTime = { new Date().setHours( 0, 0 ) }
                // maxTime = { new Date().setHours( 23, 59 ) }
                renderCustomHeader = { () => <div className={cls.datepicker__header}></div> }
                calendarClassName = { cls.datepicker }
                dayClassName={(date) => {
                  let classes = [cls.datepicker__day];
                  // if (date.getDate() === startDate.getDate()) classes.push(cls.datepicker__day__selected);
                  if (date.toDateString() === new Date().toDateString()) classes.push(cls.datepicker__day__today);
                  return classes.join(' ');
                }}
                weekDayClassName = { ( date ) => cls.weekday }
                // formatWeekDay = { (nameOfDay) => (
                //     <div className={cls.datepicker__day_name}>{ nameOfDay }</div>
                // ) }
                inline

              />

            ) }

            { calendarType === "months" && (

              <div className = {`${ s.wrapper__container__calendar_wrapper__calendar_container }`}>

                { months.map( (month, index) => (

                  <button

                    key = { index }
                    className = {`${ s.wrapper__container__calendar_wrapper__calendar_container__item }`}
                    onClick = { () => chooseMonth( month ) }

                  >

                    { month }

                  </button>

                )) }

              </div>

            ) }

            { calendarType === "years" && (

              <div

                className = {`
                  ${ s.wrapper__container__calendar_wrapper__calendar_container }
                  ${ cssIf( calendarType === "years", s.years_container ) }
                `}
                ref = { yearsContainerRef }

              >

                { years.map( (year, index) => (

                  <button

                    key = { index }
                    className = {`${ s.wrapper__container__calendar_wrapper__calendar_container__item }`}
                    onClick = { () => chooseYear( year ) }

                  >

                    { year }

                  </button>

                )) }

              </div>

            ) }

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


