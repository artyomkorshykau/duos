"use client"

import AccordionParent from "@/react/widgets/accordion.parent";
import s from './publications.module.scss'
import PublicationsContent from "@/react/widgets/publications/ui/publications";
import AboutYourselfContent
  from "@/react/widgets/publications/ui/about.yourself";
import useGlobal from "@/store";

const Publications = () => {

  const [ globalState ] = useGlobal()

  const content = (index) => {

    if( index === 0 ) return <AboutYourselfContent index = { index }/>
    if( index === 1 ) return <PublicationsContent/>

  }

  return (

    <div className = {`${ s.publicationsWrapper }`}>

      { globalState.publications.categories.map( (category, index) => {

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