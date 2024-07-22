import * as React from "react"
import {memo} from "react"

const SvgComponent = ({ fill, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={ 17 }
    height={ 17 }
    fill={ fill }
    { ...rest }
  >
    <path
      fillRule="evenodd"
      d="M8.5 15.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm3.664-8.469a.85.85 0 1 0-1.327-1.062L7.43 10.227 6.1 8.9A.85.85 0 1 0 4.9 10.1l2.672 2.671 4.593-5.741Z"
      clipRule="evenodd"
    />
  </svg>
)
const NotiseSuccessDisabled = memo(SvgComponent)
export default NotiseSuccessDisabled
