import cssIf from "@/scripts/helpers/css.if";
import s from "./whitebox.module.scss";

const WhiteBox = ({

  children,
  className = "",
  withPoint = false,
  pointPosition = "center"

}) => {

  return(

    <div

      className = {`${ s.whitebox } ${ className } relative`}

    >
      
      <div className = {`absolute ${ s.whitebox__point } ${ cssIf( withPoint, s['whitebox__point--exist']) } ${ s['whitebox__point--'+pointPosition ] }`}/>

      { children }

    </div>

  )

}

export default WhiteBox;