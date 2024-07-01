import Header from "./header";
import s from "./carcas.module.scss";

const Carcas = ({

  authorized = false,
  isClient = false,
  userData = {},

}) => {

  return (

    <div className = {`${ s.carcas } relative`}>

      <Header

        authorized = { authorized }
        isClient = { isClient }
        userData = { userData }

      />

    </div>

  )

}

export default Carcas;