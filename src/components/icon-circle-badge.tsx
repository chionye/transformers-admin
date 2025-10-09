/** @format */

import { isValidElement, cloneElement } from "react";

interface IconCircleBadgeProps {
  /**
   * The icon to be displayed inside the circle
   * Can be any valid React node (typically an icon component)
   */
  icon: React.ReactElement<{ color?: string; width?: number | string; height?: number | string }>;
  /**
   * Background color of the circle
   * Can be any valid CSS color value (hex, rgb, rgba, etc.)
   * @default "#f3f4f6" (gray-100)
   */
  bgColor?: string;
  /**
   * Size of the circle in pixels
   * @default 40
   */
  size?: number;
  /**
   * Color of the icon
   * Can be any valid CSS color value
   * @default "#6b7280" (gray-500)
   */
  iconColor?: string;
  /**
   * Additional CSS classes to apply to the circle
   */
  className?: string;
}

/**
 * A reusable circular badge component that displays an icon
 * 
 * @example
 * // Basic usage
 * <IconCircleBadge icon={<Icons.user />} />
 * 
 * @example
 * // Custom size and colors
 * <IconCircleBadge 
 *   icon={<Icons.team />} 
 *   bgColor="#e0f2fe" 
 *   iconColor="#0369a1"
 *   size={48}
 * />
 */
export const IconCircleBadge = ({
  icon,
  bgColor = "#f3f4f6",
  size = 40,
  iconColor = "#6b7280",
  className = "",
}: IconCircleBadgeProps) => {
  return (
    <div
      className={`flex items-center justify-center rounded-full ${className}`}
      style={{
        backgroundColor: bgColor,
        width: `${size}px`,
        height: `${size}px`,
        minWidth: `${size}px`,
        minHeight: `${size}px`,
      }}
      role="img"
      aria-hidden="true"
    >
      {isValidElement(icon)
        ? cloneElement(icon, {
            color: iconColor,
            width: size * 0.5, // Icon size is half of the container
            height: size * 0.5,
            ...icon.props, // Spread existing props to preserve them
          })
        : icon}
    </div>
  );
};

export default IconCircleBadge;
