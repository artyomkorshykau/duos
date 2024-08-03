import s from "@/react/widgets/publications/ui/publications.module.scss";
import Textarea from "@/react/components/forms/textarea";
import Attachment from "@/react/components/attachment";
import useGlobal from "@/store";

const AboutYourselfContent = ( props ) => {

  const { index } = props
  const [ globalState, globalActions ] = useGlobal()
  const { publications } = globalState;

  const { photos } = publications

  return (

    <>

      { publications.categories[index].profileInfo.map( (section) => {

        return (

          <div key = { section.id }>

            <h4 className = {`text-20 ${ s.publicationsWrapper__title }`}>{ section.title }</h4>
            <p className = {`text-16 ${ s.publicationsWrapper__description }`}>{ section.description }</p>
            { section.id

              ? <Textarea

                placeholder = { section.placeholder }
                value = { globalState.publications.categories[0].profileInfo[section.id].text }
                onChange = { (e) => globalActions.publications.setAboutYourselfInfo(section.id, e.target.value) }

              />
              : <Attachment

                accept = ".png, .jpg, .tiff"
                files = { photos }
                onChange = {(files) => globalActions.publications.setProfilePhoto(files)}
                multiple

              />

            }

          </div>

        )

      })

      }

    </>

  )

}

export default AboutYourselfContent