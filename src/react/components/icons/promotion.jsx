import * as React from 'react'
import { memo } from 'react'

const SvgComponent = ( props ) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={ 16 }
    height={ 16 }
    fill="none"
    { ...props }
  >
    <g clipPath="url(#a)">
      <path
        stroke="#18009E"
        strokeLinecap="round"
        strokeWidth={ 1.5 }
        d="m14 5-6 7-2-2-3 3m11-8h-4m4 0v4"
      />
      <path
        fill="#18009E"
        d="M4.736 2.205c.07-.273.458-.273.528 0l.358 1.388c.1.385.4.685.785.785l1.388.358c.273.07.273.458 0 .528l-1.388.358c-.385.1-.685.4-.785.785l-.358 1.388c-.07.273-.458.273-.528 0l-.358-1.388c-.1-.385-.4-.685-.785-.785l-1.388-.358c-.273-.07-.273-.458 0-.528l1.388-.358c.385-.1.685-.4.785-.785l.358-1.388Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <rect width={ 16 } height={ 16 } fill="#fff" rx={ 4 }/>
      </clipPath>
    </defs>
  </svg>
)
const Promotion = memo( SvgComponent )
export default Promotion
