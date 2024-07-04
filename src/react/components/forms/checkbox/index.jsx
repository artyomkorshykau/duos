
import cssIf from "@/scripts/helpers/css.if";
import CheckMarkIcon from "../../icons/check.mark.icon";
import s from "./checkbox.module.scss";

const Checkbox = ( props ) => {

  const { 
  
    isChecked = false,
    setIsChecked = () => {},
    className = "",
    title = ""
    
  } = props;

  return (

    <label
    
      onClick = { () => setIsChecked() }
      className = {`flex items-center relative ${ s.checkbox } ${ cssIf( isChecked, s.checked )} ${ className }`}
      
    >

      <div className = {`flex items-center justify-center ${ s.checkmark } ${ cssIf( isChecked, s['checkmark--checked'] ) } pointer`}>

        { isChecked && <CheckMarkIcon className = { s.chekmark__icon }/> }

      </div>

      <p className = {`flex items-center font-semibold text-13 ${ s.checkbox__title }`}>{ title }</p>

    </label>

  );

}


export default Checkbox;