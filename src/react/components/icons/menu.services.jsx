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
      d="M13.402 23.3a2.1 2.1 0 1 1 4.2 0v9.8a2.1 2.1 0 0 1-4.2 0v-9.8Z"
    />
    <path
      fill="#7C92A7"
      d="M14.797 25.187a1.773 1.773 0 0 1 1.773-3.07l8.679 5.01a1.773 1.773 0 0 1-1.774 3.07l-8.678-5.01Z"
    />
    <path
      fill="#7C92A7"
      d="M34.324 25.197a1.824 1.824 0 0 0-1.824-3.16l-8.695 5.02a1.824 1.824 0 1 0 1.824 3.16l8.695-5.02Z"
    />
    <path
      fill="#7C92A7"
      d="M31.602 23.3a2.1 2.1 0 1 1 4.2 0v9.8a2.1 2.1 0 0 1-4.2 0v-9.8Zm-18.666-7.467a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Zm16.332 0a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Z"
    />
  </svg>
)
const Services = memo(SvgComponent)
export default Services
