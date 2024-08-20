import * as React from "react"
import { memo } from "react"
const SvgComponent = ({ stroke = '#7C92A7', ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    viewBox={'0 0 10 10'}
    fill="none"
    {...rest}
  >
    <path
      stroke={ stroke }
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.5 9h-.832a3 3 0 0 1-3-3V1.5m0 0L7.5 3.857M4.668 1.5 1.5 3.857"
    />
  </svg>
)
const Resends = memo(SvgComponent)
export default Resends
