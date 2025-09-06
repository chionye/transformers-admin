/** @format */

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface MButtonProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost" | "link" | "primary";
  size?: "default" | "sm" | "lg" | "icon";
  fullWidth?: boolean;
  className?: string;
  isLoading?: boolean;
  loadingText?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const MButton = ({
  children,
  variant = "primary",
  size = "default",
  fullWidth = true,
  className,
  isLoading = false,
  loadingText = "Loading...",
  disabled,
  onClick,
  ...props
}: MButtonProps) => {
  const baseStyles = "font-dm-sans text-center";
  const variantStyles = {
    default: "",
    primary: "bg-[#198841] text-white hover:bg-[#147235]",
    outline:
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  };

  const sizeStyles = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  };

  return (
    <Button
      variant={variant === "primary" ? "default" : variant}
      size={size}
      className={cn(
        baseStyles,
        variant !== "primary" ? variantStyles[variant] : variantStyles.primary,
        sizeStyles[size],
        fullWidth && "w-full",
        className
      )}
      disabled={isLoading || disabled}
      onClick={onClick}
      {...props}>
      {isLoading ? (
        <div className='flex items-center justify-center gap-2'>
          <Loader2 className='h-4 w-4 animate-spin' />
          {loadingText}
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export { MButton };
export type { MButtonProps };
