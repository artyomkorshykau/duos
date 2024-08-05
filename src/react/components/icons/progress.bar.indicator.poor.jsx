import * as React from "react";
import { memo } from "react";

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 28 28"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <mask
      id="circle-mask"
      x={0}
      y={0}
      width={28}
      height={28}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha"
      }}
    >
      <circle cx={14} cy={14} r={14} fill="#fff" />
    </mask>
    <g mask="url(#circle-mask)">
      <mask
        id="a"
        width={28}
        height={28}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance"
        }}
      >
        <path
          fill="#fff"
          d="M14.01.288C5.97.288.308 6.028.308 13.992c0 7.963 5.665 13.702 13.704 13.702 8.038 0 13.703-5.74 13.703-13.704C27.714 6.027 22.05.286 14.011.286"
        />
      </mask>
      <g mask="url(#a)">
        <mask
          id="b"
          width={112}
          height={63}
          x={-48}
          y={-26}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "luminance"
          }}
        >
          <path fill="#fff" d="M63.132 36.218H-47.269v-61.624H63.131v61.624Z" />
        </mask>
        <g mask="url(#b)">
          <mask
            id="c"
            width={160}
            height={151}
            x={-72}
            y={-70}
            maskUnits="userSpaceOnUse"
            style={{
              maskType: "luminance"
            }}
          >
            <path
              fill="#fff"
              d="m-26.037 80.169-45.278-93.724L41.902-69.354 87.18 24.37-26.037 80.17Z"
            />
          </mask>
          <g mask="url(#c)">
            <path
              fill="url(#d)"
              d="M-40.835 143.264-129.66-40.602 56.702-132.45l88.825 183.866-186.362 91.848Z"
            />
          </g>
        </g>
        <mask
          id="e"
          width={112}
          height={63}
          x={-48}
          y={-26}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "luminance"
          }}
        >
          <path fill="#fff" d="M63.132 36.218H-47.269v-61.624H63.131v61.624Z" />
        </mask>
        <g mask="url(#e)">
          <mask
            id="f"
            width={160}
            height={151}
            x={-72}
            y={-70}
            maskUnits="userSpaceOnUse"
            style={{
              maskType: "luminance"
            }}
          >
            <path
              fill="#fff"
              d="m-26.037 80.169-45.278-93.724L41.902-69.354 87.18 24.37-26.037 80.17Z"
            />
          </mask>
          <g mask="url(#f)">
            <path
              fill="url(#g)"
              d="M29.653 34.435H-4.135L-4.405.057h33.787l.271 34.378Z"
            />
          </g>
        </g>
        <mask
          id="h"
          width={28}
          height={28}
          x={-12}
          y={-6}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "luminance"
          }}
        >
          <circle
            cx={13.649}
            cy={13.649}
            r={13.649}
            fill="#fff"
            transform="matrix(1 0 0 -1 -11.633 21.956)"
          />
        </mask>
        <g mask="url(#h)">
          <mask
            id="i"
            width={132}
            height={131}
            x={-73}
            y={-58}
            maskUnits="userSpaceOnUse"
            style={{
              maskType: "luminance"
            }}
          >
            <path
              fill="#fff"
              d="M-24.324 72.897-72.604-4.3 10.23-57.15l48.28 77.197-82.834 52.85Z"
            />
          </mask>
          <g mask="url(#i)">
            <path
              fill="url(#j)"
              d="m-8.603 38.858-8.885-47.726 47.635-9.314 8.885 47.727-47.635 9.313Z"
            />
          </g>
        </g>
      </g>
      <path
        fill="#fff"
        d="M11.925 13.622c0-1.629-.848-2.942-1.909-2.946-1.06-.004-1.929 1.518-1.93 2.44-.008 2.164.866 4.68 1.926 4.685 1.06.004 1.904-2.016 1.913-4.18Zm8.763.277c.228-1.612-.44-3.033-1.503-3.187-1.063-.154-2.147 1.23-2.276 2.144-.31 2.142.215 4.757 1.278 4.91 1.063.155 2.19-1.726 2.5-3.867Zm.545-6.353a7.395 7.395 0 0 0-.711-.316c-1.063-.407-1.426.725-.358 1.119.965.356 1.985-.337 1.069-.803ZM7.5 7.43a7.388 7.388 0 0 1 .728-.272c1.086-.343 1.38.808.29 1.138-.984.297-1.961-.455-1.018-.866ZM19.12 21.852c-3.32-2.84-9.994-2.295-11.07 2.727 1.309-3.926 6.343-3.197 9.801-1.621.932.424 2.047-.44 1.27-1.106Z"
      />
    </g>
    <defs>
      <radialGradient
        id="d"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-26.236 24.16 27.773) scale(63.971 64.3635)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7252F8" />
        <stop offset={0.07} stopColor="#7252F8" />
        <stop offset={0.46} stopColor="#00E7FF" />
        <stop offset={0.52} stopColor="#00E8EE" />
        <stop offset={0.62} stopColor="#00ECC4" />
        <stop offset={0.76} stopColor="#00F280" />
        <stop offset={0.94} stopColor="#00FB24" />
        <stop offset={1} stopColor="#0F0" />
      </radialGradient>
      <radialGradient
        id="g"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-3.29158 -27.33816 61.57191 -7.4134 15.78 27.396)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1E00C8" />
        <stop offset={1} stopColor="#7158FF" />
      </radialGradient>
      <radialGradient
        id="j"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(58.28572 49.14288 -49.35225 58.53403 -24.855 -14.286)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.445} stopColor="#006F10" />
        <stop offset={0.93} stopColor="#00FB24" />
        <stop offset={1} stopColor="#2CFFF2" />
      </radialGradient>
    </defs>
  </svg>
);

const ProgressBarIndicatorPoor = memo(SvgComponent);
export default ProgressBarIndicatorPoor;