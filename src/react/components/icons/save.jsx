import * as React from "react"
import { memo } from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M12.004 1.879A3 3 0 0 0 9.882 1H5a3.5 3.5 0 0 0-3.5 3.5v7A3.5 3.5 0 0 0 5 15h7a3.5 3.5 0 0 0 3.5-3.5V6.618a3 3 0 0 0-.879-2.122L12.004 1.88ZM3.5 4a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Zm8.214 4.143a.67.67 0 1 0-.947-.947l-3.185 3.185-.956-.956a.67.67 0 0 0-.947.947l1.43 1.432a.67.67 0 0 0 1.018-.083.677.677 0 0 0 .069-.06l3.518-3.518Z"
      clipRule="evenodd"
    />
  </svg>
)
const Save = memo(SvgComponent)
export default Save
