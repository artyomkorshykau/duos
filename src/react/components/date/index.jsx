'use client'

import s from './date.module.scss';
import useGlobal from '@/store';
import {forwardRef, useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CalendarIcon from "@/react/components/icons/calendar";
import Textfield from "@/react/components/forms/textfield";

const DateField = (props) => {

  const {
    placeholder,
    value,
  } = props;

  const [ globalState, globalActions ] = useGlobal()
  const [date, setDate] = useState(value || null);

  const handleChange = (date) => {

    setDate(date);
    
  };

    const customInput = <div className = {`${ s.container }`}>

        <CalendarIcon className = {`${ s.container__icon }`} fill = "#7C92A7" />

        <div className = {`${ s.container__header }`}>

            { placeholder }

        </div>

    </div>;

    return (

      <div>

        <DatePicker

          className = {`${ s.datepicker }`}
          selected = { date }
          onChange = { handleChange }
          customInput = { customInput }

        />

      </div>

  )

}

export default DateField;


