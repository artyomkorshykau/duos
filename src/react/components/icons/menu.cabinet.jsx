import * as React from "react"
import { memo } from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={49}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="#7C92A7"
      fillRule="evenodd"
      d="M26.645 14.874a2.8 2.8 0 0 0-3.688 0l-8.434 7.38a1.4 1.4 0 1 1-1.844-2.108l8.435-7.38a5.6 5.6 0 0 1 7.375 0l8.434 7.38a1.4 1.4 0 1 1-1.844 2.108l-8.434-7.38ZM16.401 24a1.4 1.4 0 0 1 1.4 1.4v7a1.4 1.4 0 0 0 1.4 1.4h2.8v-7.4a1 1 0 0 1 1-1h3.6a1 1 0 0 1 1 1v7.4h2.8a1.4 1.4 0 0 0 1.4-1.4v-7a1.4 1.4 0 1 1 2.8 0v7a4.2 4.2 0 0 1-4.2 4.2h-11.2a4.2 4.2 0 0 1-4.2-4.2v-7a1.4 1.4 0 0 1 1.4-1.4Z"
      clipRule="evenodd"
    />
  </svg>
)
const Cabinet = memo(SvgComponent)
export default Cabinet
