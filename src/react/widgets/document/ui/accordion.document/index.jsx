import useGlobal from '@/store'
import AccordionParent from '@/react/widgets/accordion.parent'
import { useEffect, useState } from 'react';
import Certificate from '../certificate/ui';
import AccordionDocumentChildren from '../accordion.document.children';

const AccordionDocument = ({

  category,
  index

}) => {

  const [ globalState, globalActions ] = useGlobal()
  
  const { service } = globalState;

  const [filled, setFilled] = useState(false)

  const {
    certificatesFiles,
    services,
  } = service.category?.[index]

  const changeStatus = (index) => {
    if (category.documentStatus === "New") {
      globalActions.service.setChangeDocumentStatusCategory("NotFinished", index)
    }
  }

  useEffect(() => {

    if (category.documentStatus === "New") {

      const timer = setTimeout(() => {

        globalActions.service.setChangeDocumentStatusCategory("NotFinished", index)

      }, 15000)

      return () => clearTimeout(timer)
    }

  }, [category.documentStatus])

  useEffect(() => {
    if (
      certificatesFiles &&
      services.every((item) => item.documentStatus === "Filled") &&
      category.documentStatus !== "New"
    ) {
      setFilled(true)
    } else if (category.documentStatus !== "New") {
      setFilled(false)
    }
  }, [ certificatesFiles, services ])
  
  useEffect(() => {
    
    if (category.documentStatus !== "New") {

      if (filled) {

        globalActions.service.setChangeDocumentStatusCategory("Filled", index)

      } else {

        globalActions.service.setChangeDocumentStatusCategory("NotFinished", index)

      } 

    }
    
  }, [filled])

  const content = (i) => {

    return (

      <>
        
        <Certificate />
        
      </>
      
    )

  }

  return (
    <AccordionParent
      category = { category }
      i = { index }
      isDelete = { false }
      content = { () => content(index) }
      title = { category.title }
      description = "Загрузите ниже все необходимые графические файлы по этому направлению"
      type = "Направление"
      addNewServices = { false }
      titleChildren = "Рекомендации к услугам"
      descriptionChildren = "Заполните контакты клиентов, которые могут дать рекомендации по тем услугам, которые вы указали ранее"
      status = { category.documentStatus }
      changeStatus = { (index) =>  changeStatus(index) }
    >
      {category?.services?.map((el, i) => (
        <AccordionDocumentChildren
          key = { i }
          el = { el }
          categoryIndex = { index }
          i = { i }
          isDelete = { false }
        />
      ))}
    </AccordionParent>
  )

}

export default AccordionDocument