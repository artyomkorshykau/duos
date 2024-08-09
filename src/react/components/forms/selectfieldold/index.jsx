'use client'

import s from './selectfieldold.module.scss'
import React from 'react'
import Arrow from '@/react/components/icons/arrow'

const SelectfieldOld = ( props ) => {

  const {

    id = '',
    set = () => {},
    value,
    withTitle = false,
    title = '',
    error = '',
    options = [],
    className = '',
    inputClassName = '',
    placeholder = '',
    refDOM = null,
    onClick = () => {
    },
    onKeyUp = () => {
    },
    onBlur = () => {
    },
    onChange = () => {
    },
    ...selectParams

  } = props

  return (

    <div className = { `${ s.selecttrigger } ${ className }` }>

      { !!title && <p> { title } </p> }

      <div className = { `${ s.selecttrigger__icon }` }>

        <Arrow direction = { 'bottom' } width = { 16 } fill = { '#7C92A7' } />

      </div>

      <select

        id = { id }
        ref = { refDOM }
        value = { value }
        className = { inputClassName }
        onChange = { onChange }
        onKeyUp = { onKeyUp }
        onBlur = { onBlur }
        { ...selectParams }
        onClick = { ( e ) => {

          onClick && onClick()
          e.stopPropagation()

        } }

      >

        <option value = "" disabled selected = { value === undefined } hidden>

          { placeholder }

        </option>

        { options.map( ( option ) => (

          <option key = { option.id } value = { option.value }>

            { option.label }

          </option>

        ) ) }

      </select>

      { !!error && <p> { error } </p> }

    </div>

  )

}

export default SelectfieldOld