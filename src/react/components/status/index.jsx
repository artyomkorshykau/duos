import cssIf from '@/scripts/helpers/css.if'
import s from './status.module.scss'
import { useEffect, useState } from 'react'
import Ellipse from '../icons/ellipse'

const Status = ({

  status

}) => {
  
  

  const [name, setName] = useState();

  useEffect(() => {

    if ( status === "New" ) {
      
      setName( "Новое" )

    } else if ( status === "NotFinished" ) {
      
      setName( "Не закончено" )
      
    } else if ( status === "NotFilled" ) {
      
      setName( "Не заполнено" )
      
    } else if ( status === "Filled" ) {
      
      setName( "Заполнено" )
      
    }
  }, [ status ])

  return (

    <div
    
      className = {`
      
      ${ s.status }
      ${ cssIf( status === "New", s.status__blue ) }
      ${ cssIf( status === "NotFinished", s.status__yellow ) }
      ${ cssIf( status === "NotFilled", s.status__red ) }
      ${ cssIf( status === "Filled", s.status__green ) }`}
      
    >

      <Ellipse />

      <p className = {`${ s.status__name }`}>{ name }</p>

    </div>

  )

}

export default Status;