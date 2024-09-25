const CloseInCircle = ({ className, onClick = () => {} }) => (

  <svg className = { className } onClick = { onClick } width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="0.5" width="40" height="40" rx="20" fill="#F3F7FF"/>
    <g clipPath="url(#clip0_8703_22856)">
    <path d="M16 24.4998L23.9999 16.4999" stroke="#18009E" strokeWidth="1.7" strokeLinecap="round"/>
    <path d="M24 24.4998L16.0001 16.4999" stroke="#18009E" strokeWidth="1.7" strokeLinecap="round"/>
    </g>
    <defs>
    <clipPath id="clip0_8703_22856">
    <rect x="12" y="12.5" width="16" height="16" rx="4" fill="white"/>
    </clipPath>
    </defs>
  </svg>

)

export default CloseInCircle;