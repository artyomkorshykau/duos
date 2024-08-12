import { memo } from "react";

const SvgComponent = ( { className, fill, stroke, direction, ...rest } ) => {

  return (

    <svg

      width = "12"
      height = "7"
      viewBox = "0 0 12 7"
      fill = "transparent"
      xmlns = "http://www.w3.org/2000/svg"
      className = { className }

    >

      { direction === "down" && (

        <path fillRule = "evenodd" clipRule = "evenodd"
          d = "M0.255343 0.247121C-0.0851143 0.576615 -0.0851143 1.11083 0.255343 1.44032L6 7L11.7447 1.44032C12.0851 1.11083 12.0851 0.576615 11.7447 0.247121C11.4042 -0.082373 10.8522 -0.0823731 10.5118 0.247121L6 4.61359L1.48825 0.247121C1.14779 -0.0823735 0.5958 -0.0823735 0.255343 0.247121Z"
          fill = { fill }
        />

      ) }

      { direction === "up" && (

        <path fillRule = "evenodd" clipRule = "evenodd"
          d="M11.7447 6.75288C12.0851 6.42339 12.0851 5.88917 11.7447 5.55968L6 -7.15493e-08L0.255342 5.55968C-0.0851154 5.88917 -0.0851154 6.42339 0.255342 6.75288C0.595798 7.08237 1.14779 7.08237 1.48825 6.75288L6 2.38641L10.5118 6.75288C10.8522 7.08237 11.4042 7.08237 11.7447 6.75288Z"
          fill = { fill }
        />

      ) }

    </svg>

  )
};

const ArrowSelect = memo( SvgComponent );
export default ArrowSelect;