import { useLanguage } from "@/contexts/LanguageContext";
import { departments } from "@/data/hospitalData";
import DepartmentCard from "@/components/DepartmentCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import LanguageSelector from "@/components/LanguageSelector";

const DepartmentList = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => navigate("/")}
                className="flex items-center space-x-2"
              >
                <Icon name="ArrowLeft" size={20} />
                <span>{t("backToMain")}</span>
              </Button>
              <h1 className="text-2xl font-bold text-slate-800">
                {t("allDepartments")}
              </h1>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((department) => (
            <DepartmentCard
              key={department.id}
              department={department}
              onClick={() => navigate(`/departments/${department.id}`)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default DepartmentList;
