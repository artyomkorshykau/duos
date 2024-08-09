import {memo} from "react";

const SvgComponent = ( { className, fill, stroke, direction, ...rest } ) => {

    return (

      <svg width = "12" height = "7" viewBox = "0 0 12 7" fill = { "transparent" } xmlns = "http://www.w3.org/2000/svg">

        { direction === "down" && (

          <path fillRule = "evenodd" clipRule = "evenodd"
            d = "M0.255343 0.247121C-0.0851143 0.576615 -0.0851143 1.11083 0.255343 1.44032L6 7L11.7447 1.44032C12.0851 1.11083 12.0851 0.576615 11.7447 0.247121C11.4042 -0.082373 10.8522 -0.0823731 10.5118 0.247121L6 4.61359L1.48825 0.247121C1.14779 -0.0823735 0.5958 -0.0823735 0.255343 0.247121Z"
            fill = { fill }
          />

        ) }

      </svg>

    )
};

const ArrowSelect = memo( SvgComponent );
export default ArrowSelect;