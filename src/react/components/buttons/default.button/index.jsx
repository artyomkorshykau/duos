import cssIf from "@/scripts/helpers/css.if";
import s from "./default.button.module.scss";

const DefaultButton = ({

  children,
  gray = false,
  small = false,
  name = "Ок",
  className = "",
  action = () => {},
  icon

}) => {

  return (

    <button
    
      onClick = { action }
      className = {`flex items-center justify-center ${ s.button } ${ cssIf( gray, s.button__gray ) } ${ cssIf( small, s.button__small ) } ${ className } pointer`}
      
    >

      { icon }

      <p className = {`text-16 ${ s.button__name }`}>{ name }</p>

      { children }

    </button>

  )

}

export default DefaultButton;