import cssIf from "@/scripts/helpers/css.if";
import s from "./whitebox.module.scss";

const WhiteBox = ({

  children,
  className = "",
  withPoint = false,
  withBorder = false,
  pointPosition = "center",
  onMouseOut,
  onMouseOver

}) => {

  return(

    <div
    
      onMouseOut = { onMouseOut }
      onMouseOver = { onMouseOver }
      className = {`${ s.whitebox } ${ withBorder && s['whitebox--bordered'] } ${ className } relative`}
      
    >
      
      <div className = {`absolute ${ s.whitebox__point } ${ cssIf( withPoint, s['whitebox__point--exist']) } ${ s['whitebox__point--'+pointPosition ] }`}/>

      { children }

    </div>

  )

}

export default WhiteBox;