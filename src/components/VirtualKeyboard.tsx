import { Button } from "@/components/ui/button";
import { useState } from "react";

interface VirtualKeyboardProps {
  onKeyPress: (key: string) => void;
  onBackspace: () => void;
  onSpace: () => void;
  onClear: () => void;
  language: string;
}

const VirtualKeyboard = ({
  onKeyPress,
  onBackspace,
  onSpace,
  onClear,
  language,
}: VirtualKeyboardProps) => {
  const [isShift, setIsShift] = useState(false);
  const [currentLayout, setCurrentLayout] = useState<"ru" | "en">("ru");

  const layouts = {
    ru: [
      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
      ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"],
      ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"],
      ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",", "."],
    ],
    en: [
      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
      ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
      ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
      ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "\\"],
    ],
  };

  const handleKeyPress = (key: string) => {
    const finalKey = isShift ? key.toUpperCase() : key;
    onKeyPress(finalKey);
    if (isShift) setIsShift(false);
  };

  const toggleLayout = () => {
    setCurrentLayout(currentLayout === "ru" ? "en" : "ru");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg border">
      <div className="mb-4 flex justify-between items-center">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLayout}
            className="text-xs"
          >
            {currentLayout === "ru" ? "RU" : "EN"}
          </Button>
          <Button
            variant={isShift ? "default" : "outline"}
            size="sm"
            onClick={() => setIsShift(!isShift)}
            className="text-xs"
          >
            Shift
          </Button>
        </div>
        <Button variant="destructive" size="sm" onClick={onClear}>
          Очистить
        </Button>
      </div>

      <div className="space-y-2">
        {layouts[currentLayout].map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1 justify-center">
            {row.map((key, keyIndex) => (
              <Button
                key={keyIndex}
                variant="outline"
                size="sm"
                onClick={() => handleKeyPress(key)}
                className="min-w-[40px] h-10 text-sm"
              >
                {isShift ? key.toUpperCase() : key}
              </Button>
            ))}
          </div>
        ))}

        <div className="flex gap-2 justify-center mt-4">
          <Button variant="outline" onClick={onSpace} className="px-16">
            Пробел
          </Button>
          <Button variant="outline" onClick={onBackspace} className="px-4">
            ⌫
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VirtualKeyboard;
