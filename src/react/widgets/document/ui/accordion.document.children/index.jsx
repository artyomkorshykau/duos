import useGlobal from '@/store'
import { useEffect } from 'react';
import AccordionChildren from '@/react/widgets/accordion.children';
import Recommendation from '../recommendation/ui';
import s from './accordion.document.children.module.scss'
import Reviews from '../reviews/ui';

const AccordionDocumentChildren = ({

  el,
  categoryIndex,
  i,
  isDelete,

}) => {
  const [ globalState, globalActions ] = useGlobal()
  const { service } = globalState

  const content = (i, categoryIndex ) => {
    return (
      <div className = {`${ s.document__children }`}>

        <Recommendation  categoryIndex = { categoryIndex } i = { i }/>
        
        <Reviews />
        
      </div>
    )
  }
  
  const { phone, clientFullName, communication, reviewsFiles } = service.category?.[categoryIndex]?.services?.[i]

  const changeStatus = (categoryIndex, i) => {

    if (el.documentStatus === "New") {

      globalActions.service.setChangeDocumentStatusServices(
        "NotFinished",
        categoryIndex,
        i
      )

    }

  }

  useEffect(() => {
    if (el.documentStatus === "New") {

      const timer = setTimeout(() => {

        globalActions.service.setChangeDocumentStatusServices("NotFinished", categoryIndex, i)

      }, 15000);

      return () => clearTimeout(timer);
    }
  }, [ el.documentStatus ])

  useEffect(() => {
    if ( phone &&  clientFullName && communication && reviewsFiles?.length > 3 && el.documentStatus !== "New" ) {
      globalActions.service.setChangeDocumentStatusServices("Filled", categoryIndex, i)
    } else if(el.documentStatus !== "New") {
      globalActions.service.setChangeDocumentStatusServices("NotFinished", categoryIndex, i)
    }
  }, [ phone, clientFullName, communication, reviewsFiles ])

  return (
    <AccordionChildren
      key = { i }
      el = { el }
      categoryIndex = { categoryIndex }
      i = { i }
      isDelete = { isDelete }
      deletePopupAction = { (categoryIndex, i) =>
        globalActions.service.setDeleteServices(categoryIndex, i)
      }
      title = {
        service.category?.[categoryIndex]?.services?.[i]?.title
      }
      content = {(i, categoryIndex, setOpen) =>
        content(i, categoryIndex, setOpen)
      }
      changeStatus = { (categoryIndex, i) =>  changeStatus(categoryIndex, i) }
      status = { el.documentStatus }
    />
  )

}

export default AccordionDocumentChildren