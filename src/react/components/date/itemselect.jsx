import s from "./itemselect.module.scss";
import CloseIcon from "@/react/components/icons/close";
import ArrowSelect from "@/react/components/icons/arrow_select";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import cssIf from "@/scripts/helpers/css.if";

const ItemSelect = ( props) => {
  const {

    value,
    isOpen,
    onOpen,
    onClose,
    onChange,
    items,
    containerWidth,
    isMonths,

  } = props;

  const [ itemWidth, setItemWidth ] = useState( 0 );

  const btnRef = useRef( null );
  const contentRef = useRef( null );

  const onToggle = useCallback( () => {

    if ( isOpen ) {

      onClose()

    } else {

      onOpen();

    }

  }, [ isOpen ])

  const onChangeHandler = ( value ) => {

    onChange?.( value );
    onClose();

  };

  useLayoutEffect( () => {

    if ( btnRef.current ) {

      setItemWidth( btnRef.current.offsetWidth );

    }

  }, [] );

  useEffect( () => {

    if ( contentRef.current && !isMonths ) {

      const container = contentRef.current;
      container.scrollTop = container.scrollHeight;

    }

  }, [ isOpen, isMonths ]);

  return (

    <div

      className = {`${ s.itemselect_wrapper }`} style = { { width: itemWidth } }

    >

      <div className = {`${ s.itemselect_wrapper__container } ${ cssIf( isOpen, s.open ) }`}>

        <button

          className = {`${ s.itemselect_wrapper__container__btn }`}
          onClick = { onToggle }
          type = "button"
          ref = { btnRef }

        >

          { value }

          { isOpen ? (

            <CloseIcon />

          ) : (

            <ArrowSelect direction = "down" fill = "#7C92A7" />

          )}

        </button>

        { isOpen && (

          <div

            ref = { contentRef }
            className = {`${ s.itemselect_wrapper__container__content_container } ${ cssIf( isMonths, s.months ) }`}
            style = { { "--containerWidth": `${ containerWidth }px` } }

          >

            { items.map( ( item, index ) => (

              <button

                key = { index }
                className = {`${ s.itemselect_wrapper__container__content_container__item }`}
                onClick = { () => onChangeHandler( isMonths ? index : item ) }

              >

                { item }

              </button>

            ) ) }

          </div>

        ) }

      </div>


    </div>

  )

};

export default ItemSelect;