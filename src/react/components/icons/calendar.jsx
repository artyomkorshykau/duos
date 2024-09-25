import * as React from 'react'
import { memo } from 'react'

const SvgComponent = ( { className, fill= "#7C92A7", ...rest } ) => (
  <svg
    className={className}
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >

    <rect x="1.33203" y="3" width="14" height="2" rx="1" fill = { fill }/>
    <rect x="4.33203" y="1" width="2" height="4" rx="1" fill = { fill }/>
    <path fillRule="evenodd" clipRule="evenodd"
      d="M2.33203 6C1.77975 6 1.33203 6.44772 1.33203 7V12C1.33203 13.1046 2.22746 14 3.33203 14H13.332C14.4366 14 15.332 13.1046 15.332 12V7C15.332 6.44772 14.8843 6 14.332 6H2.33203ZM5.33203 9C4.77975 9 4.33203 9.44772 4.33203 10C4.33203 10.5523 4.77975 11 5.33203 11C5.88432 11 6.33203 10.5523 6.33203 10C6.33203 9.44772 5.88432 9 5.33203 9ZM8.33203 9C7.77975 9 7.33203 9.44772 7.33203 10C7.33203 10.5523 7.77975 11 8.33203 11C8.88432 11 9.33203 10.5523 9.33203 10C9.33203 9.44772 8.88432 9 8.33203 9ZM10.332 10C10.332 9.44772 10.7797 9 11.332 9C11.8843 9 12.332 9.44772 12.332 10C12.332 10.5523 11.8843 11 11.332 11C10.7797 11 10.332 10.5523 10.332 10Z"
      fill = { fill }/>
    <rect x="10.332" y="1" width="2" height="4" rx="1" fill = { fill }/>

    </svg>
)
const CalendarIcon = memo(SvgComponent)
export default CalendarIcon
