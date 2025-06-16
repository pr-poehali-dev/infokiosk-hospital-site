import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { LucideIcon } from "lucide-react";

interface NavigationCardProps {
  title: string;
  description: string;
  iconName: string;
  onClick: () => void;
  className?: string;
}

const NavigationCard = ({
  title,
  description,
  iconName,
  onClick,
  className = "",
}: NavigationCardProps) => {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      className={`h-auto p-6 flex flex-col items-start text-left space-y-3 hover:shadow-lg transition-all duration-200 border-2 hover:border-blue-200 bg-white ${className}`}
    >
      <div className="flex items-center justify-between w-full">
        <Icon name={iconName as any} size={32} className="text-blue-600" />
        <Icon name="ChevronRight" size={20} className="text-slate-400" />
      </div>
      <div className="space-y-1">
        <h3 className="font-semibold text-lg text-slate-800">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
    </Button>
  );
};

export default NavigationCard;
