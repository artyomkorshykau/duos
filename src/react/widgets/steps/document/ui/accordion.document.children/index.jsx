import useGlobal from '@/store'
import { useEffect, useState } from 'react';
import AccordionChildren from '@/react/widgets/accordion.children';
import Recommendation from '../recommendation/ui';
import s from './accordion.document.children.module.scss'
import Reviews from '../reviews/ui';

const AccordionDocumentChildren = ({

  el,
  categoryIndex,
  index,
  isDelete,

}) => {
  const [ globalState, globalActions ] = useGlobal()
  
  const [ filled, setFilled ] = useState( false )

  const { service } = globalState

  const content = (index, categoryIndex ) => {
    return (
      <div className = {`${ s.document__children }`}>

        <Recommendation  categoryIndex = { categoryIndex } index = { index }/>
        
        <Reviews categoryIndex = { categoryIndex } index = { index }/>
        
      </div>
    )
  }
  
  const { phone, clientFullName, communication, reviewsFiles } = service.category?.[categoryIndex]?.services?.[index]

  const changeStatus = (categoryIndex, index) => {

    if (el.documentStatus === "New") {

      globalActions.service.setChangeDocumentStatusServices(
        "NotFinished",
        categoryIndex,
        index
      )

    }

  }

  useEffect(() => {
    if (el.documentStatus === "New") {

      const timer = setTimeout(() => {

        globalActions.service.setChangeDocumentStatusServices("NotFinished", categoryIndex, index)

      }, 15000);

      return () => clearTimeout(timer);
    }
  }, [ el.documentStatus ])

  useEffect(() => {
    if ( phone &&  clientFullName && communication && reviewsFiles?.length > 2 && el.documentStatus !== "New" ) {
      
      setFilled(true)

    } else if ( el.documentStatus !== "New" ) {
      
      setFilled(false)

    }
  }, [ phone, clientFullName, communication, reviewsFiles ])
  
  useEffect(() => {
    
    if (el.documentStatus !== "New") {

      if (filled) {

        globalActions.service.setChangeDocumentStatusServices("Filled", categoryIndex, index)

      } else {

        globalActions.service.setChangeDocumentStatusServices("NotFinished", categoryIndex, index)

      } 

    }
    
  }, [filled])

  return (
    <AccordionChildren
      key = { index }
      el = { el }
      categoryIndex = { categoryIndex }
      index = { index }
      isDelete = { isDelete }
      deletePopupAction = { (categoryIndex, index) =>
        globalActions.service.setDeleteServices(categoryIndex, index)
      }
      title = {
        service.category?.[categoryIndex]?.services?.[index]?.title
      }
      content = {(index, categoryIndex, setOpen) =>
        content(index, categoryIndex, setOpen)
      }
      changeStatus = { (categoryIndex, index) =>  changeStatus(categoryIndex, index) }
      status = { el.documentStatus }
    />
  )

}

export default AccordionDocumentChildren