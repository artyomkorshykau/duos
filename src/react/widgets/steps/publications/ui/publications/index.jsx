'use client'

import PublicationCard from '@/react/components/publication.card'
import ProgressBar
  from '@/react/widgets/steps/publications/ui/progress.bar/index.jsx'
import { useRouter } from 'next/navigation'
import useGlobal from '@/store/index.js'

const PublicationsContent = () => {
  
  const { push } = useRouter()
  const [ globalState, globalActions ] = useGlobal()
  
  return (
    
    <>
      
      <div className={ `flex justify-start flex-wrap gap-24` }>
        
        <PublicationCard
          
          addNewPublication={ () => push( '/constructor' ) }
        
        />
        
        { globalState?.articles?.map( article => {
          
          return <PublicationCard
            
            key={ article?.id }
            title={ article?.title }
            description={ article?.content }
            photo={ article?.image_url }
            status={ !article?.is_draft ? 'Filled' : 'NotFinished' }
            articleID={ article?.id }
          
          />
          
        } )
        
        }
      
      </div>
      
      { !!globalState.articles?.length &&
        
        <ProgressBar
          
          cardCount={ globalState.articles?.length }
          type="publications"
        
        />
        
      }
    
    </>
  
  )
  
}

export default PublicationsContent