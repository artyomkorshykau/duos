"use client"

import s from "@/react/widgets/publications/ui/publications.module.scss";
import Textarea from "@/react/components/forms/textarea";
import useGlobal from "@/store";
import { useEffect, useState } from "react";
import Attachment from "@/react/components/attachment";
import ProgressBar from "@/react/widgets/publications/ui/progress.bar";

const AboutYourselfContent = ( props ) => {

  const { index } = props
  const [ globalState, globalActions ] = useGlobal()
  const { publications } = globalState;
  const { photos } = publications.categories[0]

  const [textareas, setTextareas] = useState( [] );

  useEffect(() => {

    const initialTextareas = publications.categories[index].profileInfo.map(section => section.text || '');
    setTextareas(initialTextareas);

  }, [ publications, index ]);

  const handleTextareaChange = (sectionId, value) => {

    const updatedTextareas = [ ...textareas ];
    updatedTextareas[ sectionId ] = value;
    setTextareas( updatedTextareas );
    globalActions.publications.setAboutYourselfInfo( sectionId, value );

  };

  const isShowProgressBar = textareas.some( ( str ) => str !== '' )
  const hasPhotos = photos && photos.length > 0;

  return (

    <>

      { publications.categories[ index ].profileInfo.map( ( section ) => {

        return (

          <div key = { section.id }>

            <h4 className = {`text-20 ${ s.publicationsWrapper__title }`}>{ section.title }</h4>
            <p className = {`text-16 ${ s.publicationsWrapper__description }`}>{ section.description }</p>

            { section.id

              ? <Textarea

                placeholder = { section.placeholder }
                value = { textareas[section.id] || '' }
                onChange = { (e) => handleTextareaChange(section.id, e.target.value) }

              />
              : <Attachment

                accept = ".png, .jpg, .tiff"
                files = { photos }
                onChange = {( files ) => globalActions.publications.setProfilePhoto( files )}
                deleteMultipleFile = { ( indexPhoto ) => globalActions.publications.deleteProfilePhoto( indexPhoto ) }
                multiple
                maxLength = { 5 }

              />

            }

          </div>

        )

      })

      }

      { (isShowProgressBar || hasPhotos) &&

        <ProgressBar

        photos={ photos }
        textareas={ textareas }
        type="aboutYourselfContent"

        />

      }

    </>

  )

}

export default AboutYourselfContent