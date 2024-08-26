'use client'

import PublicationCard from '@/react/components/publication.card'
import useGlobal from '@/store'
import ProgressBar
  from '@/react/widgets/steps/publications/ui/progress.bar/index.jsx'

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
              
              title: 'Как преодолеть тоску, когда не знаешь, в чем ее причина?',
              content:  'Мы не всегда понимаем то, что чувствуем и тем более не всегда ясно, что стало причиной этих' +
                ' ощущений. Давайте найдем ответ вместе и освободимся от этой' +
                ' тяжести на душе. Мы не всегда понимаем то, что чувствуем и тем более не всегда ясно, что стало причиной этих ощущений. Давайте найдем ответ вместе и освободимся от этой тяжести на душ.',
              article_category_id: Date.now(),
              image_url: 'http://194.58.94.203:9000/esoterics/media/images/0f88/0f/0f886851f682d0266d52cad7c84e4af5.jpg',
              tags: [
                
                {
                  tag: '1'
                  
                }
              
              ],
              
              is_draft: 1,
              in_library: 1
              
            }

          ) }

        />

        { publications.categories[ 1 ].publicationsCards.map( publication => {

          return <PublicationCard

            key = { publication.id }
            title = { publication.title }
            description = { publication.content }
            photo = { publication.image_url }
            status = { publication.is_draft }

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