import React from "react";

function ProgressCircle({
  value,
  max,
  size,
}: {
  value: number;
  max: number;
  size: number;
}) {
  const radius = (size - 10) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / max) * circumference;
  const percentage = (value / max) * 100;

  return (
    <svg width={size} height={size}>
      <circle
        stroke="#B79EEC"
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        strokeWidth="4"
      />
      <circle
        stroke="#F9D575"
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        strokeWidth="4"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
      />
      <text
        x="50%"
        y="50%"
        fill="white"
        textAnchor="middle"
        strokeWidth="1px"
        dy=".3em"
        fontSize="13px"
      >
        {`${Math.round(percentage)}%`}
      </text>
    </svg>
  );
}

export default ProgressCircle;
