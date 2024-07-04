import s from "./whitebox.module.scss";

const WhiteBox = ({

  children,
  className = "",
  withPoint = false,
  pointPosition = "left"

}) => {

  return(

    <div

      className = {`${ s.whitebox } ${ s.className } relative`}
      
    >
      
      <div className = {`absolute ${ s.whitebox__point } ${ s['whitebox__point--'+pointPosition ] }`}/>

      { children }

    </div>

  )

}

export default WhiteBox;