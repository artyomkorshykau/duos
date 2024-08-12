import s from './pagination.module.scss'
import DefaultButton from '@/react/components/buttons/default.button';
import Arrow from '@/react/components/icons/arrow';
import useGlobal from '@/store';
import { useEffect, useState } from 'react';

const Pagination = ({
  
  nextStep,
  activeStep

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
        className = {`${ s.pagination__button_back }`}
        icon = { <Arrow direction = { 'left' } fill = { '#9ba1a1' }/> }

      />

      <DefaultButton

        name = { activeStep === "Публикации" ? 'Отправить анкету' : 'Далее' }
        className = {`${ s.pagination__button_next }`}
        action = { nextStep }
        icon = { <Arrow direction = { 'right' } fill = { '#fff' }/> }
        positionIcon = 'right'
        disabled = { disabled }

      />

    </div>

  )

}

export default Pagination