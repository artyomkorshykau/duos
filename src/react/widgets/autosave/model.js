import { steps } from '@/constants/quiz.steps.js'
import useGlobal from '@/store/index.js'
import { useMutation } from '@tanstack/react-query'
import expert from '@/service/expert.js'
import { useRouter } from 'next/navigation'

export const useAutosave = () => {
  
  const [ globalState, globalActions ] = useGlobal()
  const { push } = useRouter()
  
  const { mutate: mutatePublications } = useMutation({
    
    mutationKey: [ 'set-publications-info' ],
    mutationFn: (  isTemp  ) => expert.sendExpertDataStep5( isTemp )
    
  })
  
  const continueLater = () => {
    
    if( globalState.quiz.step === steps.profile ) {
    
    
    }
    
    if( globalState.quiz.step === steps.service ) {
    
    
    }
    
    if( globalState.quiz.step === steps.school ) {
    
    
    }
    
    if( globalState.quiz.step === steps.documents ) {
    
    
    }
    
    if( globalState.quiz.step === steps.publications ) {
      
      mutatePublications( true )
    
    }
    
    push('/')
    
  }
  
  return { continueLater }
  
}

const payload = {
  "photo_url": "string",
  "about": "string",
  "mission": "string",
  "ethical_principles": "string",
  "personal_principles": "string",
  "is_temp": 1,
  "articles": [
    {
      "title": "string",
      "content": "string",
      "article_category_id": 0,
      "image_url": "string",
      "tags": [
        {
          "tag": "string"
        }
      ],
      "is_draft": 1,
      "in_library": 1
    }
  ]
}