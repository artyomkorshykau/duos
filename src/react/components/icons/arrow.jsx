import * as React from 'react';
import { memo } from 'react';

const SvgComponent = ({ fill, stroke, direction, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={12}
    fill={fill}
    {...rest}
  >
    {direction === 'right' && <path
      fillRule="evenodd"
      d="M.247.255a.825.825 0 0 1 1.193 0L7 6l-5.56 5.745a.825.825 0 0 1-1.193 0 .892.892 0 0 1 0-1.233L4.614 6 .247 1.488a.892.892 0 0 1 0-1.233Z"
      clipRule="evenodd"
    />}

    {direction === 'left' && <path
      fillRule="evenodd"
      d="M6.753.255a.825.825 0 0 0-1.193 0L0 6l5.56 5.745a.825.825 0 0 0 1.193 0 .892.892 0 0 0 0-1.233L2.386 6l4.367-4.512a.892.892 0 0 0 0-1.233Z"
      clipRule="evenodd"
    />}

  </svg>
);
const Arrow = memo(SvgComponent);
export default Arrow;
