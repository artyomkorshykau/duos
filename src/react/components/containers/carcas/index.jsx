import Header from "./header";
import s from "./carcas.module.scss";

const Carcas = ({

  authorized = false,
  isClient = false,

}) => {

  return (

    <div className = {`${ s.carcas } relative`}>

      <Header

        authorized = { authorized }
        isClient = { isClient }

      />

    </div>

  )

}

export default Carcas;