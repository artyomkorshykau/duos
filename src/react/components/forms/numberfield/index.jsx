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

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (newValue.length > 1) {
      e.target.value = newValue.slice(0, 1);
    }
    onChange(e);
  };

  return (
      
    <input 

      ref = { refDOM }
      value = { value }
      set = { ( e ) => set( e.target.value ) }
      placeholder = { placeholder }
      className = {`flex items-center ${ s.numberfield } ${ className }`}
      onChange = { handleChange }
      onFocus = { onFocus }
      onKeyUp = { onKeyUp }
      onBlur = { onBlur }
      data-index = { index }
      maxLength = { 1 }
    
    />
    
  )

}

export default NumberField;