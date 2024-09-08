'use client'

import PublicationCard from '@/react/components/publication.card'
import useGlobal from '@/store'
import ProgressBar
  from '@/react/widgets/steps/publications/ui/progress.bar/index.jsx'
import { useRouter } from 'next/navigation'

const PublicationsContent = () => {

  const [ globalState, globalActions ] = useGlobal()
  const { publications } = globalState;
  const { publications: publicationsAction } = globalActions
  const { push } = useRouter()

  return (

    <>

      <div className = { `flex justify-start flex-wrap gap-24` }>

        <PublicationCard

          addNewPublication = { () => push('/constructor') }

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