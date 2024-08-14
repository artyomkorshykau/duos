import Popup from "@/react/popups/popup";
import { useMemo } from "react";
import s from './tax.info.popup.module.scss'
import DefaultButton from "@/react/components/buttons/default.button";
import Checkbox from "@/react/components/forms/checkbox";
import useGlobal from "@/store";

const TaxInfoPopup = ( props ) => {

  const {

    isOpened,
    bodyClassName,
    closePopup

  } = props

  const [ globalState, globalActions ] = useGlobal()

  const content = useMemo(() => {

    return (

      <>

        <img src='/img/questionnaire/tax.info.png' alt="tax info"/>
        <div className = {`${ s.tax_description }`}>

          <h3 className = {`text-26 ${ s.tax_description__title }`}>Просим вас учитывать, что...</h3>
          <p className = {`text-16 ${ s.tax_description__description }`}>

            В целях соблюдения налогового законодательства
            РФ настоятельно рекомендуем регистрировать свою деятельность в налоговом органе в качестве самозанятого,
            индивидуального предпринимателя или ООО. Также напоминаем,
            что незаконная предпринимательская деятельность влечет уголовную ответственность
            согласно статье 171 УК РФ.

          </p>

          <div className = {`${ s.tax_description__agree }`}>

            <div className = {`text-13 ${ s.tax_description__agree__info }`}>

              <Checkbox

                isChecked = { globalState.tax.taxAgree }
                setIsChecked =  {  globalActions.tax.toggleTaxAgree }

              />
              Я ознакомлен с информацией выше

            </div>
            <DefaultButton

              name = { 'Закрыть' }
              className = {`${ s.tax_description__agree__close_button }`}
              action = { closePopup }
              disabled = { !globalState.tax.taxAgree }

            />

          </div>

        </div>

      </>

    )

  }, [ globalState.tax.taxAgree ] )

  return (

    <Popup

      isOpened={ isOpened }
      boxClassName={ bodyClassName }
      closePopup = { closePopup }
      contentOnly
      content = { content }

    >

    </Popup>

  )

}

export default TaxInfoPopup