import * as React from "react"
import { memo } from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="#FA4D42"
      fillRule="evenodd"
      d="M3.315 14.5c-1.506 0-2.471-1.601-1.769-2.933L6.323 2.51a1.895 1.895 0 0 1 3.352 0l4.777 9.056c.703 1.332-.263 2.933-1.769 2.933H3.315ZM9 5.5a1 1 0 0 0-2 0v3a1 1 0 1 0 2 0v-3Zm0 6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
      clipRule="evenodd"
    />
  </svg>
)
const NotiseError = memo(SvgComponent)
export default NotiseError
