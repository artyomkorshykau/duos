"use client"

import PublicationCard from "@/react/components/publication.card";
import useGlobal from "@/store";
import ProgressBar from "@/react/widgets/publications/ui/progress.bar";
import { v1 } from "uuid";

const PublicationsContent = () => {

  const [ globalState, globalActions ] = useGlobal()
  const { publications } = globalState;
  const { publications: publicationsAction } = globalActions

  return (

    <>

      <div className = { `flex justify-start flex-wrap gap-24` }>

        <PublicationCard

          addNewPublication = { () => publicationsAction.addNewPublication(

            {

              id: v1(),
              title: 'Как преодолеть тоску, когда не знаешь, в чем ее причина?',
              description: 'Мы не всегда понимаем то, что чувствуем и тем более не всегда ясно, что стало причиной этих' +
                ' ощущений. Давайте найдем ответ вместе и освободимся от этой тяжести на душе. Мы не всегда понимаем то, что чувствуем и тем более не всегда ясно, что стало причиной этих ощущений. Давайте найдем ответ вместе и освободимся от этой тяжести на душ',
              status: 'Filled',
              photo: 'img/roles/expert.jpg'

            },

          ) }

        />

        { publications.categories[ 1 ].publicationsCards.map( publication => {

          return <PublicationCard

            key = { publication.id }
            title = { publication.title }
            description = { publication.description }
            photo = { publication.photo }
            status = { publication.status }

          />

        } )

        }

      </div>

      { publications.categories[ 1 ].publicationsCards.length &&

        <ProgressBar

          cardCount = { publications.categories[ 1 ].publicationsCards.length }
          type = "publications"

        /> }

    </>

  )

}

export default PublicationsContent