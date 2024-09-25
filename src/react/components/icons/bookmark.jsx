import * as React from "react"
import { memo } from "react"
const SvgComponent = ({ fill = '#7C92A7', ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...rest}
  >
    <g clipPath="url(#a)">
      <path
        fill={fill}
        fillRule="evenodd"
        d="M3.5.5h10a1 1 0 0 1 1 1v13.312a1 1 0 0 1-1.48.877l-4.04-2.212a1 1 0 0 0-.96 0L3.98 15.69a1 1 0 0 1-1.48-.877V1.5a1 1 0 0 1 1-1ZM5 2h7a1 1 0 0 1 1 1v11l-4.5-2.714L4 14V3a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5.5h16v16H.5z" />
      </clipPath>
    </defs>
  </svg>
)
const Bookmark = memo(SvgComponent)
export default Bookmark
