import { steps } from "@/constants/quiz.steps";
import DefaultButton from '@/react/components/buttons/default.button';
import Arrow from '@/react/components/icons/arrow';
import useGlobal from '@/store';
import { useEffect, useState } from 'react';
import s from './pagination.module.scss';
import Save from "@/react/components/icons/save";

const Pagination = ({
  
  nextStep,
  activeStep,
  prevStep

}) => {


  const [ globalState ] = useGlobal()

  const [ disabled, setDisabled ] = useState( false )

  const { service, profile, school, publications } = globalState

  useEffect(() => {

    if ( activeStep === "Услуги" && service.progress !== 1 ) {

      setDisabled( true )

    } else if ( activeStep === "Документы" && service.progress !== 1 ) {

      setDisabled( true )

    } else if(activeStep === "Профиль" && profile.progress !== 1) {

      setDisabled( true )

    } else if(activeStep === "Школа" && school.progress !== 1) {

      setDisabled( true )

    } else if(activeStep === "Публикации" && publications.progress !== 1 ) {

      setDisabled( true )

    } else {

      setDisabled( false )

    }

  }, [ activeStep, service.progress, profile, school, publications.progress ])

  return (

    <div className = {`${ s.pagination }`}>

      <DefaultButton

        gray
        name = {''}
        action = { prevStep }
        className = {`${ s.pagination__button_back }`}
        icon = { <Arrow direction = { 'left' } fill = { '#9ba1a1' }/> }
        disabled = { activeStep === steps.profile }

      />

      <DefaultButton

        name = { activeStep === "Публикации" ? 'Отправить анкету' : activeStep === "constructor" ? 'Сохранить' : 'Далее' }
        className = {`${ s.pagination__button_next }`}
        action = { nextStep }
        icon = { activeStep === "constructor" ? <Save direction = { 'right' } fill = { '#fff' }/> : <Arrow direction = { 'right' } fill = { '#fff' }/> }
        positionIcon = 'right'
        disabled = { disabled }

      />

    </div>

  )

}

export default Pagination