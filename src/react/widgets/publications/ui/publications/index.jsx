import PublicationCard from "@/react/components/publication.card";
import useGlobal from "@/store";

const PublicationsContent = () => {

  const [ globalState ] = useGlobal()
  const { publications } = globalState;

  return (

    <div className = { `flex justify-start flex-wrap gap-24` }>

      <PublicationCard
        addNewPublication = { () => alert( 'Добавление новой публикации' ) }/>

      {publications.categories[ 1 ].publicationsCards.map(publication => {

        return <PublicationCard

          title = { publication.title }
          description = { publication.description }
          photo = { publication.photo }
          status = { publication.status }

        />

      })

      }

    </div>

  )
}

export default PublicationsContent