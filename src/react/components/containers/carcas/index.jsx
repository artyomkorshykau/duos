import Header from "./header";
import useGlobal from "@/store";
import s from "./carcas.module.scss";

const Carcas = ({

  authorized = false,
  isClient = false

}) => {

  const [ globalState, globalActions ] = useGlobal();

  return (

    <div className = {`${ s.carcas } relative`}>

      <Header

        authorized = { authorized }
        isClient = { isClient }
        userData = { globalState.userData }

      />

    </div>

  )

}

export default Carcas;