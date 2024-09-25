'use client'

import Attachment from '@/react/components/attachment'
import s from '../../document.module.scss'
import useGlobal from '@/store'

const Reviews = ({

  categoryIndex,
  index,

}) => {

  const [ globalState, globalActions ] = useGlobal()
  
  const { service } = globalState
  
  return (

    <div>

      <p className = {`${ s.document__section__title }`}> Отзывы </p>

      <p className = {`text-16 ${ s.document__section__description }`}>

        Загрузите 3-5 фото отзывов от клиентов об услугах, оказанных им в рамках этого направления

      </p>

      <div className = { s.document__section__attachmentWrapper }>

        <Attachment

          accept = ".png, .jpg, .tiff"
          files = { service.category?.[ categoryIndex ]?.services?.[ index ]?.reviewsFiles }
          onChange = { (files) => globalActions.service.setServiceReviewsFiles(files, categoryIndex, index) }
          multiple
          deleteMultipleFile = { (indexFile) => globalActions.service.setServiceDeleteReviewsFiles( categoryIndex, index, indexFile ) }

        /> 

      </div>
      

    </div>

  )

}

export default Reviews
