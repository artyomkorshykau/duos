'use client'

import Attachment from '@/react/components/attachment';
import s from '../../document.module.scss'
import Textfield from '@/react/components/forms/textfield'
import useGlobal from '@/store';

const Certificate = ({

}) => {

  const [ globalState, globalActions ] = useGlobal()

  return (

    <div>

      <p className = {`${ s.document__section__title }`}> Сертификат или диплом </p>

      <p className = {`text-16 ${ s.document__section__description }`}>

        Загрузите фото сертификата или диплома, подтверждающего наличие образования по этому направлению

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

export default Certificate
