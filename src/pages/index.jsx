import useGlobal from "@/store";
import Carcas from "@/react/components/containers/carcas";

export default function Home() {

  const [ globalState, globalActions ] = useGlobal();

  return (

    <main id = {``} className = {``}>

      <Carcas
      
        authorized = { true }
      
      />


    </main>

  );

}