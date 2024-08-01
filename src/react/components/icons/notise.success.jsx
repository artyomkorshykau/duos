import * as React from "react"
import { memo } from "react"
const SvgComponent = ({fill = 'white', width = 19, height = 19, stroke, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill={fill}
    {...rest}
  >
    <rect width={width} height={height} x={0.5} y={0.5} stroke="#E1EBF9" rx={9.5} />

    <g clipPath="url(#a)">
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeWidth={1.7}
        d="m6 10 3 3 5-6"
      />
    </g>

    <defs>
      <clipPath id="a">
        <rect width={16} height={16} x={2} y={2} fill="#fff" rx={4} />
      </clipPath>
    </defs>
  </svg>
)
const NotiseSuccess = memo(SvgComponent);
export default NotiseSuccess;
