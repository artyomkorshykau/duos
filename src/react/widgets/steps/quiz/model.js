import { useEffect, useMemo, useState } from 'react'
import { QuizSteps, steps } from '@/constants/quiz.steps'
import QuizProgress from '@/constants/quiz.progress'
import s from '@/pages/questionnaire/questionnaire.module.scss'
import Profile from '@/react/widgets/steps/profile/ui/index.jsx'
import Services from '@/react/widgets/steps/services/ui/index.jsx'
import School from '@/react/widgets/steps/school/ui/index.jsx'
import Publications from '@/react/widgets/steps/publications/ui/index.jsx'
import Document from '@/react/widgets/steps/document/ui/index.jsx'
import useGlobal from '@/store'
import { useMutation, useQuery } from '@tanstack/react-query'
import expert from '@/service/expert.js'
import { useRouter } from 'next/navigation'

function isSchoolFilled( school ) {
  
  if ( !school.schoolName || !school.comment ) {
    
    return false
    
  }
  
  for( const course of school.courses ) {
    
    if ( !course.name ) {
      
      return false
      
    }
    
  }
  
  return true
  
}

function findFirstProgressLessThan100( data ) {
  for( const key in data ) {
    if ( data.hasOwnProperty( key ) ) {
      if ( data[ key ] && typeof data[ key ] === 'object' && 'progress' in data[ key ] ) {
        if ( data[ key ].progress < 100 ) {
          return key
        }
      }
    }
  }
  return null
}

function extractProgressFields( data ) {
  const result = {}
  
  for( const key in data ) {
    if ( data.hasOwnProperty( key ) ) {
      const value = data[ key ]
      
      if ( value && typeof value === 'object' && 'progress' in value ) {
        result[ key ] = value
      }
    }
  }
  
  return result
}

function updateQuizSteps( response ) {
  
  QuizSteps.forEach( step => {
      
      switch ( step.title ) {
        
        case 'Профиль':
          step.progress = response?.profile?.progress
          break
        case 'Услуги':
          step.progress = response?.services?.progress
          break
        case 'Школа':
          step.progress = response?.values?.progress
          break
        case 'Документы':
          step.progress = response?.docs?.progress
          break
        case 'Публикации':
          step.progress = response?.publications?.progress
          break
        default:
          break
        
      }
      
    }
  )
  
}


export const useQuestionnaire = () => {
  
  const [ globalState, globalActions ] = useGlobal()
  const { profile, service } = globalActions
  const [ title, setTitle ] = useState( 'Профиль' )
  const [ description, setDescription ] = useState( 'Эти данные станут частью вашего профиля и помогут продвижению' )
  
  let buttonTitle
  const { push } = useRouter()
  
  const { data: expertData, isSuccess, refetch: refetchExpert } = useQuery( {
    
    queryKey: [ 'expert' ],
    queryFn: () => expert.getExpert()
    
  } )
  
  const { mutate: mutateProfile, isPending: isPendingProfile } = useMutation( {
    
    mutationKey: [ 'set-profile-info' ],
    mutationFn: ( {
                    isTemp,
                    email
                  } ) => expert.sendExpertDataStep1( isTemp, email ),
    onSuccess: () => {
      
      refetchExpert()
      globalActions.quiz.setStep( steps.service )
      globalActions.quiz.setContinueStep( steps.service )
      setTitle( 'Услуги' )
      setDescription( 'В каких направлениях и какие услуги вы готовы оказывать вашим будущим клиентам' )
      globalActions.user.setUser()
      
      const scrollContainer = document.querySelector( `.${ s.content }` )
      
      if ( scrollContainer ) {
        
        scrollContainer.scrollTo( {
          
          top: 0,
          behavior: 'smooth'
          
        } )
        
      }
      
    },
    onError: ( error ) => {
      
      globalActions.profile.setProfileErrors( error )
      
    }
    
  } )
  
  const { mutate: mutateService, isPending: isPendingService } = useMutation( {
    
    mutationKey: [ 'set-service-info' ],
    mutationFn: ( { isTemp } ) => expert.sendExpertDataStep2( isTemp ),
    onSuccess: () => {
      
      refetchExpert()
      globalActions.quiz.setStep( steps.school )
      globalActions.quiz.setContinueStep( steps.school )
      setTitle( 'Школа' )
      setDescription( 'Если у вас нет собственной школы или курса переходите к следующему шагу' )
      
      const scrollContainer = document.querySelector( `.${ s.content }` )
      
      if ( scrollContainer ) {
        
        scrollContainer.scrollTo( {
          
          top: 0,
          behavior: 'smooth'
          
        } )
        
      }
      
    }
    
  } )
  
  const { mutate: mutateSchool, isPending: isPendingSchool } = useMutation( {
    
    mutationKey: [ 'set-school-info' ],
    mutationFn: ( { isTemp } ) => expert.sendExpertDataStep3( isTemp )
    
  } )
  
  const {
    mutate: mutateDocuments,
    isPending: isPendingDocuments
  } = useMutation( {
    
    mutationKey: [ 'set-documents-info' ],
    mutationFn: ( { isTemp } ) => expert.sendExpertDataStep4( isTemp ),
    onSuccess: () => {
      
      refetchExpert()
      globalActions.quiz.setStep( steps.publications )
      globalActions.quiz.setContinueStep( steps.publications )
      setTitle( 'Публикации' )
      setDescription( 'Сертификаты, отзывы и прочая информация относительно всего, что вы заполняли ранее' )
      
      const scrollContainer = document.querySelector( `.${ s.content }` )
      
      if ( scrollContainer ) {
        
        scrollContainer.scrollTo( {
          
          top: 0,
          behavior: 'smooth'
          
        } )
        
      }
      
    }
    
  } )
  
  const {
    mutate: mutatePublications,
    isPending: isPendingPublications
  } = useMutation( {
    
    mutationKey: [ 'set-publications-info' ],
    mutationFn: ( { isTemp } ) => expert.sendExpertDataStep5( isTemp ),
    onSuccess: () => {
      
      refetchExpert()
      globalActions.quiz.setQuizStatus( QuizProgress.end )
      globalActions.quiz.setStep( steps.questionnaire )
      
      const scrollContainer = document.querySelector( `.${ s.content }` )
      
      if ( scrollContainer ) {
        
        scrollContainer.scrollTo( {
          
          top: 0,
          behavior: 'smooth'
          
        } )
        
      }
      
    }
    
  } )
  
  switch ( globalState.quiz.progress ) {
    
    case QuizProgress.begin:
      buttonTitle = 'Начать'
      break
    
    case QuizProgress.continue:
      buttonTitle = 'Продолжить'
      break
    
    default:
      buttonTitle = 'На главную'
    
  }
  
  const handleButtonAction = () => {
    
    if ( globalState.quiz.progress === QuizProgress.end ) {
      
      push( '/' )
      
    }
    
    if ( globalState.quiz.progress === QuizProgress.begin ) {
      
      globalActions.quiz.setStep( steps.profile )
      globalActions.quiz.setContinueStep( steps.profile )
      
    }
    
    if ( globalState.quiz.progress === QuizProgress.continue ) {
      
      if ( globalState.quiz.continueStep === steps.profile ) {
        
        globalActions.quiz.setStep( steps.profile )
        setTitle( 'Профиль' )
        setDescription( 'Эти данные станут частью вашего профиля и помогут продвижению' )
        
      }
      
      if ( globalState.quiz.continueStep === steps.service ) {
        
        globalActions.quiz.setStep( steps.service )
        setTitle( 'Услуги' )
        setDescription( 'В каких направлениях и какие услуги вы готовы оказывать вашим будущим клиентам' )
        
      }
      
      if ( globalState.quiz.continueStep === steps.school ) {
        
        globalActions.quiz.setStep( steps.school )
        setTitle( 'Школа' )
        setDescription( 'Если у вас нет собственной школы или курса переходите к следующему шагу' )
        
      }
      
      if ( globalState.quiz.continueStep === steps.documents ) {
        
        globalActions.quiz.setStep( steps.documents )
        setTitle( 'Документы' )
        setDescription( 'Сертификаты, отзывы и прочая информация относительно всего, что вы заполняли ранее' )
        
      }
      
      if ( globalState.quiz.continueStep === steps.publications ) {
        
        globalActions.quiz.setStep( steps.publications )
        setTitle( 'Публикации' )
        setDescription( 'Сертификаты, отзывы и прочая информация относительно всего, что вы заполняли ранее' )
        
      }
      
    }
    
  }
  
  const nextStep = async() => {
    
    if ( globalState.quiz.step === steps.profile ) {
      
      await mutateProfile( { isTemp: false, email: globalState.user.email } )
      
    }
    
    if ( globalState.quiz.step === steps.service ) {
      
      await mutateService( { isTemp: false } )
      
    }
    
    if ( globalState.quiz.step === steps.school ) {
      
      await mutateSchool( { isTemp: false } )
      
      refetchExpert()
      globalActions.quiz.setStep( steps.documents )
      globalActions.quiz.setContinueStep( steps.documents )
      setTitle( 'Документы' )
      setDescription( 'Сертификаты, отзывы и прочая информация относительно всего, что вы заполняли ранее' )
      
      const scrollContainer = document.querySelector( `.${ s.content }` )
      
      if ( scrollContainer ) {
        
        scrollContainer.scrollTo( {
          
          top: 0,
          behavior: 'smooth'
          
        } )
        
      }
      
    }
    
    if ( globalState.quiz.step === steps.documents ) {
      
      await mutateDocuments( { isTemp: false } )
      
    }
    
    if ( globalState.quiz.step === steps.publications ) {
      
      await mutatePublications( { isTemp: false } )
      
    }
    
  }
  
  const prevStep = () => {
    
    if ( globalState.quiz.step === steps.service ) {
      
      globalActions.quiz.setStep( steps.profile )
      setTitle( 'Профиль' )
      setDescription( 'Эти данные станут частью вашего профиля и помогут продвижению' )
      
    }
    
    if ( globalState.quiz.step === steps.school ) {
      
      globalActions.quiz.setStep( steps.service )
      setTitle( 'Услуги' )
      setDescription( 'В каких направлениях и какие услуги вы готовы оказывать вашим будущим клиентам' )
      
    }
    
    if ( globalState.quiz.step === steps.documents ) {
      
      globalActions.quiz.setStep( steps.school )
      setTitle( 'Школа' )
      setDescription( 'Если у вас нет собственной школы или курса переходите к следующему шагу' )
      
    }
    if ( globalState.quiz.step === steps.publications ) {
      
      globalActions.quiz.setStep( steps.documents )
      setTitle( 'Документы' )
      setDescription( 'Сертификаты, отзывы и прочая информация относительно всего, что вы заполняли ранее' )
      
    }
    
  }
  
  const quizContent = useMemo( () => {
    
    if ( globalState.quiz.step === steps.profile ) {
      
      return (
        
        <Profile/>
      
      )
      
    }
    
    if ( globalState.quiz.step === steps.service ) {
      
      return (
        
        <Services/>
      
      )
      
    }
    
    if ( globalState.quiz.step === steps.school ) {
      
      return (
        
        <School/>
      
      )
      
    }
    
    if ( globalState.quiz.step === steps.documents ) {
      
      return (
        
        <Document/>
      
      )
      
    }
    
    if ( globalState.quiz.step === steps.publications ) {
      
      return (
        
        <Publications/>
      
      )
      
    }
    
  }, [ globalState.quiz ] )
  
  useEffect( () => {
    
    profile.getLocations()
    service.getServiceCategories()
    
  }, [] )
  
  useEffect( () => {
    
    if ( isSuccess ) {
      
      const stepProgress = extractProgressFields( expertData )
      
      updateQuizSteps( stepProgress )
      
      if ( expertData?.profile?.progress === 0 ) {
        
        globalActions.quiz.setQuizStatus( QuizProgress.begin )
        
      } else if ( !findFirstProgressLessThan100( expertData ) ) {
        
        globalActions.quiz.setQuizStatus( QuizProgress.end )
        localStorage.clear()
        
      } else {
        
        if ( findFirstProgressLessThan100( expertData ) === 'profile' ) globalActions.quiz.setContinueStep( steps.profile )
        if ( findFirstProgressLessThan100( expertData ) === 'services' ) globalActions.quiz.setContinueStep( steps.service )
        if ( findFirstProgressLessThan100( expertData ) === 'values' ) globalActions.quiz.setContinueStep( steps.school )
        if ( findFirstProgressLessThan100( expertData ) === 'docs' ) globalActions.quiz.setContinueStep( steps.documents )
        if ( findFirstProgressLessThan100( expertData ) === 'publications' ) globalActions.quiz.setContinueStep( steps.publications )
        
        globalActions.quiz.setQuizStatus( QuizProgress.continue )
        
      }
      
    }
    
  }, [ isSuccess, expertData ] )
  
  return {
    
    quizContent,
    nextStep,
    prevStep,
    buttonTitle,
    handleButtonAction,
    title,
    description,
    globalState,
    isSuccess,
    refetchExpert,
    globalActions
    
  }
  
}
