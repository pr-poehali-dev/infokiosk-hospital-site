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
    head: "Заведующий",
    contact: "Контакт",
    schedule: "Расписание",
    location: "Расположение",
    backToMain: "На главную",
    print: "Печать",
    fillForm: "Заполнить форму",
    downloadTemplate: "Скачать шаблон",
    patientInfo: "Информация для пациентов",
    visitingHours: "Часы посещения",
    hospitalRules: "Правила больницы",
    emergencyContacts: "Экстренные контакты",
    virtualKeyboard: "Виртуальная клавиатура",
    save: "Сохранить",
    clear: "Очистить",
    patientName: "ФИО пациента",
    birthDate: "Дата рождения",
    phoneNumber: "Телефон",
    address: "Адрес",
    requestType: "Тип заявления",
    additionalInfo: "Дополнительная информация",
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
    head: "Head of Department",
    contact: "Contact",
    schedule: "Schedule",
    location: "Location",
    backToMain: "Back to Main",
    print: "Print",
    fillForm: "Fill Form",
    downloadTemplate: "Download Template",
    patientInfo: "Patient Information",
    visitingHours: "Visiting Hours",
    hospitalRules: "Hospital Rules",
    emergencyContacts: "Emergency Contacts",
    virtualKeyboard: "Virtual Keyboard",
    save: "Save",
    clear: "Clear",
    patientName: "Patient Name",
    birthDate: "Date of Birth",
    phoneNumber: "Phone Number",
    address: "Address",
    requestType: "Request Type",
    additionalInfo: "Additional Information",
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
    head: "Jefe de Departamento",
    contact: "Contacto",
    schedule: "Horario",
    location: "Ubicación",
    backToMain: "Volver al Inicio",
    print: "Imprimir",
    fillForm: "Llenar Formulario",
    downloadTemplate: "Descargar Plantilla",
    patientInfo: "Información del Paciente",
    visitingHours: "Horarios de Visita",
    hospitalRules: "Reglas del Hospital",
    emergencyContacts: "Contactos de Emergencia",
    virtualKeyboard: "Teclado Virtual",
    save: "Guardar",
    clear: "Limpiar",
    patientName: "Nombre del Paciente",
    birthDate: "Fecha de Nacimiento",
    phoneNumber: "Teléfono",
    address: "Dirección",
    requestType: "Tipo de Solicitud",
    additionalInfo: "Información Adicional",
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
    head: "Chefe do Departamento",
    contact: "Contato",
    schedule: "Horário",
    location: "Localização",
    backToMain: "Voltar ao Início",
    print: "Imprimir",
    fillForm: "Preencher Formulário",
    downloadTemplate: "Baixar Modelo",
    patientInfo: "Informações do Paciente",
    visitingHours: "Horários de Visita",
    hospitalRules: "Regras do Hospital",
    emergencyContacts: "Contatos de Emergência",
    virtualKeyboard: "Teclado Virtual",
    save: "Salvar",
    clear: "Limpar",
    patientName: "Nome do Paciente",
    birthDate: "Data de Nascimento",
    phoneNumber: "Telefone",
    address: "Endereço",
    requestType: "Tipo de Solicitação",
    additionalInfo: "Informações Adicionais",
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
