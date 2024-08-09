import { useRef, useState, useEffect } from "react";
import AnimateHeight from "react-animate-height";

const AutoHeightLayout = ( props ) => {
  const {

    children,
    className,
    onClick,

  } = props

    const [height, setHeight] = useState( 'auto' );
    const contentDiv = useRef( null );

    useEffect( () => {

      const element = contentDiv.current;

      const resizeObserver = new ResizeObserver( () => {
        setHeight( element.clientHeight );
      } );

      resizeObserver.observe( element );

      return () => resizeObserver.disconnect();
    }, [] );

    return (

      <AnimateHeight
        className = { className }
        height = { height }
        contentClassName = "auto-content"
        contentRef = { contentDiv }
        onClick = { onClick }
        disableDisplayNone
      >

        {children}

      </AnimateHeight>

    );

};

export default AutoHeightLayout;