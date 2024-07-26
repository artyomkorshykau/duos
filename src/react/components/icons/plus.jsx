import { memo } from 'react';

const SvgComponent = ({ fill, ...rest }) => (

  <svg 
    xmlns="http://www.w3.org/2000/svg"
    width="17" 
    height="16" 
    fill="none"
    {...rest}
    >

    <path d="M3.5 7C2.94772 7 2.5 7.44772 2.5 8C2.5 8.55228 2.94772 9 3.5 9H13.5C14.0523 9 14.5 8.55228 14.5 8C14.5 7.44772 14.0523 7 13.5 7H3.5Z" fill={fill}/>
      
    <path d="M9.5 3C9.5 2.44772 9.05228 2 8.5 2C7.94772 2 7.5 2.44772 7.5 3L7.5 13C7.5 13.5523 7.94771 14 8.5 14C9.05228 14 9.5 13.5523 9.5 13L9.5 3Z" fill={fill}/>

  </svg>
);
const Plus = memo(SvgComponent);
export default Plus;
