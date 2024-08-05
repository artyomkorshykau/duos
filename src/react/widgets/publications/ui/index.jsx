"use client"

import AccordionParent from "@/react/widgets/accordion.parent";
import s from './publications.module.scss'
import { usePublications } from "@/react/widgets/publications/model";

const Publications = () => {

  const {globalState, content} = usePublications()

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