import React from "react";

import "./style.css";

export default function Loading() {
  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className="spinner"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        strokeLinecap="round"
        r="45"
        strokeWidth="5"
        stroke="#087db8"
        strokeDasharray="70.68583470577035 70.68583470577035"
        transform="rotate(173.446 50 50)"
      />
    </svg>
  );
}
