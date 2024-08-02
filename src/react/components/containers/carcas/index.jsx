import Header from "./header";
import useGlobal from "@/store";
import s from "./carcas.module.scss";

const Carcas = ({

  authorized = false,
  children

}) => {

  const [ globalState, globalActions ] = useGlobal()

  return (

    <div className = {`${ s.carcas } relative`}>

      <Header

        authorized = { authorized }
        userData = { globalState.user }

      />

      { children }

    </div>

  )

}

export default Carcas;