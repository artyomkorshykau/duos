import * as React from "react"
import { memo } from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={160}
    height={160}
    fill="none"
    {...props}
  >
    <rect width={91} height={125} x={34.5} y={9.5} stroke="#CDDEFF" rx={9.5} />
    <path
      fill="#D1E3F7"
      fillRule="evenodd"
      d="M50 32a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm3.664-8.47a.85.85 0 0 0-1.327-1.061l-3.407 4.258L47.6 25.4A.85.85 0 0 0 46.4 26.6l2.672 2.672 4.593-5.742ZM50 63a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm3.664-8.47a.85.85 0 0 0-1.327-1.061l-3.407 4.258L47.6 56.4A.85.85 0 0 0 46.4 57.6l2.672 2.672 4.593-5.742ZM50 94a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm3.664-8.47a.85.85 0 0 0-1.327-1.061l-3.407 4.258L47.6 87.4A.85.85 0 0 0 46.4 88.6l2.672 2.671 4.593-5.741Z"
      clipRule="evenodd"
    />
    <rect width={57} height={10} x={61} y={20} fill="#D1E3F7" rx={5} />
    <rect width={57} height={10} x={61} y={51} fill="#D1E3F7" rx={5} />
    <rect width={57} height={10} x={61} y={82} fill="#D1E3F7" rx={5} />
    <rect width={47} height={6} x={61} y={32} fill="#EEF6FF" rx={3} />
    <rect width={16} height={14} x={61} y={63} fill="#EEF6FF" rx={7} />
    <rect width={16} height={14} x={80} y={63} fill="#EEF6FF" rx={7} />
    <rect width={16} height={14} x={99} y={63} fill="#EEF6FF" rx={7} />
    <rect width={32} height={6} x={61} y={40} fill="#EEF6FF" rx={3} />
    <rect width={18} height={5} x={61} y={96} fill="#EEF6FF" rx={2.5} />
    <rect width={23} height={5} x={61} y={110} fill="#EEF6FF" rx={2.5} />
    <rect width={29} height={5} x={61} y={103} fill="#EEF6FF" rx={2.5} />
    <circle cx={80} cy={135} r={24} fill="#fff" />
    <rect width={40} height={40} x={60} y={115} fill="url(#a)" rx={20} />
    <rect width={40} height={40} x={60} y={115} fill="url(#b)" rx={20} />
    <path
      fill="url(#c)"
      fillRule="evenodd"
      d="M80.704 115.012a22.01 22.01 0 0 1 1.796 8.738c0 11.294-8.478 20.607-19.417 21.924A19.906 19.906 0 0 1 60 135c0-11.046 8.954-20 20-20 .236 0 .47.004.704.012Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M75.53 144.41c3.765 2.554 5.454 3.701 10.91-1.903-2.456 1.341-4.818 1.322-7.232 1.302-1.385-.011-2.788-.022-4.236.223l.558.378Zm7.983-9.471c0-2.376 1.459-4.294 3.28-4.301 1.82-.007 3.311 2.214 3.311 3.56.008 1.91-.539 1.508-1.374.893-.547-.402-1.217-.895-1.937-.892-.788.003-1.506.733-2.068 1.305-.737.75-1.205 1.226-1.212-.565Zm-6.633-.481c0-2.376-1.459-4.294-3.28-4.301-1.82-.007-3.311 2.214-3.311 3.561-.008 1.909.539 1.507 1.374.892.547-.402 1.217-.895 1.937-.892.788.003 1.506.733 2.068 1.305.737.75 1.205 1.226 1.212-.565Zm8.633-9.658c1.861-.298 3.895-.233 5.808.499.97.371.453 1.468-.576 1.324a32.585 32.585 0 0 0-4.747-.314c-1.15.009-1.62-1.327-.485-1.509Zm-16.992.499c1.914-.732 3.947-.797 5.808-.499 1.136.182.666 1.518-.484 1.509a32.587 32.587 0 0 0-4.748.314c-1.028.144-1.546-.953-.576-1.324Z"
      clipRule="evenodd"
    />
    <defs>
      <radialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-45 217.102 5.074) scale(56.5685)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1E00C8" />
        <stop offset={1} stopColor="#7158FF" />
      </radialGradient>
      <radialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-45 217.102 5.074) scale(56.5685)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#03009A" />
        <stop offset={1} stopColor="#4928FF" />
      </radialGradient>
      <radialGradient
        id="c"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(17.08343 -30.83328 34.45599 19.09062 65.416 145.833)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00ADE4" />
        <stop offset={0.5} stopColor="#2CFFA6" />
        <stop offset={0.925} stopColor="#00FF75" />
      </radialGradient>
    </defs>
  </svg>
)
const FormLogoBegin = memo(SvgComponent)
export default FormLogoBegin
