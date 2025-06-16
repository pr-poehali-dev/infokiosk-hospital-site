import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { documentTemplates, FormField } from "@/data/hospitalData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import LanguageSelector from "@/components/LanguageSelector";
import VirtualKeyboard from "@/components/VirtualKeyboard";

const Documents = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleFieldChange = (fieldId: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldId]: value }));
  };

  const handleKeyPress = (key: string) => {
    if (activeField) {
      setFormData((prev) => ({
        ...prev,
        [activeField]: (prev[activeField] || "") + key,
      }));
    }
  };

  const handleBackspace = () => {
    if (activeField) {
      setFormData((prev) => ({
        ...prev,
        [activeField]: (prev[activeField] || "").slice(0, -1),
      }));
    }
  };

  const handleSpace = () => {
    if (activeField) {
      setFormData((prev) => ({
        ...prev,
        [activeField]: (prev[activeField] || "") + " ",
      }));
    }
  };

  const handleClear = () => {
    if (activeField) {
      setFormData((prev) => ({ ...prev, [activeField]: "" }));
    }
  };

  const handlePrint = () => {
    const template = documentTemplates.find((t) => t.id === selectedTemplate);
    if (!template) return;

    const printContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h1>${template.name[language]}</h1>
        <hr>
        ${template.fields
          .map(
            (field) => `
          <div style="margin: 10px 0;">
            <strong>${field.label[language]}:</strong> ${formData[field.id] || "_____________"}
          </div>
        `,
          )
          .join("")}
        <br><br>
        <div style="text-align: right;">
          Дата: ${new Date().toLocaleDateString()}
        </div>
      </div>
    `;

    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(printContent);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const renderField = (field: FormField) => {
    const value = formData[field.id] || "";

    switch (field.type) {
      case "text":
        return (
          <Input
            value={value}
            onChange={(e) => handleFieldChange(field.id, e.target.value)}
            onFocus={() => {
              setActiveField(field.id);
              setShowKeyboard(true);
            }}
            placeholder={field.label[language]}
            required={field.required}
          />
        );
      case "textarea":
        return (
          <Textarea
            value={value}
            onChange={(e) => handleFieldChange(field.id, e.target.value)}
            onFocus={() => {
              setActiveField(field.id);
              setShowKeyboard(true);
            }}
            placeholder={field.label[language]}
            required={field.required}
            rows={4}
          />
        );
      case "date":
        return (
          <Input
            type="date"
            value={value}
            onChange={(e) => handleFieldChange(field.id, e.target.value)}
            required={field.required}
          />
        );
      case "select":
        return (
          <Select
            value={value}
            onValueChange={(val) => handleFieldChange(field.id, val)}
          >
            <SelectTrigger>
              <SelectValue placeholder={field.label[language]} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      default:
        return null;
    }
  };

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
                {t("printableForms")}
              </h1>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {!selectedTemplate ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentTemplates.map((template) => (
              <div
                key={template.id}
                className="bg-white p-6 rounded-lg shadow-sm border"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      {template.name[language]}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {template.description[language]}
                    </p>
                  </div>
                  <Icon name="FileText" size={24} className="text-blue-600" />
                </div>
                <Button
                  onClick={() => setSelectedTemplate(template.id)}
                  className="w-full"
                >
                  {t("fillForm")}
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-800">
                  {
                    documentTemplates.find((t) => t.id === selectedTemplate)
                      ?.name[language]
                  }
                </h2>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setShowKeyboard(!showKeyboard)}
                  >
                    <Icon name="Keyboard" size={16} className="mr-2" />
                    {t("virtualKeyboard")}
                  </Button>
                  <Button onClick={handlePrint}>
                    <Icon name="Printer" size={16} className="mr-2" />
                    {t("print")}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedTemplate(null)}
                  >
                    Назад
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                {documentTemplates
                  .find((t) => t.id === selectedTemplate)
                  ?.fields.map((field) => (
                    <div key={field.id} className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">
                        {field.label[language]}
                        {field.required && (
                          <span className="text-red-500 ml-1">*</span>
                        )}
                      </label>
                      {renderField(field)}
                    </div>
                  ))}
              </div>
            </div>

            {showKeyboard && (
              <div className="mt-6">
                <VirtualKeyboard
                  onKeyPress={handleKeyPress}
                  onBackspace={handleBackspace}
                  onSpace={handleSpace}
                  onClear={handleClear}
                  language={language}
                />
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Documents;
