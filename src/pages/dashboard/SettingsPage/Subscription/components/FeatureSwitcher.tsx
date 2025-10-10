/** @format */

import { Switch } from "@/components/ui/switch";

interface FeatureSwitcherProps {
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export const FeatureSwitcher = ({
  label,
  checked,
  onCheckedChange,
}: FeatureSwitcherProps) => {
  return (
    <div
      className="flex items-center justify-between w-full py-4 border-b"
      style={{ borderBottomColor: "#E9E9E9" }}
    >
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <Switch checked={checked} onCheckedChange={onCheckedChange} />
    </div>
  );
};
