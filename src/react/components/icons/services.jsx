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
    <path
      fill="#18009E"
      d="M1.602 7.6a1.2 1.2 0 0 1 2.4 0v5.6a1.2 1.2 0 0 1-2.4 0V7.6Z"
    />
    <path
      fill="#18009E"
      d="M2.397 8.678A1.013 1.013 0 0 1 3.41 6.924l4.96 2.863a1.013 1.013 0 1 1-1.014 1.755L2.397 8.678Z"
    />
    <path
      fill="#18009E"
      d="M13.554 8.683a1.042 1.042 0 0 0-1.042-1.805l-4.97 2.869a1.042 1.042 0 1 0 1.043 1.805l4.97-2.869Z"
    />
    <path
      fill="#18009E"
      d="M12 7.6a1.2 1.2 0 0 1 2.4 0v5.6a1.2 1.2 0 0 1-2.4 0V7.6ZM1.332 3.333a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm9.336 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    />
  </svg>
)
const Services = memo( SvgComponent )
export default Services
