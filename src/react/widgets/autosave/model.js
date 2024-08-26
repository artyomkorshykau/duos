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