import s from "./attachment.module.scss";
import DefaultButton from "../buttons/default.button";
import Attach from "../icons/attach";
import cssIf from "@/scripts/helpers/css.if";

const AttachmentLabel = ({

  multiple,
  accept,
  fileInputRef,
  error,
  handleClick,
  handleFileChange,
  handleDrop,
  className,
  isButton = true

}) => {

  return (

      <>

        <input

            id="input-file"
            onChange = { handleFileChange }
            multiple = { multiple }
            className = {`${ s.attachment__block__input }`}
            accept = { accept }
            type="file"
            ref = { fileInputRef }

        />

        <label htmlFor = "input-file" className = {`${ s.attachment__block__label } ${cssIf(error, s.attachment__block__label__error)} ${ cssIf( className, className ) }`}>

          <div
            className = {`${ s.attachment__block__label__wrapper }`}
            onDrop = { (e) => handleDrop(e, multiple) }
            onDragOver = { e => e.preventDefault() }
          >

            {error === 'size' && (

              <p className={`${ s.error }`}>Максимальный размер файла - 20 Mb</p>

            )}

            <div className = {`${ s.attachment__block__label__wrapper__info }`}>

              <p>

                Перетащите файлы сюда или нажмите на кнопку

              </p>


              <p className = {`${ cssIf(error === 'type', s.error) } ${ s.attachment__block__label__wrapper__info__format }`}>

                Поддерживаемые форматы: PNG, TIFF, JPG

              </p>

            </div>


            {isButton && (

                <DefaultButton

                    gray
                    name = "Загрузить"
                    icon = { <Attach fill = { '#18009E' } /> }
                    className = { `${s.attachment__button}` }
                    action = { handleClick }

                />

            )}

          </div>

        </label>

      </>

  )

}

export default AttachmentLabel;