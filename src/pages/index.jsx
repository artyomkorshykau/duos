import Carcas from "@/react/components/containers/carcas";
import PublicationCard from "@/react/components/publication.card";

export default function Home() {

  return (

    <main id = {``} className = {`flex items-center justify-center h-dvh`}>

      <Carcas

        authorized = { true }

      >

      </Carcas>

    </main>

  );

}
