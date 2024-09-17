'use client'

import { useMemo } from 'react'
import ProgressBar from '@/react/widgets/progress.bar/ui'
import Pagination from '@/react/widgets/pagination/ui'
import Autosave from '@/react/widgets/autosave/ui'
import Carcas from '@/react/components/containers/carcas'
import { useQuestionnaire } from '@/react/widgets/steps/quiz/model.js'
import Quiz from '@/react/widgets/steps/quiz/ui/index.jsx'
import { steps } from '@/constants/quiz.steps'
import s from './questionnaire.module.scss'
import { initializeState } from '@/store/initializeState.js'
import DeletePopup from '@/react/popups/delete.popup/index.jsx'

export default function QuestionnairePage() {
  
  const {
    
    prevStep,
    nextStep,
    buttonTitle,
    quizContent,
    handleButtonAction,
    title,
    description,
    globalState,
    isSuccess,
    refetchExpert
    
  } = useQuestionnaire()
  
  
  initializeState()
  
  
  const content = useMemo( () => (
    
    <>
      
      {
        
        ( globalState.quiz.step === steps.questionnaire
            
            ? <Quiz
              
              buttonTitle = { buttonTitle }
              handleButtonAction = { handleButtonAction }
              status = { globalState.quiz.progress }
            
            />
            
            : <div className = { `${ s.content }` }>
              
              <ProgressBar
                
                title = { title }
                description = { description }
                activeStep = { globalState.quiz.step }
              
              />
              
              { quizContent }
              
              <Autosave refetchExpert = { refetchExpert }/>
              
              <Pagination
                
                nextStep = { nextStep }
                activeStep = { globalState.quiz.step }
                prevStep = { prevStep }
              
              />
            
            </div>
        
        )
        
      }
    
    </>
  
  ), [ globalState.quiz ] )
  
  return (
    
    <main
      className = { `${ globalState.quiz.step === steps.questionnaire && 'flex items-center h-dvh' }` }>
      
      <Carcas
        
        authorized = { true }
      
      >
        
        { isSuccess && content }
        
        <DeletePopup
          
          isOpened = { globalState.popups.steps.deletePublication }
          closePopup = { () => globalActions.popups.openDeletePublicationsPopup() }
          title = { globalState.publications.categories[ 1 ].publicationsCards.find( article => article.id === globalState.popups.steps.deletePublicationID )?.title }
          type = { 'Статью: ' }
          action = { () => {
            
            globalActions.publications.deletePublication( globalState.popups.steps.deletePublicationID )
            globalActions.popups.openDeletePublicationsPopup()
            
          } }
        
        />
      
      </Carcas>
    
    </main>
  
  )
  
}
