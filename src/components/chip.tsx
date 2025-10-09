/** @format */

import { Badge, type BadgeProps } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ChipVariant, StatusType } from "@/types";

type ChipSize = "sm" | "md" | "lg";

interface ChipProps extends Omit<BadgeProps, "variant"> {
  /**
   * The visual style of the chip
   * @default "default"
   */
  variant?: ChipVariant;
  /**
   * Size of the chip
   * @default "md"
   */
  size?: ChipSize;
  /**
   * Custom class name for additional styling
   */
  className?: string;
  /**
   * If true, adds a subtle shadow to the chip
   * @default false
   */
  shadow?: boolean;
  /**
   * If true, makes the chip rounded
   * @default false
   */
  rounded?: boolean;
}

const sizeClasses: Record<ChipSize, string> = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5",
};

const variantClasses: Record<ChipVariant, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/80",
  outline:
    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive/80",
  success:
    "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-800/30 dark:text-green-400",
  warning:
    "bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-800/30 dark:text-amber-400",
};

/**
 * A flexible and reusable Chip component that can be used to display labels, statuses, or tags.
 * Extends the Badge component with additional styling options.
 */
export const Chip = ({
  variant = "default",
  size = "md",
  className,
  shadow = false,
  rounded = false,
  children,
  ...props
}: ChipProps) => {
  return (
    <Badge
      variant={
        variant === "default"
          ? "default"
          : variant === "outline"
          ? "outline"
          : "secondary"
      }
      className={cn(
        "inline-flex items-center transition-colors",
        sizeClasses[size],
        variantClasses[variant],
        shadow && "shadow-sm",
        rounded ? "rounded-full" : "rounded-md",
        className
      )}
      {...props}>
      {children}
    </Badge>
  );
};

/**
 * A specialized Chip for displaying subscription status
 */
export const SubscriptionChip = ({
  status = "inactive",
  size = "md",
  className,
  ...props
}: Omit<ChipProps, "variant"> & {
  /**
   * Subscription status
   * @default "inactive"
   */
  status?: StatusType;
}) => {
  const statusConfig = {
    active: {
      variant: "success" as const,
      label: "Active",
    },
    inactive: {
      variant: "outline" as const,
      label: "Inactive",
    },
    expired: {
      variant: "destructive" as const,
      label: "Expired",
    },
    pending: {
      variant: "warning" as const,
      label: "Pending",
    },
  };

  const { variant, label } = statusConfig[status];

  return (
    <Chip variant={variant} size={size} className={className} {...props}>
      {label}
    </Chip>
  );
};
