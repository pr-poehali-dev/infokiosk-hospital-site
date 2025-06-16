import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import NavigationCard from "@/components/NavigationCard";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Index = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const navigationItems = [
    {
      title: t("allDepartments"),
      description:
        "Просмотр всех медицинских отделений, контактов врачей и расписания приема",
      iconName: "Building2",
      onClick: () => navigate("/departments"),
    },
    {
      title: t("patientServices"),
      description:
        "Информация об услугах, правилах госпитализации и работе с пациентами",
      iconName: "Users",
      onClick: () => navigate("/services"),
    },
    {
      title: t("printableForms"),
      description:
        "Заполнение и печать необходимых медицинских документов и справок",
      iconName: "FileText",
      onClick: () => navigate("/documents"),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-roboto">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Hospital" size={32} className="text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-slate-800">
                  {t("hospital")}
                </h1>
                <p className="text-sm text-slate-600">Информационный киоск</p>
              </div>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            {t("welcome")}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Выберите нужный раздел для получения информации об отделениях,
            услугах и документах
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {navigationItems.map((item, index) => (
            <NavigationCard
              key={index}
              title={item.title}
              description={item.description}
              iconName={item.iconName}
              onClick={item.onClick}
              className="min-h-[200px]"
            />
          ))}
        </div>

        {/* Emergency Info */}
        <div className="mt-16 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
          <div className="flex items-start space-x-3">
            <Icon name="Phone" size={24} className="text-red-600 mt-1" />
            <div>
              <h3 className="font-bold text-red-800 text-lg mb-2">
                Экстренная помощь
              </h3>
              <p className="text-red-700 mb-2">
                При неотложных состояниях обращайтесь в приемное отделение
              </p>
              <p className="text-2xl font-bold text-red-800">
                103 • (495) 123-45-67
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
