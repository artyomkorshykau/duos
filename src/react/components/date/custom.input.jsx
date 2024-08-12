import s from "./custom.input.module.scss"
import CalendarIcon from "@/react/components/icons/calendar";
import Textfield from "@/react/components/forms/textfield";
import {forwardRef, memo} from "react";

const CustomInput =  forwardRef(( props, ref ) => {

  const {

      placeholder,

  } = props;

  console.log(placeholder);

  return (

    <div className = {`${ s.container }`} ref = { ref } >

      <CalendarIcon className = {`${ s.container__icon }`} fill = "#7C92A7" />

      <Textfield

        className = {`${ s.container__input }`}
        placeholder = { placeholder }

      />

    </div>

  )

});

export default CustomInput;