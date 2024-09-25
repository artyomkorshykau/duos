import s from '../progress.bar.module.scss'

const Title = ( props ) => {

  const {

    title

  } = props

  return (

    <p className = {`text-26 ${ s.progressBar__title }`}>

      { title }

    </p>

  )

}

export default Title