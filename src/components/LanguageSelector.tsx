import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Icon from "@/components/ui/icon";

const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: "ru" as const, label: "Русский", flag: "🇷🇺" },
    { code: "en" as const, label: "English", flag: "🇺🇸" },
    { code: "es" as const, label: "Español", flag: "🇪🇸" },
    { code: "pt" as const, label: "Português", flag: "🇵🇹" },
  ];

  return (
    <div className="flex items-center gap-2 p-4 bg-white rounded-lg shadow-sm border">
      <Icon name="Globe" size={20} className="text-slate-600" />
      <span className="text-sm font-medium text-slate-700 mr-2">
        {t("selectLanguage")}:
      </span>
      <div className="flex gap-1">
        {languages.map((lang) => (
          <Button
            key={lang.code}
            variant={language === lang.code ? "default" : "outline"}
            size="sm"
            onClick={() => setLanguage(lang.code)}
            className="min-w-[80px] text-xs"
          >
            <span className="mr-1">{lang.flag}</span>
            {lang.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
