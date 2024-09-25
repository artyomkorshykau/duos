import s from './switch.module.scss'

const Switch = ( props ) => {

  const {

    toggle,
    setToggle

  } = props

  return (

    <div className = {`${ s.switch } ${ toggle ? s.switch__on : '' }`} onClick = { () => setToggle( !toggle ) }>

      <div className = {`${ s.switch__slider } ${ toggle ? s.switch__slider__on : '' }`}></div>

    </div>

  )

}

export default Switch