const LogoCircle = ({ className }) => (

  <svg className = { className } width="1616" height="944" viewBox="0 0 1616 944" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_8703_22845)">
    <g clip-path="url(#clip0_8703_22845)">
    <path d="M-152 0C-152 -331.371 116.629 -600 448 -600H1168C1499.37 -600 1768 -331.371 1768 0V0C1768 331.371 1499.37 600 1168 600H448C116.629 600 -152 331.371 -152 0V0Z" fill="url(#paint0_radial_8703_22845)"/>
    </g>
    </g>
    <defs>
    <filter id="filter0_d_8703_22845" x="0" y="-24" width="1616" height="968" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feMorphology radius="24" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_8703_22845"/>
    <feOffset dy="160"/>
    <feGaussianBlur stdDeviation="80"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.46 0 0 0 0 1 0 0 0 0.2 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8703_22845"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8703_22845" result="shape"/>
    </filter>
    <radialGradient id="paint0_radial_8703_22845" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(808) rotate(90) scale(600 2200)">
    <stop offset="0.440859" stop-color="#18009E"/>
    <stop offset="1" stop-color="#2000D6"/>
    </radialGradient>
    <clipPath id="clip0_8703_22845">
    <path d="M184 0H1432C1432 331.371 1163.37 600 832 600H784C452.629 600 184 331.371 184 0Z" fill="white"/>
    </clipPath>
    </defs>
  </svg>

)

export default LogoCircle;