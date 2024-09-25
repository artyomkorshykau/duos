import * as React from 'react'
import { memo } from 'react'

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox={'0 0 16 16'}
    fill="none"
    {...props}
  >
    <path
      fill="#18009E"
      fillRule="evenodd"
      d="M13.715 2.715a1 1 0 0 1 0 1.415l-1.342 1.342-2.422-2.423 1.342-1.342a1 1 0 0 1 1.414 0l1.008 1.008ZM8.584 4.416l-5.898 5.898a1 1 0 0 0-.27.49l-.288 1.297a1 1 0 0 0 1.194 1.193l1.296-.288a1 1 0 0 0 .49-.27l5.898-5.897-2.422-2.423Z"
      clipRule="evenodd"
    />
  </svg>
)
const Pencil = memo(SvgComponent)
export default Pencil
