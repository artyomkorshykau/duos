import s from './pagination.module.scss'
import DefaultButton from '@/react/components/buttons/default.button';
import Arrow from '@/react/components/icons/arrow';

const Pagination = ({
  
  nextStep

}) => {

  return (

    <div className = {`${ s.pagination }`}>

      <DefaultButton

        gray name = {''}
        className = {`${ s.pagination__button_back }`}
        icon = { <Arrow direction = { 'left' } fill = { '#9ba1a1' }/> }

      />

      <DefaultButton

        name = { 'Далее' }
        className = {`${ s.pagination__button_next }`}
        action = { nextStep }
        icon = { <Arrow direction = { 'right' } fill = { '#fff' }/> }
        positionIcon = 'right'

      />

    </div>

  )

}

export default Pagination