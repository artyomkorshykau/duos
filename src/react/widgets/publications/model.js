import useGlobal from "@/store";
import AboutYourselfContent
  from "@/react/widgets/publications/ui/about.yourself";
import PublicationsContent from "@/react/widgets/publications/ui/publications";
import { useEffect, useState } from "react";

export const usePublications = () => {

  const [ globalState, globalActions ] = useGlobal()
  const { publications } = globalState
  const [ filed, setFiled ] = useState(false)
  const { photos } = publications.categories[0]

  useEffect(() => {

    if ( !!photos && photos.length > 0 ) {

      setFiled( true )

    } else {

      setFiled( false )


    }
  }, [ photos ])

  useEffect( () => {

    if ( filed ) {

      globalActions.publications.toggleDocumentStatus( 0,"Filled" )

    } else {

      globalActions.publications.toggleDocumentStatus( 0,"NotFilled" )
    }

  }, [ filed ] )

  return { globalState }

}