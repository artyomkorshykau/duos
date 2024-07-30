import * as React from "react"
import { memo } from "react"
const SvgComponent = ({ fill, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill={ fill }
    {...rest}
  >
    <path
      stroke="#18009E"
      strokeLinecap="round"
      strokeWidth={1.7}
      d="m4 12 8-8m0 8L4 4"
    />
  </svg>
)
const Cross = memo(SvgComponent)
export default Cross
