import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { departments } from "@/data/hospitalData";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import LanguageSelector from "@/components/LanguageSelector";

const DepartmentDetail = () => {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const department = departments.find((d) => d.id === id);

  if (!department) {
    return <div>Отделение не найдено</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => navigate("/departments")}
                className="flex items-center space-x-2"
              >
                <Icon name="ArrowLeft" size={20} />
                <span>Назад</span>
              </Button>
              <div className="flex items-center space-x-3">
                <Icon
                  name={department.icon as any}
                  size={32}
                  className="text-blue-600"
                />
                <h1 className="text-2xl font-bold text-slate-800">
                  {department.name[language]}
                </h1>
              </div>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-4 text-slate-800">
                Контактная информация
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="User" size={20} className="text-blue-600" />
                  <div>
                    <span className="text-sm text-slate-600">{t("head")}:</span>
                    <p className="font-medium">{department.head[language]}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-blue-600" />
                  <div>
                    <span className="text-sm text-slate-600">Телефон:</span>
                    <p className="font-medium">{department.contact.phone}</p>
                    <p className="text-sm text-slate-500">
                      доб. {department.contact.extension}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-blue-600" />
                  <div>
                    <span className="text-sm text-slate-600">Email:</span>
                    <p className="font-medium">{department.contact.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-4 text-slate-800">
                Расписание работы
              </h2>
              <div className="flex items-center space-x-3">
                <Icon name="Clock" size={20} className="text-blue-600" />
                <p className="text-lg">{department.schedule[language]}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-4 text-slate-800">
                Расположение
              </h2>
              <div className="flex items-start space-x-3">
                <Icon name="MapPin" size={20} className="text-blue-600 mt-1" />
                <p className="text-lg">{department.location[language]}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-4 text-slate-800">
                Услуги отделения
              </h2>
              <ul className="space-y-2">
                {department.services[language].map((service, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DepartmentDetail;
