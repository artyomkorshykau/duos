"use client"

import Checkbox from "@/react/components/forms/checkbox";
import {useState} from "react";
import s from "./option.module.scss";

const Option = (props) => {

  const {

    type,
    option,
    onClick,
    onChange,
    isChecked,

  } = props;

  const [ checked, setChecked ] = useState( isChecked );

  const handleChange = ( e ) => {

    onChange?.( e.target.value )
    setChecked( e.target.value )

  }

  if ( type === "checkbox" ) {

    return (

      <Checkbox

        title = { option.label }
        isChecked = { checked }
        setIsChecked = { handleChange }

      />

    )

  }

  return (

    <div

      className = {`${ s.option }`}
      onClick = { () => onClick( option.value ) }

    >

      { option.label }

    </div>

  )
};

export default Option;