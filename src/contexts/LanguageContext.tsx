import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "ru" | "en" | "es" | "pt";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const translations = {
  ru: {
    welcome: "Добро пожаловать",
    hospital: "Городская больница",
    departments: "Отделения",
    services: "Услуги пациентам",
    documents: "Документы",
    selectLanguage: "Выберите язык",
    navigation: "Навигация",
    allDepartments: "Все отделения",
    patientServices: "Услуги для пациентов",
    printableForms: "Печатные формы",
  },
  en: {
    welcome: "Welcome",
    hospital: "City Hospital",
    departments: "Departments",
    services: "Patient Services",
    documents: "Documents",
    selectLanguage: "Select Language",
    navigation: "Navigation",
    allDepartments: "All Departments",
    patientServices: "Patient Services",
    printableForms: "Printable Forms",
  },
  es: {
    welcome: "Bienvenido",
    hospital: "Hospital de la Ciudad",
    departments: "Departamentos",
    services: "Servicios al Paciente",
    documents: "Documentos",
    selectLanguage: "Seleccionar Idioma",
    navigation: "Navegación",
    allDepartments: "Todos los Departamentos",
    patientServices: "Servicios al Paciente",
    printableForms: "Formularios Imprimibles",
  },
  pt: {
    welcome: "Bem-vindo",
    hospital: "Hospital da Cidade",
    departments: "Departamentos",
    services: "Serviços ao Paciente",
    documents: "Documentos",
    selectLanguage: "Selecionar Idioma",
    navigation: "Navegação",
    allDepartments: "Todos os Departamentos",
    patientServices: "Serviços ao Paciente",
    printableForms: "Formulários Imprimíveis",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ru");

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["ru"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
