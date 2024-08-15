import { memo } from "react";

const SvgComponent = ( { className, fill = "#7C92A7", stroke, ...rest } ) => {

    return (

      <svg width = "14" height = "13" viewBox = "0 0 14 13" fill = "none" xmlns = "http://www.w3.org/2000/svg">

        <path fillRule = "evenodd" clipRule = "evenodd"
          d = "M2.31523 13C0.809414 13 -0.156296 11.3988 0.546239 10.0669L5.32306 1.01085C5.65101 0.389114 6.29618 0 6.99911 0C7.70204 0 8.34722 0.389114 8.67517 1.01085L13.452 10.0669C14.1545 11.3988 13.1888 13 11.683 13H2.31523ZM7.99911 4C7.99911 3.44772 7.5514 3 6.99911 3C6.44683 3 5.99911 3.44772 5.99911 4V7C5.99911 7.55228 6.44683 8 6.99911 8C7.5514 8 7.99911 7.55228 7.99911 7V4ZM7.99911 10C7.99911 9.44772 7.5514 9 6.99911 9C6.44683 9 5.99911 9.44772 5.99911 10C5.99911 10.5523 6.44683 11 6.99911 11C7.5514 11 7.99911 10.5523 7.99911 10Z"
          // fill = "#7C92A7"
          fill = { fill }
        />

      </svg>

    )
};

const WarningIcon = memo( SvgComponent );
export default WarningIcon;