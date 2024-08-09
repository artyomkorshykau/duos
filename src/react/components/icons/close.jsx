import { memo } from "react";

const SvgComponent = ( { className, fill = "none", stroke = "#7C92A7", ...rest } ) => {

  return (

    <svg width="16" height="17" viewBox="0 0 16 17" fill = { fill } xmlns="http://www.w3.org/2000/svg">

      <path d = "M4 12.5L11.9999 4.50015" stroke = { stroke } strokeWidth = "1.7" strokeLinecap = "round"/>
      <path d = "M12 12.5L4.00015 4.50015" stroke = { stroke } strokeWidth = "1.7" strokeLinecap = "round"/>

    </svg>

  )
};

const CloseIcon = memo( SvgComponent );
export default CloseIcon;