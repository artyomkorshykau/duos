import s from "./attachment.module.scss";
import DefaultButton from "../buttons/default.button";
import Attach from "../icons/attach";
import { useRef, useState } from "react";
import CloseInCircle from "../icons/close.in.circle";
import cssIf from "@/scripts/helpers/css.if";

const Attachment = ({

  multiple,
  accept,
  isError,
  errorMessage = 'type',
  files,
  onChange,
  typeFiles = [ 'image/png', 'image/tiff', 'image/jpeg' ],
  maxSize = 10,
  description,
  size = 'small',
  ...rest

}) => {
  const [error, setError] = useState('');

  const fileInputRef = useRef( null );

  const handleClick = () => {

    fileInputRef.current.click();

  };

  const handleFileChange = (e) => {

    setError('')

    const files = e.target.files;

    if (files.length > 0 && !multiple) {

      const file = files[0];
      
      if ( file.size > maxSize * 1024 * 1024 ) {
        
        setError('size');
        return;

      }

      if ( !typeFiles.includes(file.type) ) {

        setError('type');
        return;

      }

      const reader = new FileReader();

      reader.onloadend = () => {

        const base64String = reader.result;
        onChange(base64String)

      };

      reader.readAsDataURL( file );
    
    }

    if (files.length > 0 && multiple) {

      if (files) {
        const filesArr = Array.from(files);
        filesArr.map((file) => {

          if ( file.size > maxSize * 1024 * 1024 ) {
        
            setError('size');
            return;

          }

          if ( !typeFiles.includes(file.type) ) {

            setError('type');
            return;

          }

        })

        const readers = filesArr.map((file) => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
            reader.readAsDataURL(file);
          });
        });

        Promise.all(readers)
          .then((base64Strings) => {
            onChange(base64Strings);
          })
          .catch((error) => {
            console.error("Error reading files", error);
            setError('file-read');
          });
        
      }

    }

  };

  const deleteFile = (e) => {

    e.stopPropagation()
    onChange(null)

  }

  return (

    <div className = {`${ s.attachment }`}>
      
      <div className = {`${ s.attachment__block } ${ cssIf(size === 'big', s.attachment__big ) } ${ cssIf(size === 'small', s.attachment__small ) }`}>
        
        {(files &&  !multiple) ? (

          <div className = {`${ s.attachment__block__imagePreview }`}>

            <img src = { files } alt = "Preview" className = {`${ s.image }`} />

            <CloseInCircle
              
              onClick = { deleteFile }
              className = {`${ s.icon } pointer`}
            
            />

          </div>
            
        ) : (files && multiple) ? (
            <div className = {`${ s.attachment__block__multiple }`}>
              { files.map((file, index) => (
                <div key = {index} className = {`${ s.attachment__block__multiple__preview }`}>

                  <img src = { file } alt = "Preview" className = {`${ s.image }`} />

                  <CloseInCircle
                    
                    onClick = { deleteFile }
                    className = {`${ s.icon } pointer`}
                  
                  />

                </div>
              ))}
            </div>
        ) : (
            
          <label htmlFor = "input-file" className = {`${ s.attachment__block__label }`}>
              
            <div className = {`${ s.attachment__block__label__wrapper }`}>
          
              <input
                
                id = "input-file"
                onChange = { (e) => handleFileChange(e) }
                multiple = { multiple }
                className = {`${ s.attachment__block__label__wrapper__input }`}
                accept = { accept }
                type = "file"
                ref = { fileInputRef }
                { ...rest }
                  
              />
                
                <div className = {`${ s.attachment__block__label__wrapper__info }`}>
                  
                  <p className = {`${ s.attachment__block__label__wrapper__info__text }`}>Перетащите файлы сюда или нажмите на кнопку</p>
                  
                  <p className = {`${ cssIf(error === 'type', s.error ) } ${ s.attachment__block__label__wrapper__info__format }`}>
                    Поддерживаемые форматы: PNG, TIFF, JPG</p>
                  
                </div>
                
                <DefaultButton
                
                  gray
                  name = "Загрузить"
                  icon = { <Attach fill = {'#18009E'} /> }
                  className = {`${ s.attachment__button }`}
                  action = { handleClick }
                  
                /> 

                {error === 'size' && (
                    
                  <p className = {`${ s.error }`}>Максимальный размер файла - 10 Mb</p>
                    
                )}
            
              </div>

            </label>
          )

        }

      </div>
            
      { description && <p className = {`${ s.attachment__text }`}>{ description }</p> }
      
    </div>

  )

}

export default Attachment;