import React from 'react'
import InputMask from 'react-input-mask'
import s from './phonefield.module.scss'

const Phonefield = ( props ) => {

  const {

    value,
    onChange,
    className,
    placeholder

  } = props

  return (

    <div
      className = { `${ s.phonefield } ${ className }` }>

      <InputMask

        mask = { '+7 (999) 999-99-99' }
        value = { value }
        onChange = { onChange }
        placeholder = { placeholder }
        type = { 'tel' }

      >

        { ( inputProps ) => <input { ...inputProps } /> }

      </InputMask>

    </div>

  )

}

export default Phonefield