import { steps } from '@/constants/quiz.steps.js'
import useGlobal from '@/store/index.js'
import { useMutation } from '@tanstack/react-query'
import expert from '@/service/expert.js'
import { useRouter } from 'next/navigation'
import QuizProgress from '@/constants/quiz.progress.js'

export const useAutosave = (  refetchExpert  ) => {
  
  const [ globalState, globalActions ] = useGlobal()
  const { push } = useRouter()
  
  const { mutate: mutateProfile } = useMutation( {
    
    mutationKey: [ 'set-profile-info' ],
    mutationFn: ( {
                    isTemp,
                    email
                  } ) => expert.sendExpertDataStep1( isTemp, email ),
    onSuccess: () => {
      
      refetchExpert()
      
    }
    
  } )
  
  const { mutate: mutateService } = useMutation( {
    
    mutationKey: [ 'set-service-info' ],
    mutationFn: ( { isTemp } ) => expert.sendExpertDataStep2( isTemp ),
    onSuccess: () => {
      
      refetchExpert()
      
    }
    
  } )
  
  const { mutate: mutateSchool } = useMutation( {
    
    mutationKey: [ 'set-school-info' ],
    mutationFn: ( { isTemp } ) => expert.sendExpertDataStep3( isTemp ),
    onSuccess: () => {
      
      refetchExpert()
      
    }
    
  } )
  
  const { mutate: mutateDocuments } = useMutation( {
    
    mutationKey: [ 'set-documents-info' ],
    mutationFn: ( { isTemp } ) => expert.sendExpertDataStep4( isTemp ),
    onSuccess: () => {
      
      refetchExpert()
      
    }
    
  } )
  
  const { mutate: mutatePublications } = useMutation( {
    
    mutationKey: [ 'set-publications-info' ],
    mutationFn: ( { isTemp, articles } ) => expert.sendExpertDataStep5( isTemp, articles ),
    onSuccess: () => {
      
      refetchExpert()
      
    }
    
  } )
  
  const continueLater = async () => {
    
    if ( globalState.quiz.step === steps.profile ) {
      
      mutateProfile( { isTemp: true, email: globalState.user.email } )
      
    }
    
    if ( globalState.quiz.step === steps.service ) {
      
      mutateService( { isTemp: true } )
      
    }
    
    if ( globalState.quiz.step === steps.school ) {
      
      mutateSchool( { isTemp: true } )
      
    }
    
    if ( globalState.quiz.step === steps.documents ) {
      
      mutateDocuments( { isTemp: true } )
      
    }
    
    if ( globalState.quiz.step === steps.publications ) {
      
      mutatePublications( { isTemp: true, articles: globalState.articles } )
      
    }
    
    globalActions.quiz.setQuizStatus( QuizProgress.continue )
    globalActions.quiz.setStep( steps.questionnaire )
    
  }
  
  return { continueLater }
  
}