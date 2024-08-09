'use client'

import cssIf from "@/scripts/helpers/css.if";

import ArrowSelect from "@/react/components/icons/arrow_select";

import s from "./selectfield.module.scss";
import {useEffect, useMemo, useRef, useState} from "react";
import CloseIcon from "@/react/components/icons/close";

const Selectfield = ( props ) => {

  const {

    className,
    placeholder,
    placeholderIcon,
    options,
    value,
    onChange,
    children,
    error,
    ...selectParams

  } = props;

  const [ selectOption, setSelectOption ] = useState( value );

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
        className = {`${ s.wrapper__container } ${ cssIf( isOpen, s.open ) } ${ className }`}
        onClick = { () => setIsOpen( prev => !prev ) }
      >

        <div className = {`${ s.wrapper__container__placeholder_container }`}>

          <div className={`${s.wrapper__container__placeholder_container__placeholder}`}>

            { placeholderIcon && (

              <div className = {`${ s.wrapper__container__placeholder_container__placeholder__icon }`}>

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

            <ArrowSelect direction = 'down' fill = { isOpen ? '#18009E' : '#7C92A7' } />

          </div>

        </div>

        { isOpen && (

          <div className = {`${ s.wrapper__container__itemscontainer }`}>

            { filteredOptions.map( option => (

              <div
                className = {`${ s.wrapper__container__itemscontainer__option }`}
                onClick = { () => chooseOption(option.value) }
              >

                { option.label }

              </div>

            ) ) }

              <div className = {`${ s.wrapper__container__itemscontainer__strip }`}/>

            </div>

        ) }

        { !!error && <p> { error } </p> }

      </div>

    </div>

  )

};

export default Selectfield;