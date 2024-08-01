import Carcas from "@/react/components/containers/carcas";
import PublicationCard from "@/react/components/publication.card";

export default function Home() {

  return (

    <main id = {``} className = {`flex items-center justify-center h-dvh`}>

      <Carcas
      
        authorized = { true }
      
      >

        <PublicationCard

          title = { 'Как преодолеть тоску, когда не знаешь, в чем ее причина?' }
          description = { 'Мы не всегда понимаем то, что чувствуем и тем более не всегда ясно, ' +
            'что стало причиной этих ощущений. Давайте найдем ответ вместе и освободимся от этой тяжести на душе. ' +
            'Мы не всегда понимаем то, что чувствуем и тем более не всегда ясно, что стало причиной этих ощущений. ' +
            'Давайте найдем ответ вместе и освободимся от этой тяжести на душе' }
          status = { 'Filled' }
          photo = { '/img/roles/expert.jpg' }

        />

      </Carcas>

    </main>

  );

}