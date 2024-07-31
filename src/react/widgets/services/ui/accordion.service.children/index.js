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
  i,
  isDelete,

}) => {
  const [ globalState, globalActions ] = useGlobal()
  const { service } = globalState

  const content = (i, categoryIndex, setOpen ) => {
    return (
      <div className = {`${ s.services__children }`}>
        <div className = {`${ s.services__children__left }`}>
          <Attachment
            accept = ".png, .jpg, .tiff"
            files = { service.category?.[categoryIndex]?.services?.[i]?.files }
            onChange = {(files) =>
              globalActions.service.setServiceFiles(files, categoryIndex, i)
            }
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
          <General categoryIndex = { categoryIndex } i = { i } />
          <WorkClients categoryIndex = { categoryIndex } i = { i } />
          <PaymentFormat categoryIndex = { categoryIndex } i = { i } />
          <ServiceDescription categoryIndex = { categoryIndex } i = { i } />
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
  } = service.category?.[categoryIndex]?.services?.[i]

  useEffect(() => {
    if (el.status === "New") {

      const timer = setTimeout(() => {

        globalActions.service.setChangeStatusServices("NotFinished", categoryIndex, i)

      }, 15000);

      return () => clearTimeout(timer);
    }
  }, [ el.status ])

  useEffect(() => {
    if (((paymentFormat === 'Free' && paymentFormat) ||
      (paymentFormat === 'Fixed' && price) ||
      (paymentFormat === 'Range' && from && before) ||
      (paymentFormat === 'Subscription' && price && dayWeekMonthYearList)) &&
      title &&
      serviceType &&
      deliveryFormat &&
      duration && 
      minuteHoursDays &&
      meaningService &&
      el.status !== "New"
    ) {
      globalActions.service.setChangeStatusServices("Filled", categoryIndex, i)
    } else if(el.status !== "New") {
      globalActions.service.setChangeStatusServices("NotFinished", categoryIndex, i)
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
    meaningService
  ])

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
        service.category?.[categoryIndex]?.services?.[i]?.title || el.title
      }
      content = {(i, categoryIndex, setOpen) =>
        content(i, categoryIndex, setOpen)
      }
    />
  )

}

export default AccordionServiceChildren