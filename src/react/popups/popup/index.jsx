import cssIf from "@/scripts/helpers/css.if";
import WhiteBox from "@/react/components/containers/whitebox";
import CloseInCircle from "@/react/components/icons/close.in.circle";
import s from "./popup.module.scss";

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
  contentOnly = false

}) => {

  return (

      <div className = {`
        
        flex items-center justify-center fixed ${ s.popup__container }
        ${ cssIf( isOpened, s['popup__container--opened']) } ${ boxClassName }
      
      `}>

        { !contentOnly ?

            <WhiteBox

              className = {

                `absolute flex flex-column justify-center text-center
                ${ s.popup } ${ bodyClassName }

              `}

            >

              <div className = {`flex items-center justify-end ${ s.popup__close_icon__container }`}>

                <CloseInCircle
                
                  onClick = { () => closePopup() }
                  className = {`${ s.popup__close_icon } pointer`}

                />

              </div>

              <p className = {`font-bold text-24 ${ s.popup__title }`}>{`${ title }`}</p>
              <p className = {`font-bold text-24 ${ s.popup__title_bottom }`}>{`${ titlebottom }`}</p>
              <p className = {`font-semibold text-13 ${ s.popup__subtitle } ${ subtitleMargin && s['popup__subtitle--margined'] }`}>{ subtitle }</p>

              { children }

            </WhiteBox>

          :

          content

        }

      </div>

  );

}

export default Popup;