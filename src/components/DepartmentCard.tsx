import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Department } from "@/data/hospitalData";
import { useLanguage } from "@/contexts/LanguageContext";

interface DepartmentCardProps {
  department: Department;
  onClick: () => void;
}

const DepartmentCard = ({ department, onClick }: DepartmentCardProps) => {
  const { language, t } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Icon
            name={department.icon as any}
            size={24}
            className="text-blue-600"
          />
          <h3 className="text-lg font-semibold text-slate-800">
            {department.name[language]}
          </h3>
        </div>
        <Button variant="outline" size="sm" onClick={onClick}>
          <Icon name="Info" size={16} className="mr-1" />
          Подробнее
        </Button>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex items-center space-x-2">
          <Icon name="User" size={16} className="text-slate-500" />
          <span className="text-slate-600">{t("head")}:</span>
          <span className="text-slate-800">{department.head[language]}</span>
        </div>

        <div className="flex items-center space-x-2">
          <Icon name="Phone" size={16} className="text-slate-500" />
          <span className="text-slate-600">{t("contact")}:</span>
          <span className="text-slate-800">{department.contact.phone}</span>
        </div>

        <div className="flex items-center space-x-2">
          <Icon name="Clock" size={16} className="text-slate-500" />
          <span className="text-slate-600">{t("schedule")}:</span>
          <span className="text-slate-800">
            {department.schedule[language]}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <Icon name="MapPin" size={16} className="text-slate-500" />
          <span className="text-slate-600">{t("location")}:</span>
          <span className="text-slate-800">
            {department.location[language]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DepartmentCard;
