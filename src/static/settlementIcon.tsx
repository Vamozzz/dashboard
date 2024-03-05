import React from "react";

interface icon {
  color: string;
}
const SettlementIcon = ({ color }: icon) => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_369_16536)">
      <path
        d="M9.33301 6.16675L3.98967 12.001L9.33301 17.8334"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.167 6.16675L20.5103 12.001L15.167 17.8334"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_369_16536">
        <rect width="25" height="25" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default SettlementIcon;
