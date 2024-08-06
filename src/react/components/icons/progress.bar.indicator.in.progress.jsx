import * as React from "react";
import { memo } from "react";

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    {...props}
  >
    <defs>
      <clipPath id="clipCircle">
        <circle cx="14" cy="14" r="14" />
      </clipPath>
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
        gradientTransform="matrix(-60.00048 78.57112 -79.05322 -60.36863 24.86 -19.143)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#15009D" />
        <stop offset={0.735} stopColor="#00E8EE" />
      </radialGradient>
      <radialGradient
        id="h"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-3.29158 -27.33816 61.57191 -7.4134 15.78 27.395)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1E00C8" />
        <stop offset={1} stopColor="#7158FF" />
      </radialGradient>
      <radialGradient
        id="k"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(58.28572 49.14288 -49.35225 58.53403 -24.855 -14.286)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.294} stopColor="#006F10" />
        <stop offset={0.541} stopColor="#00FB24" />
        <stop offset={0.695} stopColor="#2CFFF2" />
      </radialGradient>
    </defs>
    <g clipPath="url(#clipCircle)">
      <mask
        id="a"
        width={28}
        height={28}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path
          fill="#fff"
          d="M14.01.287C5.97.287.308 6.028.308 13.992c0 7.964 5.665 13.703 13.704 13.703 8.038 0 13.703-5.74 13.703-13.704C27.714 6.027 22.05.287 14.011.287"
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
            maskType: "luminance",
          }}
        >
          <path fill="#fff" d="M63.132 36.218H-47.269v-61.625H63.131v61.625Z" />
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
              maskType: "luminance",
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
              d="M-40.835 143.264-129.66-40.602l186.362-91.849 88.825 183.866-186.362 91.849Z"
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
            maskType: "luminance",
          }}
        >
          <path fill="#fff" d="M63.132 36.218H-47.269v-61.625H63.131v61.625Z" />
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
              maskType: "luminance",
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
              d="M29.653 34.434H-4.135L-4.405.057h33.787l.271 34.377Z"
            />
            <path
              fill="url(#h)"
              d="M29.653 34.434H-4.135L-4.405.057h33.787l.271 34.377Z"
            />
          </g>
        </g>
        <mask
          id="i"
          width={29}
          height={28}
          x={-11}
          y={-8}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "luminance",
          }}
        >
          <circle
            cx={13.649}
            cy={13.649}
            r={13.649}
            fill="#fff"
            transform="matrix(1 0 0 -1 -10.033 19.556)"
          />
        </mask>
        <g mask="url(#i)">
          <mask
            id="j"
            width={132}
            height={131}
            x={-73}
            y={-58}
            maskUnits="userSpaceOnUse"
            style={{
              maskType: "luminance",
            }}
          >
            <path
              fill="#fff"
              d="M-24.324 72.897-72.604-4.3 10.23-57.15l48.28 77.197-82.834 52.85Z"
            />
          </mask>
          <g mask="url(#j)">
            <path
              fill="url(#k)"
              d="m-8.603 38.858-8.885-47.726 47.635-9.313 8.885 47.726-47.635 9.313Z"
            />
          </g>
        </g>
      </g>
      <path
        fill="#fff"
        d="M12.264 13.622c0-1.628-1-2.942-2.248-2.947-1.247-.005-2.269 1.517-2.269 2.44-.008 2.163 1.022-.005 2.27 0s2.238 2.671 2.247.507Zm4.544.33c0-1.628 1-2.942 2.248-2.947 1.248-.005 2.269 1.517 2.269 2.44.008 2.163-1.021-.005-2.27 0-1.247.004-2.238 2.67-2.247.507ZM21 7.02a7.39 7.39 0 0 0-.771-.103c-1.135-.093-1.165 1.095-.03 1.173 1.026.071 1.81-.88.8-1.07Zm-13.302 0a7.388 7.388 0 0 1 .77-.103c1.135-.093 1.166 1.095.03 1.173-1.026.071-1.81-.88-.8-1.07Zm11.116 12.118c-3.918 4.024-5.001 2.968-7.857 1.045 2.721-.461 5.208.402 7.857-1.045Z"
      />
    </g>
  </svg>
);

const ProgressBarIndicatorInProgress = memo(SvgComponent);
export default ProgressBarIndicatorInProgress;