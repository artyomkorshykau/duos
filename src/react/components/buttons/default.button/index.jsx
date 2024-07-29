import cssIf from "@/scripts/helpers/css.if";
import s from "./default.button.module.scss";

const DefaultButton = ({

  children,
  gray = false,
  small = false,
  name = "Ок",
  className = "",
  action = () => {},
  icon,
  positionIcon = 'left',
  type = 'default',
  width,
  disabled

}) => {

  return (

    <button
    
      onClick = { action }
      className = {`flex items-center justify-center ${ s.button } ${ cssIf( type === 'default' && !gray, s.button__default ) } ${ cssIf( type === 'delete', s.button__delete ) } ${ cssIf( gray, s.button__gray ) } ${ cssIf( small, s.button__small ) } ${ cssIf( width === 'full', s.button__full ) } ${ className } pointer`}
      disabled = { disabled }
      
    >

      { positionIcon === 'left' && icon }

      <p className = {`text-16 ${ s.button__name }`}>{ name }</p>
      
      { positionIcon === 'right' && icon }

      { children }

    </button>

  )

}

export default DefaultButton;