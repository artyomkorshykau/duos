'use client'

import { useEffect, useMemo, useRef, useState } from "react";
import cssIf from "@/scripts/helpers/css.if";

import Option from "./option";

import ArrowSelect from "@/react/components/icons/arrow_select";
import CloseIcon from "@/react/components/icons/close";

import s from "./select.module.scss";
import useGlobal from "@/store";

const Select = ( props ) => {

  const {

    className,
    placeholder,
    placeholderIcon,
    options,
    value,
    onChange,
    children,
    error,
    onClick,
    ...selectParams

  } = props;

  const [ selectOption, setSelectOption ] = useState( value );
  const [ globalState, globalActions ] = useGlobal();

  const chooseOption = ( value ) => {

    setSelectOption( value );
    onChange?.( value );

  };

  const [ isOpen, setIsOpen ] = useState( false );
  const [ search, setSearch ] = useState( '' );

  const containerRef = useRef( null );

  const inputRef = useRef( null );

  const filteredOptions = useMemo( () => {

    return options.filter( item => item.label.toLowerCase().includes( search.toLowerCase() ) );

  }, [ search ] );

  const clearSearch = ( e ) => {

    e.stopPropagation();
    setSearch( '' );

  };

  useEffect(() => {

    const handleClickOutside = ( event ) => {

      if ( containerRef.current && !containerRef.current.contains( event.target ) ) {

        setIsOpen(false);

      }

    };

    if ( isOpen ) {

      document.addEventListener( 'mousedown', handleClickOutside );

    } else {

      document.removeEventListener( 'mousedown', handleClickOutside );

    }

    return () => {

      document.removeEventListener('mousedown', handleClickOutside);

    };
  }, [ isOpen ]);

  useEffect( () => {

    if ( isOpen && inputRef.current ) {

      inputRef.current.focus();

    }

  }, [ isOpen, search, inputRef ] );

  return (

    <div className = {`${ s.wrapper }`} ref = { containerRef }>

      <div
        className = {`${ s.wrapper__container } ${ cssIf( isOpen, s.open ) } ${ cssIf( !!selectOption, s.active ) } ${ className }`}
        onClick = { () => {

          if( globalState.tax.taxAgree ) {

            setIsOpen( prev => !prev )

          } else {

            globalActions.tax.showTaxInfoPopup('show')

          }

        } }
      >

        <div className = {`${ s.wrapper__container__placeholder_container }`}>

          <div className={`${s.wrapper__container__placeholder_container__placeholder}`}>

            { placeholderIcon && (

              <div

                className = {`${ s.wrapper__container__placeholder_container__placeholder__icon }`}
                onClick = { (e) => {

                  e.stopPropagation()
                  onClick()

                }}

              >

                { placeholderIcon }

              </div>

            ) }

            <div className={`${ s.wrapper__container__placeholder_container__placeholder__titlecontainer }`}>

              <span className={`
                ${ s.wrapper__container__placeholder_container__placeholder__titlecontainer__placeholder }
                ${ cssIf( isOpen, s.placeholderactive ) }
                ${ cssIf( selectOption, s.placeholderactive ) }
              `}>

                { placeholder }

              </span>

              { selectOption ? (

                <div className = {`
                  ${ s.wrapper__container__placeholder_container__placeholder__titlecontainer__item }
                  ${ cssIf( selectOption, s.itemactive )}
                `}>

                  { options.find( option => option.value === selectOption ).label }

                </div>

              ) : (

                <div
                  className = {`
                    ${ s.wrapper__container__placeholder_container__placeholder__titlecontainer__searchinputcontainer }
                    ${ cssIf( isOpen, s.searchactive ) }
                  `}
                >

                  <input

                      className = {`${ s.wrapper__container__placeholder_container__placeholder__titlecontainer__searchinputcontainer__searchinput }`}
                      ref = { inputRef }
                      placeholder = 'Найти'
                      value = { search }
                      onChange = { ( e ) => setSearch( e.target.value ) }
                      onClick = { ( e ) => e.stopPropagation() }

                  />

                  { search && (

                    <button
                      className = {`${ s.wrapper__container__placeholder_container__placeholder__titlecontainer__searchinputcontainer__closebtn }`}
                      onClick = { clearSearch }
                    >

                      <CloseIcon/>

                    </button>

                  ) }

                </div>

              ) }

            </div>

          </div>

          <div
              className = {`
              ${ s.wrapper__container__placeholder_container__icon_container }
              ${ cssIf( isOpen, s.icon_container_open ) }
            `}
          >

            <ArrowSelect direction = 'down' />

          </div>

        </div>

        { isOpen &&(

          <div className = {`${ s.wrapper__container__itemscontainer }`}>

            { filteredOptions.map( option => (

              // <div
              //   key = { option.value }
              //   className = {`${ s.wrapper__container__itemscontainer__option }`}
              //   onClick = { () => chooseOption(option.value) }
              // >
              //
              //   { option.label }
              //
              // </div>
              <Option
                key = { option.value }
                option = { option }
                onClick = { () => chooseOption( option.value ) }
              />

            ) ) }

              <div className = {`${ s.wrapper__container__itemscontainer__strip }`}/>

            </div>

        ) }

        { !!error && <p> { error } </p> }

      </div>

    </div>

  )

};

export default Select;