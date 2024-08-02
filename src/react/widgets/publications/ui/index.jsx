import useGlobal from "@/store";
import AccordionParent from "@/react/widgets/accordion.parent";
import s from './publications.module.scss'
import PublicationCard from "@/react/components/publication.card";
import Textarea from "@/react/components/forms/textarea";
import Attachment from "@/react/components/attachment";

const Publications = () => {

  const [ globalState, globalActions ] = useGlobal()

  const { publications } = globalState;

  const content = (index) => {

    if( index === 0 ) {

      return (

        <>

        { publications.categories[index].profileInfo.map( section => {

            return (

              <div key = { section.id }>

                <h4 className = {`text-20 ${ s.publicationsWrapper__title }`}>{ section.title }</h4>
                <p className = {`text-16 ${ s.publicationsWrapper__description }`}>{ section.description }</p>
                { section.id

                  ? <Textarea placeholder = { section.placeholder }/>
                  : <Attachment/>

                }

              </div>

            )

          })

        }

        </>

      )

    }

    if( index === 1 ) {

     return (

       <div className = {`flex justify-start flex-wrap gap-24`}>

         <PublicationCard/>

         <PublicationCard

           title = 'Как преодолеть тоску, когда не знаешь, в чем ее причина?'
           status = { 'NotFilled' }

         />

         <PublicationCard

           title = 'Как преодолеть тоску, когда не знаешь, в чем ее причина?'
           description = {`Мы не всегда понимаем то, что чувствуем и тем более не всегда ясно, 
         что стало причиной этих ощущений. Давайте найдем ответ вместе и освободимся от этой тяжести на душе. 
         Мы не всегда понимаем то, что чувствуем и тем более не всегда ясно, что стало причиной этих ощущений. 
         Давайте найдем ответ вместе и освободимся от этой тяжести на душе`}
           status = { 'Filled' }
           photo = { 'img/roles/expert.jpg' }

         />

         <PublicationCard

           title = 'Как преодолеть тоску, когда не знаешь, в чем ее причина?'
           description = {`Мы не всегда понимаем то, что чувствуем и тем более не всегда ясно, 
         что стало причиной этих ощущений. Давайте найдем ответ вместе и освободимся от этой тяжести на душе. 
         Мы не всегда понимаем то, что чувствуем и тем более не всегда ясно, что стало причиной этих ощущений. 
         Давайте найдем ответ вместе и освободимся от этой тяжести на душе`}
           status = { 'Filled' }
           photo = { 'img/roles/expert.jpg' }

         />

       </div>

     )

    }

  }

  return (

    <div className = {`${ s.publicationsWrapper }`}>

      { publications.categories.map( (category, index) => {

        return (

          <AccordionParent

            key = { category.id }
            category = { category }
            index = { index }
            isDelete = { false }
            content = { () => content( index ) }
            title = { category.title }
            description = { category.description }
            type = "Направление"
            addNewServices = { false }
            status = { category.documentStatus }
            isBottomContent = { false }

          />

        )

        })

      }

    </div>

  )

}

export default Publications