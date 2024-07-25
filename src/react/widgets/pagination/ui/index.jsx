import s from './pagination.module.scss'
import DefaultButton from '@/react/components/buttons/default.button';
import Arrow from '@/react/components/icons/arrow';

const Pagination = () => {

  return (

    <div className = {`${ s.pagination }`}>

      <DefaultButton

        gray name = {''}
        className = {`${ s.pagination__button_back }`}

      >

        <Arrow direction = { 'left' } fill = { '#9ba1a1' }/>

      </DefaultButton>
      <DefaultButton

        name = { 'Далее' }
        className = {`${ s.pagination__button_next}`}

      >

        <Arrow direction = { 'right' } fill = { '#fff' }/>

      </DefaultButton>

    </div>

  )

}

export default Pagination