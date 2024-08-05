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
  className,
  isButton = true

}) => {
  

  return (
    <label htmlFor = "input-file" className = {`${ s.attachment__block__label } ${ cssIf(className, className ) }`}>
              
      <div className = {`${ s.attachment__block__label__wrapper }`}>
          
        <input
                
          id = "input-file"
          onChange = { (e) => handleFileChange(e) }
          multiple = { multiple }
          className = {`${ s.attachment__block__label__wrapper__input }`}
          accept = { accept }
          type = "file"
          ref = { fileInputRef }
                  
        />
                
        <div className = {`${ s.attachment__block__label__wrapper__info }`}>
                  
          <p className = {`${ s.attachment__block__label__wrapper__info__text }`}>
            Перетащите файлы сюда или нажмите на кнопку
          </p>
                  
          <p className = {`${ cssIf(error === 'type', s.error ) } ${ s.attachment__block__label__wrapper__info__format }`}>
            Поддерживаемые форматы: PNG, TIFF, JPG
          </p>
                  
        </div>
                
        {isButton && (

          <DefaultButton
                  
            gray
            name = "Загрузить"
            icon = { <Attach fill = {'#18009E'} /> }
            className = {`${ s.attachment__button }`}
            action = { handleClick }
                    
          />  
          
        )}

        {error === 'size' && (
                    
          <p className = {`${ s.error }`}>Максимальный размер файла - 10 Mb</p>
                    
        )}
            
      </div>

    </label>

  )

}

export default AttachmentLabel;