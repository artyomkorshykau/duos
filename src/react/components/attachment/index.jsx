import s from "./attachment.module.scss";
import { useRef, useState } from "react";
import CloseInCircle from "../icons/close.in.circle";
import cssIf from "@/scripts/helpers/css.if";
import AttachmentLabel from "./attachment.label";
import { Controller, FreeMode, Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Arrow from "../icons/arrow";
import DefaultButton from "../buttons/default.button";

const Attachment = ({

  multiple,
  accept,
  files,
  onChange,
  typeFiles = [ 'image/png', 'image/tiff', 'image/jpeg' ],
  maxSize = 10,
  description,
  size = 'small',
  deleteMultipleFile,
  maxLength = 5

}) => {

  const [error, setError] = useState('');

  const fileInputRef = useRef( null );

  const handleClick = () => {

    fileInputRef.current.click();

  };

  const addFile = ( files ) => {

    const file = files[ 0 ];

    if ( file.size > maxSize * 1024 * 1024 ) {

      setError( 'size' );
      return;

    }

    if ( !typeFiles.includes( file.type ) ) {

      setError( 'type' );
      return;

    }

    const reader = new FileReader();

    reader.onloadend = () => {

      const base64String = reader.result;
      onChange( base64String );

    };

    reader.readAsDataURL( file );

  };

  const addFiles = ( files ) => {

    if (files) {

      for (const file of files) {

        if (file.size > maxSize * 1024 * 1024) {

          setError('size');
          return;

        }

        if (!typeFiles.includes(file.type)) {

          setError('type');
          return;

        }
      }

      const readers = files.map((file) => {
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
          setError('size');
        });

    }

  };

  const handleFileChange = ( e ) => {

    setError( '' )

    const files = e.target.files;

    if (files.length > 0) {

      addFile( files );

    }

  };

  const handleMultipleFileChange = (e) => {

    setError( '' );

    const filesMultiple = e.target.files;

    let filesArr = Array.from( filesMultiple );

    const totalLength = ( files?.length || 0 ) + filesArr.length;

    if (totalLength > maxLength) {

      const excessLength = totalLength - maxLength;
      filesArr = filesArr.slice(0, -excessLength);

    }

    if (filesArr.length > 0) {

      // if (filesArr) {
      //
      //   for (const file of filesArr) {
      //
      //     if (file.size > maxSize * 1024 * 1024) {
      //
      //       setError('size');
      //       return;
      //
      //     }
      //
      //     if (!typeFiles.includes(file.type)) {
      //
      //       setError('type');
      //       return;
      //
      //     }
      //   }
      //
      //   const readers = filesArr.map((file) => {
      //     return new Promise((resolve, reject) => {
      //
      //       const reader = new FileReader();
      //       reader.onloadend = () => resolve(reader.result);
      //       reader.onerror = (error) => reject(error);
      //       reader.readAsDataURL(file);
      //
      //     });
      //   });
      //
      //   Promise.all(readers)
      //     .then((base64Strings) => {
      //       onChange(base64Strings);
      //     })
      //     .catch((error) => {
      //       console.error("Error reading files", error);
      //       setError('size');
      //     });
      //
      // }

      addFiles( filesArr );

    }

  };

  const deleteFile = (e) => {

    e.stopPropagation();
    onChange(null);

  };

  const deleteMultipleFiles = (e, index) => {

    e.stopPropagation();
    deleteMultipleFile(index);

  };

  const handleDrop = ( e, multiple ) => {

    e.preventDefault();

    setError('');

    const files = Array.from( e.dataTransfer.files ).filter( file => (
        file.type === 'image/png' ||
        file.type === 'image/jpeg' ||
        file.type === 'image/tiff'
    ) );

    if (files.length === 0) {

      setError( 'type' );


    } else {

      multiple ? addFiles( files ) : addFile( files );

    }
  }

  return (

    <div className = {`${ s.attachment }`}>
      
      <div className = {`
          ${ s.attachment__block }
          ${ cssIf(size === 'big', s.attachment__big ) }
          ${ cssIf(size === 'small', s.attachment__small ) }
          ${ cssIf(!!files, s.withImage ) }
        `}
      >
        
        {(files && files.length &&  !multiple) ? (

          <div className = {`${ s.attachment__block__imagePreview } ${ cssIf(size === 'small', s.attachment__block__small ) }`}>

            <img src = { files } alt = "Preview" className = {`${ s.image }`} />

            <CloseInCircle
              
              onClick = { deleteFile }
              className = {`${ s.icon } pointer`}
            
            />

          </div>
            
        ) : (files && files.length && multiple) ? (

            <div className = {`${ s.attachment__block__multiple }`}>

              <Swiper

				modules = { [ Mousewheel, FreeMode, Controller, Navigation ] }
                slidesPerView = {'auto'}
                spaceBetween = { 16 }
                className = {`${ s.attachment__block__multiple__swiper }`}
                mousewheel = { { forceToAxis: true } }
                navigation = { {
                  nextEl: `.btn_next`,
                  prevEl: `.btn_prev`,
                  disabledClass: 'disabled',
                }}

              >
                {files.length < maxLength && (

                  <SwiperSlide className = {`${ s.attachment__block__multiple__swiper__preview }`}>

                    <AttachmentLabel

                      multiple = { multiple }
                      accept = { accept }
                      fileInputRef = { fileInputRef }
                      error = { error }
                      handleClick = { handleClick }
                      handleFileChange = { handleMultipleFileChange }
                      handleDrop = { handleDrop }
                      className = {`${ s.attachment__block__multiple__label }`}
                      isButton = { false }

                    />

                  </SwiperSlide>

                )}

                { files.map((file, index) => (

                  <SwiperSlide
                    key = { index }
                    className = {`${ s.attachment__block__multiple__swiper__preview }`}
                  >
                    <img src = { file } alt = "Preview" className = {`${ s.image }`} />

                    <CloseInCircle

                      onClick = { (e) => deleteMultipleFiles( e, index ) }
                      className = {`${ s.icon } pointer`}

                    />

                  </SwiperSlide>

                ))}

				      </Swiper>

              <DefaultButton

                gray
                name = {''}
                className = {`${ s.attachment__block__multiple__button } ${ s.attachment__block__multiple__button__left } btn_prev ${ cssIf(files.length < 3, s.attachment__block__multiple__button__hidden ) }`}
                icon = { <Arrow direction = { 'left' } fill = { '#18009E' } className = {`${ s.attachment__block__multiple__button__icon }`}/> }

              />

              <DefaultButton

                gray
                name = {''}
                className = {`${ s.attachment__block__multiple__button } ${ s.attachment__block__multiple__button__right } btn_next ${ cssIf(files.length < 3, s.attachment__block__multiple__button__hidden ) }`}
                icon={<Arrow direction={'right'} fill={'#18009E'} className={`${s.attachment__block__multiple__button__icon}`}
                />}

              />

            </div>

          ) : (

              <AttachmentLabel

                multiple = { multiple }
                accept = { accept }
                fileInputRef = { fileInputRef }
                error = { error }
                handleClick = { handleClick }
                handleFileChange = { multiple ? handleMultipleFileChange : handleFileChange }
                handleDrop = { handleDrop }

              />

          )

        }

      </div>
            
      { description && <p className = {`${ s.attachment__text }`}>{ description }</p> }
      
    </div>

  )

}

export default Attachment;