import cssIf from "@/scripts/helpers/css.if";
import WhiteBox from "@/react/components/containers/whitebox";
import CloseInCircle from "@/react/components/icons/close.in.circle";
import s from "./popup.module.scss";

const Popup = ({
  
  children,
  boxClassName = "",
  bodyClassName = "",
  isOpened = false,
  openPopup = false,
  closePopup = false

}) => {

  return (

    <div className = {`
      
      items-center justify-center fixed
      ${ s.popup__container } ${ cssIf( isOpened, s['popup__container--opened']) } ${ boxClassName }
    
    `}>

      <WhiteBox

        className = {

          `absolute flex flex-column justify-center
          ${ s.popup } ${ bodyClassName }

        `}

      >

        <div className = {`flex items-center justify-end ${ s.popup__close_icon__container }`}>

          <CloseInCircle className = {`${ s.popup__close_icon } pointer`}/>

        </div>

        { children }

      </WhiteBox>

    </div>

  );

}

export default Popup;