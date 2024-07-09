import s from './numberfield.module.scss';

const NumberField = ( props ) => {

  const { 

    index,
    value, 
    set = () => {},
    className = "",
    placeholder = "-",
    refDOM = null,
    onKeyUp = () => {},
    onBlur = () => {},
    onChange = () => {},
    onFocus = () => {}

  } = props;

  return (
      
    <input 

      type = "number"
      id = "numberfield"
      ref = { refDOM }
      value = { value }
      set = { ( e ) => set( e.target.value ) }
      placeholder = { placeholder }
      className = {`flex items-center ${ s.numberfield } ${ className }`}
      onChange = { onChange }
      onFocus = { onFocus }
      onKeyUp = { onKeyUp }
      onBlur = { onBlur }
      data-index = { index }
    
    />
    
  )

}

export default NumberField;