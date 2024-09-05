import * as React from "react"
import { memo } from "react"
const SvgComponent = (props, fill) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    width={17} 
    height={16} 
    fill="none"
    {...props}
  >
    <path d="M14.5 5L8.5 12L6.5 10L3.5 13M14.5 5L10.5 5M14.5 5V9" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M5.23583 2.20467C5.30623 1.93178 5.69377 1.93178 5.76417 2.20467L6.12242 3.59349C6.22163 3.97806 6.52194 4.27837 6.90651 4.37758L8.29533 4.73583C8.56822 4.80623 8.56822 5.19377 8.29533 5.26417L6.90651 5.62242C6.52194 5.72163 6.22163 6.02194 6.12242 6.40651L5.76417 7.79533C5.69377 8.06822 5.30623 8.06822 5.23583 7.79533L4.87758 6.40651C4.77837 6.02194 4.47806 5.72163 4.09349 5.62242L2.70467 5.26417C2.43178 5.19377 2.43178 4.80623 2.70467 4.73583L4.09349 4.37758C4.47806 4.27837 4.77837 3.97806 4.87758 3.59349L5.23583 2.20467Z" fill="white"/>
  </svg>
)
const Promote = memo(SvgComponent)
export default Promote
