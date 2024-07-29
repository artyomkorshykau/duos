import { memo } from 'react';

const SvgComponent = ({ ...rest }) => (

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10" 
    height="10" 
    fill="none" 
    {...rest}
  >
    
    <circle cx="5" cy="5" r="5" fill="currentColor" />
    
  </svg>
);
const Ellipse = memo(SvgComponent);
export default Ellipse;
