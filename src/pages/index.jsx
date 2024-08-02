import useGlobal from "@/store";
import Carcas from "@/react/components/containers/carcas";
import Menu from "@/react/components/menu/ui";

export default function Home() {

  const [ globalState, globalActions ] = useGlobal();

  return (

    <main id = {``} className = {`flex justify-center items-end h-dvh`}>

      <Carcas
      
        authorized = { true }
      
      >

        <Menu/>

      </Carcas>


    </main>

  );

}
