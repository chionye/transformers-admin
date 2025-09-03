/** @format */

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type DropdownItem = {
  type?: "item" | "separator" | "group" | "submenu";
  label?: string;
  icon?: React.ReactNode;
  shortcut?: string;
  disabled?: boolean;
  items?: DropdownItem[];
  onSelect?: () => void;
};

type CustomDropdownProps = {
  triggerLabel?: string | React.ReactNode;
  triggerVariant?: any;
  triggerClassName?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  align?: "start" | "center" | "end";
  width?: number | string;
  items: DropdownItem[];
  className?: string;
};

export function CustomDropdown({
  triggerLabel = "Open",
  triggerVariant = "outline",
  triggerClassName = "",
  icon,
  iconPosition = "left",
  align = "start",
  width = 200,
  items,
  className = "",
}: CustomDropdownProps) {
  const renderItem = (item: DropdownItem, index: number) => {
    switch (item.type) {
      case "separator":
        return <DropdownMenuSeparator key={`separator-${index}`} />;
      case "group":
        return (
          <DropdownMenuGroup key={`group-${index}`}>
            {item.items?.map((subItem, subIndex) =>
              renderItem(subItem, subIndex)
            )}
          </DropdownMenuGroup>
        );
      case "submenu":
        return (
          <DropdownMenuSub key={`submenu-${index}`}>
            <DropdownMenuSubTrigger className='flex items-center gap-2'>
              {item.icon && <span>{item.icon}</span>}
              {item.label}
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {item.items?.map((subItem, subIndex) =>
                  renderItem(subItem, subIndex)
                )}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        );
      default:
        return (
          <DropdownMenuItem
            key={`item-${index}`}
            onSelect={item.onSelect}
            disabled={item.disabled}
            className='flex items-center gap-2'>
            {item.icon && <span>{item.icon}</span>}
            {item.label}
            {item.shortcut && (
              <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
            )}
          </DropdownMenuItem>
        );
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={triggerVariant}
          className={`flex items-center gap-2 ${triggerClassName}`}>
          {icon && iconPosition === "left" && icon}
          {triggerLabel && (
            <span className='lg:block hidden'>{triggerLabel}</span>
          )}
          {icon && iconPosition === "right" && icon}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={className}
        style={{ width: typeof width === "number" ? `${width}px` : width }}
        align={align}>
        {items.map((item, index) => renderItem(item, index))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
