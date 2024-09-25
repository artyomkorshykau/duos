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
    <g fill="#18009E" clipPath="url(#a)">
      <path
        fillRule="evenodd"
        d="M.922 4A3.08 3.08 0 0 1 4.002.92h8A3.08 3.08 0 0 1 15.082 4v8a3.08 3.08 0 0 1-3.08 3.08h-8A3.08 3.08 0 0 1 .922 12V4Zm3.08-1.72c-.95 0-1.72.77-1.72 1.72v8c0 .95.77 1.72 1.72 1.72h8c.95 0 1.72-.77 1.72-1.72V4c0-.95-.77-1.72-1.72-1.72h-8Z"
        clipRule="evenodd"
      />
      <path
        d="M4 10.8c0-.663.597-1.2 1.333-1.2h5.334c.736 0 1.333.537 1.333 1.2 0 .662-.597 1.2-1.333 1.2H5.333C4.597 12 4 11.462 4 10.8Zm0-4c0-.663.597-1.2 1.333-1.2h1.334C7.403 5.6 8 6.137 8 6.8S7.403 8 6.667 8H5.333C4.597 8 4 7.462 4 6.8Z"/>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z"/>
      </clipPath>
    </defs>
  </svg>
)
const Publications = memo( SvgComponent )
export default Publications
