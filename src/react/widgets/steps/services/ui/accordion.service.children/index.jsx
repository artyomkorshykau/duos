import useGlobal from '@/store'
import s from "./accordion.service.children.module.scss"
import { useEffect } from 'react';
import AccordionChildren from '@/react/widgets/accordion.children';
import General from '../general/ui';
import WorkClients from '../work.clients/ui';
import PaymentFormat from '../payment.format/ui';
import ServiceDescription from '../service.description/ui';
import Attachment from '@/react/components/attachment';
import DefaultButton from '@/react/components/buttons/default.button';
import Save from '@/react/components/icons/save';

const AccordionServiceChildren = ({

  el,
  categoryIndex,
  index,
  isDelete,

}) => {
  const [ globalState, globalActions ] = useGlobal()
  const { service } = globalState

  const content = (index, categoryIndex, setOpen ) => {
    return (
      <div className = {`${ s.services__children }`}>
        <div className = {`${ s.services__children__left }`}>
          <Attachment
            accept = ".png, .jpg, .tiff"
            files = { service.category?.[categoryIndex]?.services?.[index]?.files }
            onChange = {(files) =>
              globalActions.service.setServiceFiles(files, categoryIndex, index)
            }
            description = "Загрузите картинку к услуге, она будет отображаться в качестве обложки услуги"
            size = "big"
          />

          {el.status !== "Filled" && (
            <DefaultButton
              gray
              name = "Сохранить"
              className = {`${ s.services__children__left__button }`}
              icon = { <Save fill="#18009E" /> }
              positionIcon = "right"
              action = { () => setOpen(false) }
            />
          )}
        </div>

        <div className = {`${ s.services__children__right }`}>
          <General categoryIndex = { categoryIndex } index = { index } />
          <WorkClients categoryIndex = { categoryIndex } index = { index } />
          <PaymentFormat categoryIndex = { categoryIndex } index = { index } />
          <ServiceDescription categoryIndex = { categoryIndex } index = { index } />
        </div>
      </div>
    )
  }
  
  const {
    paymentFormat,
    price,
    from,
    before,
    dayWeekMonthYearList,
    title,
    serviceType,
    deliveryFormat,
    duration,
    minuteHoursDays,
    meaningService,
    files
  } = service.category?.[categoryIndex]?.services?.[index]

  const changeStatus = (categoryIndex, index) => {

    if (el.status === "New") {

      globalActions.service.setChangeStatusServices(
        "NotFinished",
        categoryIndex,
        index
      )

    }

  }

  useEffect(() => {
    if (el.status === "New") {

      const timer = setTimeout(() => {

        globalActions.service.setChangeStatusServices("NotFinished", categoryIndex, index)

      }, 15000);

      return () => clearTimeout(timer);
    }
  }, [ el.status ])

  useEffect(() => {
    if (((paymentFormat === 'free' && paymentFormat) ||
      (paymentFormat === 'fix' && price) ||
      (paymentFormat === 'range' && from && before) ||
      (paymentFormat === 'subscription' && price)) &&
      title &&
      serviceType &&
      deliveryFormat &&
      duration &&
      meaningService &&
      files &&
      el.status !== "New"
    ) {
      globalActions.service.setChangeStatusServices("Filled", categoryIndex, index)
    } else if(el.status !== "New") {
      globalActions.service.setChangeStatusServices("NotFinished", categoryIndex, index)
    }
  }, [
    paymentFormat,
    price,
    from,
    before,
    dayWeekMonthYearList,
    title,
    serviceType,
    deliveryFormat,
    duration,
    minuteHoursDays,
    meaningService,
    files
  ])

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
      status = { el.status }
    />
  )

}

export default AccordionServiceChildren