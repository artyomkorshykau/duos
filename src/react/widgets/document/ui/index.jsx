import s from './document.module.scss'
import useGlobal from '@/store'
import AccordionDocument from './accordion.document'
import AccordionParent from '../../accordion.parent'
import Attachment from '@/react/components/attachment'
import { useEffect, useState } from 'react'

const Document = () => {

  const [ globalState, globalActions ] = useGlobal()
  
  const [ filled, setFilled ] = useState( false  )
  
  const { service } = globalState;

  const { status, files } = service.passport

  const changeStatus = (index) => {

    if (status === "New") {

      globalActions.service.setChangeStatusPassport("NotFinished", index)

    }

  }

  useEffect(() => {

    if (status === "New") {

      const timer = setTimeout(() => {

        globalActions.service.setChangeStatusPassport("NotFinished")

      }, 15000)

      return () => clearTimeout(timer)

    }

  }, [status])

  useEffect(() => {

    if ( files?.length && status !== "New" ) {
      
      globalActions.service.setChangeStatusPassport("Filled")

    } else if ( status !== "New" ) {

      globalActions.service.setChangeStatusPassport("NotFinished")

    }

  }, [ status, files ])
  
  /*useEffect(() => {
    
    if (status !== "New") {

      console.log(filled)

      if (filled) {

        globalActions.service.setChangeStatusPassport("Filled")
        console.log('+')

      } else {

        globalActions.service.setChangeStatusPassport("NotFinished")
        console.log('++')

      } 

    }
    
  }, [filled, status])*/

  const content = (index) => {

    return (
        
        <Attachment
          accept = ".png, .jpg, .tiff"
          files = { files }
          onChange = {(files) => globalActions.service.setChangeFilesPassport(files)}
        />
      
    )

  }

  return (

    <div className = {`${ s.wrapper }`}>
      
      <AccordionParent
        index = { 0 }
        isDelete = { false }
        content = { () => content(0) }
        title = "Паспорт"
        description = "Для подтверждения личности загрузите фото с вашим паспортом в руках, открытым на 2м развороте, сделанное крупным планом. Текст в документе должен читаться, не быть закрытым пальцем или другими предметами"
        type = "Направление"
        addNewServices = { false }
        status = { status }
        isBottomContent = { false }
        changeStatus = { (index) =>  changeStatus(index) }
      />

      {service.category.map(( category, index ) => (

        <AccordionDocument category = { category } key={ index } index = { index } />
           
      ))}

    </div>

  )

}

export default Document