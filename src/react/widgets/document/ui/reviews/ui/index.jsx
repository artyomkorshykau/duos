'use client'

import Attachment from '@/react/components/attachment';
import s from '../../document.module.scss'
import Textfield from '@/react/components/forms/textfield'
import useGlobal from '@/store';

const Reviews = ({

}) => {

  const [ globalState, globalActions ] = useGlobal()

  return (

    <div>

      <p className = {`${ s.document__section__title }`}> Отзывы </p>

      <p className = {`text-16 ${ s.document__section__description }`}>

        Загрузите 3-5 фото отзывов от клиентов об услугах, оказанных им в рамках этого направления

      </p>

      <div className = { s.document__section__attachmentWrapper }>

        <Attachment
          accept = ".png, .jpg, .tiff"
          files = { [] }
          onChange={() => { }}
          multiple
        /> 

      </div>
      

    </div>

  )

}

export default Reviews
