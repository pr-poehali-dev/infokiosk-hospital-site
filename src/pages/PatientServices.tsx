import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import LanguageSelector from "@/components/LanguageSelector";

const PatientServices = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const services = [
    {
      title: "Информация для пациентов",
      description:
        "Правила госпитализации, подготовка к процедурам, права пациентов",
      icon: "Info",
      content: [
        "При госпитализации необходимо иметь при себе паспорт и полис ОМС",
        "Подготовка к анализам: натощак, исключить алкоголь за 24 часа",
        "Права пациента: получение информации о состоянии здоровья",
        "Конфиденциальность медицинской информации гарантирована",
      ],
    },
    {
      title: "Часы посещения",
      description: "Расписание посещений пациентов в стационаре",
      icon: "Clock",
      content: [
        "Будние дни: 16:00 - 19:00",
        "Выходные дни: 10:00 - 12:00, 16:00 - 19:00",
        "Реанимационные отделения: по согласованию с врачом",
        "Детские отделения: индивидуальный график",
      ],
    },
    {
      title: "Экстренные контакты",
      description: "Контакты для неотложных ситуаций",
      icon: "Phone",
      content: [
        "Скорая помощь: 103",
        "Приемное отделение: +7 (495) 123-45-67",
        "Справочная служба: +7 (495) 123-45-00",
        "Горячая линия: +7 (495) 123-45-99",
      ],
    },
  ];

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
                {t("patientServices")}
              </h1>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Icon
                  name={service.icon as any}
                  size={24}
                  className="text-blue-600"
                />
                <h2 className="text-xl font-semibold text-slate-800">
                  {service.title}
                </h2>
              </div>

              <p className="text-slate-600 mb-6">{service.description}</p>

              <ul className="space-y-3">
                {service.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-2">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mt-1 flex-shrink-0"
                    />
                    <span className="text-sm text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8">
          <div className="flex items-start space-x-4">
            <Icon
              name="AlertTriangle"
              size={32}
              className="text-blue-600 flex-shrink-0"
            />
            <div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Важная информация
              </h3>
              <div className="space-y-3 text-blue-700">
                <p>
                  • В случае ухудшения состояния немедленно обращайтесь к
                  медперсоналу
                </p>
                <p>• Соблюдайте правила внутреннего распорядка больницы</p>
                <p>
                  • Вся информация о состоянии здоровья предоставляется только
                  пациенту или его законному представителю
                </p>
                <p>
                  • При посещении больного обязательно наличие сменной обуви
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientServices;
