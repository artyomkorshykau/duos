'use client'

import PublicationCard from '@/react/components/publication.card'
import ProgressBar
  from '@/react/widgets/steps/publications/ui/progress.bar/index.jsx'
import { useRouter } from 'next/navigation'
import useGlobal from '@/store/index.js'
import { useEffect } from 'react'

const PublicationsContent = () => {
  
  const { push } = useRouter()
  const [ globalState, globalActions ] = useGlobal()
  
  useEffect( () => {
    
    globalActions.publications.getPublication( globalState.user.expert_id )
    
  }, [] )
  
  return (
    
    <>
      
      <div className={ `flex justify-start flex-wrap gap-24` }>
        
        <PublicationCard
          
          addNewPublication={ () => push( '/constructor' ) }
        
        />
        
        { globalState?.publications?.categories?.[ 1 ]?.publicationsCards?.map( article => {
          
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
      
      { !!globalState?.publications?.categories?.[ 1 ]?.publicationsCards?.length &&
        
        <ProgressBar
          
          cardCount={ globalState?.publications?.categories?.[ 1 ]?.publicationsCards?.length }
          type="publications"
        
        />
        
      }
    
    </>
  
  )
  
}

export default PublicationsContent