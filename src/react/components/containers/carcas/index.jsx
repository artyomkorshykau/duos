import s from "./carcas.module.scss";

const Carcas = ({

  authorized = false,
  isClient = false,

}) => {

  return (

    <div className = {`${ s.carcas } relative`}>

      <header className = {`flex items-center ${ s.carcas }`}>

        

      </header>

    </div>

  )

}

export default Carcas;