import s from '../progress.bar.module.scss'

const Description = ( props ) => {

  const {

    description

  } = props

  return (

    <p className = {`text-14 ${ s.progressBar__description }`}>

      { description }

    </p>

  )

}

export default Description