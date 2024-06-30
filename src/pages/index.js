import Carcas from "@/react/components/containers/carcas";

export default function Home() {

  //тестовые данные
  const FAKEPROPS = {

    authorized: true,
    isClient: false

  }

  return (

    <main id = {``} className = {``}>

      <Carcas
      
        authorized = { FAKEPROPS.authorized }
        isClient = { FAKEPROPS.isClient }
      
      />

    </main>

  );

}