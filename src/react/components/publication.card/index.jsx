import s from './publication.card.module.scss'
import PlaceholderImage from "@/react/components/icons/img.placeholder";
import DefaultButton from "@/react/components/buttons/default.button";
import Status from "@/react/components/status";

const PublicationCard = ( props ) => {

  const {

    photo,
    status,
    title,
    description

  } = props

  return (

    <div className = {`${ s.card }`}>

      {photo

        ? <img src = { photo } alt = { '' }/>
        : <div className = {`${ s.card__placeholder }`}>

          <PlaceholderImage/>

        </div>

      }

      <div className = {`${ s.card__content }`}>

        <div className = {`${ s.card__content__status }`}>

          <Status status = { status }/>

          <DefaultButton

            name = "Удалить"
            type = 'any'
            className = { `${ s.card__content__status__button }`}

          />

        </div>

        <h4 className = {`text-20 ${ s.card__content__title }`}>

          { title }

        </h4>

        <p className = {`text-13 ${ s.card__content__description }`}>

          { description }

        </p>

        <DefaultButton

          name = { 'Открыть' }
          gray
          className = { `${ s.card__content__button  }` }

        />

      </div>

    </div>

  )

}

export default PublicationCard