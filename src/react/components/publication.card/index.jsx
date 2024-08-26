import s from './publication.card.module.scss'
import PlaceholderImage from '@/react/components/icons/img.placeholder'
import DefaultButton from '@/react/components/buttons/default.button'
import Status from '@/react/components/status'
import Cross from '@/react/components/icons/cross'

const PublicationCard = ( props ) => {

  const {

    photo,
    status,
    title,
    description,
    action,
    addNewPublication

  } = props

  if ( title ) {

    return (

      <div className = { `${ s.card }` }>

        { photo

          ? <img src = { photo } alt={ '' }/>
          : <div className = { `${ s.card__placeholder }` }>

            <PlaceholderImage/>

          </div>

        }

        <div className = { `${ s.card__content }` }>

          <div className = { `${ s.card__content__status }` }>

            <Status status = { status === 1 ? 'Filled' : 'NotFilled' }/>

            <DefaultButton

              name = "Удалить"
              type = 'any'
              className = { `${ s.card__content__status__button }` }

            />

          </div>

          <h4 className = { `text-20 ${ s.card__content__title }` }>

            { title }

          </h4>

          <p className = { `text-13 ${ s.card__content__description }` }>

            { description }

          </p>

          <DefaultButton

            name = { 'Открыть' }
            gray
            className = { `${ s.card__content__button }` }
            action = { action }

          />

        </div>

      </div>

    )

  }

  return (

    <div className = { `${ s.create_card }` }>

      <DefaultButton

        gray
        name = ""
        className = { `${ s.create_card__add_button }` }
        icon = { <Cross fill = { '#18009E' }/> }
        positionIcon = "right"
        action = { addNewPublication }

      />

      <p className = { `text-13 ${ s.create_card__title }` }>

        Нажмите, чтобы создать публикацию

      </p>

    </div>

  )

}

export default PublicationCard