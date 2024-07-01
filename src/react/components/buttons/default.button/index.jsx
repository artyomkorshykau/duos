import s from "./default.button.module.scss";

const DefaultButton = ({

  name = "Ок",
  className = "",
  action = () => {}

}) => {

  return (

    <button
    
      onClick = { action }
      className = {`flex items-center justify-center ${ s.button } ${ className } pointer`}
      
    >

      <p className = {`text-16 ${ s.button__name }`}>{ name }</p>

    </button>

  )

}

export default DefaultButton;