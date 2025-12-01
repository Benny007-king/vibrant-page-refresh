import { useState } from 'react';
import { Accessibility, X, ZoomIn, ZoomOut, Moon, Sun, Type } from 'lucide-react';

interface AccessibilityWidgetProps {
  onOpenStatement: () => void;
}

const AccessibilityWidget = ({ onOpenStatement }: AccessibilityWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 10, 150);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 10, 80);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const resetFontSize = () => {
    setFontSize(100);
    document.documentElement.style.fontSize = '100%';
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle('high-contrast');
  };

  return (
    <>
      {/* Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground z-50 shadow-lg hover:scale-110 transition-transform"
        aria-label="תפריט נגישות"
      >
        <Accessibility size={24} />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-64 bg-card rounded-xl border border-border shadow-2xl z-50 p-4 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-white">נגישות</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <div className="space-y-3">
            {/* Font Size Controls */}
            <div className="flex items-center justify-between bg-secondary/30 rounded-lg p-2">
              <span className="text-sm text-foreground">גודל טקסט</span>
              <div className="flex gap-1">
                <button
                  onClick={decreaseFontSize}
                  className="w-8 h-8 rounded flex items-center justify-center bg-background/50 hover:bg-primary/30 transition-colors"
                  aria-label="הקטן טקסט"
                >
                  <ZoomOut size={16} />
                </button>
                <button
                  onClick={resetFontSize}
                  className="w-8 h-8 rounded flex items-center justify-center bg-background/50 hover:bg-primary/30 transition-colors text-xs"
                  aria-label="אפס גודל טקסט"
                >
                  <Type size={16} />
                </button>
                <button
                  onClick={increaseFontSize}
                  className="w-8 h-8 rounded flex items-center justify-center bg-background/50 hover:bg-primary/30 transition-colors"
                  aria-label="הגדל טקסט"
                >
                  <ZoomIn size={16} />
                </button>
              </div>
            </div>

            {/* High Contrast Toggle */}
            <button
              onClick={toggleHighContrast}
              className="w-full flex items-center justify-between bg-secondary/30 rounded-lg p-2 hover:bg-secondary/50 transition-colors"
            >
              <span className="text-sm text-foreground">ניגודיות גבוהה</span>
              {highContrast ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Accessibility Statement Link */}
            <button
              onClick={() => {
                onOpenStatement();
                setIsOpen(false);
              }}
              className="w-full text-center text-sm text-primary hover:underline pt-2"
            >
              הצהרת נגישות
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityWidget;
