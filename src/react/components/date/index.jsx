'use client'

import s from './date.module.scss';
import useGlobal from '@/store';
import { useState } from 'react';
import Textfield from '../forms/textfield';

const Date = () => {

  const [ globalState, globalActions ] = useGlobal()
  const [date, setDate] = useState('');

  const handleChange = (e) => {

    setDate(e.target.value);
    globalActions.profile.setEducationCompletionDate(e.target.value);
    
  };
  
  const handleFocus = (e) => {

    if (date === '') {

      e.target.type = 'date';

    }

  };
 
  const handleBlur = (e) => {

    if (date === '') {

      e.target.type = 'text';

    }

  };

  return (

     <div className = { `${ s.date__filedsWrapper }` }>

        <Textfield 

          className = { `${ s.date__filedsWrapper__filed }` }
          type={ date === '' ? 'text' : 'date' }
          value={ date }
          onChange={ handleChange }
          onFocus={ handleFocus }
          onBlur={ handleBlur }
          placeholder={ date === '' ? 'Дата окончания обучения' : '' }    

      />       

      </div>

    )

}

export default Date;


