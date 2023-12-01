import React from "react";

function ProgressCircle({
  value,
  max,
  size,
  color,
  text,
  strokeWidth = 4,
  fontSize = 13
}: {
  value: number;
  max: number;
  size: number;
  strokeWidth?: number;
  fontSize?: number;
  text?: string;
  color?: string;
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
        strokeWidth={strokeWidth}
      />
      <circle
        stroke="#F9D575"
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
      />
      <text
        x="50%"
        y="50%"
        fill={color ? color : "white"}
        textAnchor="middle"
        strokeWidth="1px"
        dy=".3em"
        fontSize={fontSize}
      >
        {text ? text : `${Math.round(percentage)}%`}
      </text>
    </svg>
  );
}

export default ProgressCircle;
