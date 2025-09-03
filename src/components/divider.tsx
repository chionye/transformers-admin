/** @format */

import React from "react";

interface DividerProps {
  color?:
    | "gray"
    | "red"
    | "blue"
    | "green"
    | "yellow"
    | "purple"
    | "pink"
    | "indigo";
  thickness?: "thin" | "normal" | "thick";
  direction?: "horizontal" | "vertical";
  length?: "quarter" | "half" | "full";
}

export const Divider: React.FC<DividerProps> = ({
  color = "gray",
  thickness = "normal",
  direction = "horizontal",
  length = "half",
}) => {
  const isHorizontal = direction === "horizontal";

  // Predefined color classes
  const colorClasses = {
    gray: "bg-gray-300",
    red: "bg-red-300",
    blue: "bg-blue-300",
    green: "bg-green-300",
    yellow: "bg-yellow-300",
    purple: "bg-purple-300",
    pink: "bg-pink-300",
    indigo: "bg-indigo-300",
  };

  // Thickness classes
  const thicknessClasses = {
    thin: isHorizontal ? "h-px" : "w-px",
    normal: isHorizontal ? "h-0.5" : "w-0.5",
    thick: isHorizontal ? "h-1" : "w-1",
  };

  // Length classes
  const lengthClasses = {
    quarter: isHorizontal ? "w-1/4" : "h-1/4",
    half: isHorizontal ? "w-1/2" : "h-1/2",
    full: isHorizontal ? "w-full" : "h-full",
  };

  const baseClasses = isHorizontal
    ? `${colorClasses[color]} ${thicknessClasses[thickness]} ${lengthClasses[length]}`
    : `${colorClasses[color]} ${thicknessClasses[thickness]} ${lengthClasses[length]}`;

  return <div className={baseClasses} />;
};
