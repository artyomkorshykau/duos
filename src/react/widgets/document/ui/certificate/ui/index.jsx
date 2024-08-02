'use client'

import Attachment from '@/react/components/attachment';
import s from '../../document.module.scss'
import useGlobal from '@/store';

const Certificate = ({

  i
  
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
          files = { globalState.service.category?.[i]?.certificatesFiles }
          onChange={ (files) => globalActions.service.setCertificatesFiles( files, i ) }
          multiple
        /> 

      </div>
      

    </div>

  )

}

export default Certificate
