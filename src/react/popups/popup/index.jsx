import cssIf from '@/scripts/helpers/css.if'
import WhiteBox from '@/react/components/containers/whitebox'
import CloseInCircle from '@/react/components/icons/close.in.circle'
import s from './popup.module.scss'

const Popup = ({
  
  content,
  children,
  boxClassName = "",
  bodyClassName = "",
  isOpened = false,
  closePopup = () => {},
  title = "",
  titlebottom = "",
  subtitle = "",
  subtitleMargin = false,
  contentOnly = false,
  doubletitle = false,
  boxRef = null,
  background = false,
  closeBackground,
  titleLeft,

}) => {

  return (

    <div className = {`
        
      flex fixed ${ s.popup__container }
      ${ cssIf( isOpened, s['popup__container--opened']) } 
      ${ cssIf( background && isOpened, s['popup__container--opened__background']) } ${ boxClassName }
    
    `}
      onClick = { closeBackground ? () => closePopup() : null }
      ref = { boxRef }
    >

      { !content

        ? <WhiteBox

        className = {

          `absolute flex flex-column justify-center text-center
                ${ s.popup } ${ bodyClassName }

              ` }

      >

        { !contentOnly && <div className = { `flex items-center 
              ${ cssIf( title, 'justify-end' ) } 
              ${ cssIf( titleLeft, 'justify-between' ) } 
              ${ s.popup__close_icon__container } ${ cssIf( doubletitle, s.popup__close_icon__container__doubletitle ) }` }>

          { titleLeft && <p
            className = { `font-bold text-18 ${ s.popup__titleLeft }` }>{ `${ titleLeft }` }</p> }

          <CloseInCircle

            onClick = { () => closePopup() }
            className = { `${ s.popup__close_icon } pointer` }

          />

        </div> }

        { !contentOnly && <>
          <p
            className = { `font-bold text-24 ${ s.popup__title }` }>{ `${ title }` }</p>
          <p
            className = { `font-bold text-24 ${ s.popup__title_bottom }` }>{ `${ titlebottom }` }</p>
          <p className = { `font-semibold text-13 
              ${ s.popup__subtitle } 
              ${ doubletitle && s.popup__subtitle__double }
              ${ subtitleMargin && s[ 'popup__subtitle--margined' ] }` }>{ subtitle }</p>
        </> }

        { children }

      </WhiteBox>

        : content
      }

      </div>

  );

}

export default Popup;