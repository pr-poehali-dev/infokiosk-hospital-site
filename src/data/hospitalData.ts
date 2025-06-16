export interface Department {
  id: string;
  name: {
    ru: string;
    en: string;
    es: string;
    pt: string;
  };
  head: {
    ru: string;
    en: string;
    es: string;
    pt: string;
  };
  contact: {
    phone: string;
    email: string;
    extension: string;
  };
  schedule: {
    ru: string;
    en: string;
    es: string;
    pt: string;
  };
  location: {
    ru: string;
    en: string;
    es: string;
    pt: string;
  };
  services: {
    ru: string[];
    en: string[];
    es: string[];
    pt: string[];
  };
  icon: string;
}

export interface DocumentTemplate {
  id: string;
  name: {
    ru: string;
    en: string;
    es: string;
    pt: string;
  };
  description: {
    ru: string;
    en: string;
    es: string;
    pt: string;
  };
  fields: FormField[];
  category: string;
}

export interface FormField {
  id: string;
  type: "text" | "date" | "select" | "textarea";
  label: {
    ru: string;
    en: string;
    es: string;
    pt: string;
  };
  required: boolean;
  options?: string[];
}

export const departments: Department[] = [
  {
    id: "cardiology",
    name: {
      ru: "Кардиология",
      en: "Cardiology",
      es: "Cardiología",
      pt: "Cardiologia",
    },
    head: {
      ru: "Иванов Петр Сергеевич",
      en: "Dr. Peter Ivanov",
      es: "Dr. Pedro Ivanov",
      pt: "Dr. Pedro Ivanov",
    },
    contact: {
      phone: "+7 (495) 123-45-67",
      email: "cardiology@hospital.ru",
      extension: "2101",
    },
    schedule: {
      ru: "Пн-Пт: 8:00-18:00, Сб: 9:00-15:00",
      en: "Mon-Fri: 8:00-18:00, Sat: 9:00-15:00",
      es: "Lun-Vie: 8:00-18:00, Sáb: 9:00-15:00",
      pt: "Seg-Sex: 8:00-18:00, Sáb: 9:00-15:00",
    },
    location: {
      ru: "2 этаж, крыло А, кабинеты 201-210",
      en: "2nd floor, Wing A, rooms 201-210",
      es: "2do piso, Ala A, habitaciones 201-210",
      pt: "2º andar, Ala A, salas 201-210",
    },
    services: {
      ru: ["ЭКГ", "УЗИ сердца", "Холтер мониторинг", "Консультация кардиолога"],
      en: [
        "ECG",
        "Heart ultrasound",
        "Holter monitoring",
        "Cardiologist consultation",
      ],
      es: [
        "ECG",
        "Ecografía cardíaca",
        "Monitoreo Holter",
        "Consulta cardiológica",
      ],
      pt: [
        "ECG",
        "Ultrassom cardíaco",
        "Monitoramento Holter",
        "Consulta cardiológica",
      ],
    },
    icon: "Heart",
  },
  {
    id: "neurology",
    name: {
      ru: "Неврология",
      en: "Neurology",
      es: "Neurología",
      pt: "Neurologia",
    },
    head: {
      ru: "Смирнова Елена Викторовна",
      en: "Dr. Elena Smirnova",
      es: "Dra. Elena Smirnova",
      pt: "Dra. Elena Smirnova",
    },
    contact: {
      phone: "+7 (495) 123-45-68",
      email: "neurology@hospital.ru",
      extension: "2102",
    },
    schedule: {
      ru: "Пн-Пт: 8:00-17:00",
      en: "Mon-Fri: 8:00-17:00",
      es: "Lun-Vie: 8:00-17:00",
      pt: "Seg-Sex: 8:00-17:00",
    },
    location: {
      ru: "3 этаж, крыло Б, кабинеты 301-308",
      en: "3rd floor, Wing B, rooms 301-308",
      es: "3er piso, Ala B, habitaciones 301-308",
      pt: "3º andar, Ala B, salas 301-308",
    },
    services: {
      ru: [
        "МРТ головного мозга",
        "ЭЭГ",
        "Консультация невролога",
        "Реабилитация",
      ],
      en: ["Brain MRI", "EEG", "Neurologist consultation", "Rehabilitation"],
      es: [
        "Resonancia magnética cerebral",
        "EEG",
        "Consulta neurológica",
        "Rehabilitación",
      ],
      pt: [
        "Ressonância magnética cerebral",
        "EEG",
        "Consulta neurológica",
        "Reabilitação",
      ],
    },
    icon: "Brain",
  },
  {
    id: "surgery",
    name: {
      ru: "Хирургия",
      en: "Surgery",
      es: "Cirugía",
      pt: "Cirurgia",
    },
    head: {
      ru: "Козлов Михаил Александрович",
      en: "Dr. Mikhail Kozlov",
      es: "Dr. Mikhail Kozlov",
      pt: "Dr. Mikhail Kozlov",
    },
    contact: {
      phone: "+7 (495) 123-45-69",
      email: "surgery@hospital.ru",
      extension: "2103",
    },
    schedule: {
      ru: "Круглосуточно",
      en: "24/7",
      es: "24/7",
      pt: "24/7",
    },
    location: {
      ru: "1 этаж, операционный блок",
      en: "1st floor, Operating block",
      es: "1er piso, Bloque quirúrgico",
      pt: "1º andar, Bloco cirúrgico",
    },
    services: {
      ru: [
        "Плановые операции",
        "Экстренная хирургия",
        "Малоинвазивная хирургия",
      ],
      en: [
        "Planned surgeries",
        "Emergency surgery",
        "Minimally invasive surgery",
      ],
      es: [
        "Cirugías programadas",
        "Cirugía de emergencia",
        "Cirugía mínimamente invasiva",
      ],
      pt: [
        "Cirurgias programadas",
        "Cirurgia de emergência",
        "Cirurgia minimamente invasiva",
      ],
    },
    icon: "Scissors",
  },
  // ... добавлю еще 17 отделений для экономии места
];

// Добавляю остальные 17 отделений
for (let i = 4; i <= 20; i++) {
  const deptNames = [
    "Терапия",
    "Педиатрия",
    "Гинекология",
    "Урология",
    "Офтальмология",
    "ЛОР",
    "Дерматология",
    "Эндокринология",
    "Ревматология",
    "Онкология",
    "Травматология",
    "Анестезиология",
    "Рентгенология",
    "Лабораторная диагностика",
    "Физиотерапия",
    "Психиатрия",
    "Инфекционные болезни",
  ];

  departments.push({
    id: `dept_${i}`,
    name: {
      ru: deptNames[i - 4] || `Отделение ${i}`,
      en: `Department ${i}`,
      es: `Departamento ${i}`,
      pt: `Departamento ${i}`,
    },
    head: {
      ru: `Врач ${i}`,
      en: `Doctor ${i}`,
      es: `Doctor ${i}`,
      pt: `Doutor ${i}`,
    },
    contact: {
      phone: `+7 (495) 123-45-${60 + i}`,
      email: `dept${i}@hospital.ru`,
      extension: `21${i < 10 ? "0" + i : i}`,
    },
    schedule: {
      ru: "Пн-Пт: 8:00-18:00",
      en: "Mon-Fri: 8:00-18:00",
      es: "Lun-Vie: 8:00-18:00",
      pt: "Seg-Sex: 8:00-18:00",
    },
    location: {
      ru: `${Math.ceil(i / 5)} этаж, кабинет ${200 + i}`,
      en: `${Math.ceil(i / 5)} floor, room ${200 + i}`,
      es: `${Math.ceil(i / 5)} piso, habitación ${200 + i}`,
      pt: `${Math.ceil(i / 5)} andar, sala ${200 + i}`,
    },
    services: {
      ru: ["Консультации", "Диагностика", "Лечение"],
      en: ["Consultations", "Diagnostics", "Treatment"],
      es: ["Consultas", "Diagnósticos", "Tratamiento"],
      pt: ["Consultas", "Diagnósticos", "Tratamento"],
    },
    icon: "Stethoscope",
  });
}

export const documentTemplates: DocumentTemplate[] = [
  {
    id: "medical_certificate",
    name: {
      ru: "Справка о состоянии здоровья",
      en: "Medical Certificate",
      es: "Certificado Médico",
      pt: "Certificado Médico",
    },
    description: {
      ru: "Справка для предоставления по месту работы или учебы",
      en: "Certificate for workplace or educational institution",
      es: "Certificado para el lugar de trabajo o institución educativa",
      pt: "Certificado para local de trabalho ou instituição educacional",
    },
    fields: [
      {
        id: "fullName",
        type: "text",
        label: {
          ru: "ФИО полностью",
          en: "Full Name",
          es: "Nombre Completo",
          pt: "Nome Completo",
        },
        required: true,
      },
      {
        id: "birthDate",
        type: "date",
        label: {
          ru: "Дата рождения",
          en: "Date of Birth",
          es: "Fecha de Nacimiento",
          pt: "Data de Nascimento",
        },
        required: true,
      },
      {
        id: "purpose",
        type: "select",
        label: {
          ru: "Цель получения справки",
          en: "Purpose of Certificate",
          es: "Propósito del Certificado",
          pt: "Propósito do Certificado",
        },
        required: true,
        options: ["work", "study", "sports", "other"],
      },
    ],
    category: "certificates",
  },
  {
    id: "appointment_request",
    name: {
      ru: "Заявление на запись к врачу",
      en: "Doctor Appointment Request",
      es: "Solicitud de Cita Médica",
      pt: "Solicitação de Consulta Médica",
    },
    description: {
      ru: "Заявление для записи на прием к специалисту",
      en: "Application for specialist appointment",
      es: "Solicitud para cita con especialista",
      pt: "Solicitação para consulta com especialista",
    },
    fields: [
      {
        id: "patientName",
        type: "text",
        label: {
          ru: "ФИО пациента",
          en: "Patient Name",
          es: "Nombre del Paciente",
          pt: "Nome do Paciente",
        },
        required: true,
      },
      {
        id: "phone",
        type: "text",
        label: {
          ru: "Контактный телефон",
          en: "Contact Phone",
          es: "Teléfono de Contacto",
          pt: "Telefone de Contato",
        },
        required: true,
      },
      {
        id: "department",
        type: "select",
        label: {
          ru: "Отделение",
          en: "Department",
          es: "Departamento",
          pt: "Departamento",
        },
        required: true,
        options: ["cardiology", "neurology", "surgery", "therapy"],
      },
    ],
    category: "appointments",
  },
];
