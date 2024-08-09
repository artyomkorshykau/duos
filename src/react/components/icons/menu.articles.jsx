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
      d="M11.81 17a5.39 5.39 0 0 1 5.39-5.39h14A5.39 5.39 0 0 1 36.59 17v14a5.39 5.39 0 0 1-5.39 5.39h-14A5.39 5.39 0 0 1 11.81 31V17Zm5.39-3.01A3.01 3.01 0 0 0 14.19 17v14a3.01 3.01 0 0 0 3.01 3.01h14A3.01 3.01 0 0 0 34.21 31V17a3.01 3.01 0 0 0-3.01-3.01h-14Z"
      clipRule="evenodd"
    />
    <path
      fill="#7C92A7"
      d="M17.201 28.9c0-1.16 1.045-2.1 2.333-2.1h9.334c1.289 0 2.333.94 2.333 2.1 0 1.16-1.044 2.1-2.333 2.1h-9.333c-1.29 0-2.334-.94-2.334-2.1Zm0-7c0-1.16 1.045-2.1 2.333-2.1h2.334c1.289 0 2.333.94 2.333 2.1 0 1.16-1.044 2.1-2.333 2.1h-2.333c-1.29 0-2.334-.94-2.334-2.1Z"
    />
  </svg>
)
const Articles = memo(SvgComponent)
export default Articles
