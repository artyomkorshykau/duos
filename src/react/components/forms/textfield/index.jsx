
import cssIf from '@/scripts/helpers/css.if';
import s from './textfield.module.scss';

const Textfield = ( props ) => {

  const { 

    id = "", 
    set = () => {},
    value, 
    withTitle = false,
    title = "", 
    error = "", 
    type = "text",
    placeholder = "",
    className = "",
    inputClassName = "",
    refDOM = null,
    onClick = () => {},
    onKeyUp = () => {},
    onBlur = () => {},
    onChange = () => {},
    ...inputParams

  } = props;

  return (
    
    <div className = {`${ s.textfield } ${ cssIf( error === "", s['textfield--error'] ) } ${ className }`}>

      { !!title && <p className = { s.title }>{ title }</p> }
      
      <input 

        id = { id }
        ref = { refDOM }
        value = { value }
        type = { type }
        placeholder = { placeholder }
        className = { inputClassName }
        onChange = { onChange }
        onKeyUp = { onKeyUp }
        onBlur = { onBlur }
        {...inputParams}
        onClick = {( e ) => {
          
          onClick && onClick();
          e.stopPropagation();

        }}
      
      />

      { !!error && <p className = { s.error }>{ error }</p> }

    </div>
    
  );

}

export default Textfield;