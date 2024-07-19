import * as React from "react"
import { memo } from "react"
const SvgComponent = ({fill, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    fill={ fill }
    {...rest}
  >
    <path
      fillRule="evenodd"
      d="M8 15.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm1-10a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm0 3a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3Z"
      clipRule="evenodd"
    />
  </svg>
)
const NotiseInfo = memo(SvgComponent)
export default NotiseInfo
