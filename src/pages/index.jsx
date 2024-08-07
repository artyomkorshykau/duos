import Carcas from "@/react/components/containers/carcas";
import Menu from "@/react/components/menu/ui";
import { useSession } from "next-auth/react";

export default function Home() {

  return (

    <main id = {``} className = {`flex justify-center items-end h-dvh`}>

      <Carcas
      
        authorized = { false }
      
      >

        {/*<Menu/>*/}

      </Carcas>


    </main>

  );

}
