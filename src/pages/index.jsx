import Carcas from "@/react/components/containers/carcas";
import Switch from "@/react/components/switch";
import { useState } from "react";

export default function Home() {

  const [ toggle, setToggle] = useState(false)

  return (

    <main id = {``} className = {`flex justify-center items-center h-dvh`}>

      <Carcas
      
        authorized = { false }
      
      >

        <Switch toggle = { toggle } setToggle = { setToggle }/>

      </Carcas>


    </main>

  );

}
