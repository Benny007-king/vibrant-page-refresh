import { useState, useCallback } from 'react';
import { Accessibility, X, ZoomIn, ZoomOut, Moon, Sun, Type, Link2, Volume2 } from 'lucide-react';

interface AccessibilityWidgetProps {
  onOpenStatement: () => void;
}

const AccessibilityWidget = ({ onOpenStatement }: AccessibilityWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

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

  const toggleHighlightLinks = () => {
    setHighlightLinks(!highlightLinks);
    document.body.classList.toggle('highlight-links');
  };

  const speakSelectedText = useCallback(() => {
    const selection = window.getSelection();
    const text = selection?.toString().trim();
    
    if (!text) {
      // Show instruction if no text selected
      const utterance = new SpeechSynthesisUtterance('סמן טקסט כדי לשמוע אותו בקול');
      utterance.lang = 'he-IL';
      window.speechSynthesis.speak(utterance);
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'he-IL';
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  }, [isSpeaking]);

  return (
    <>
      {/* Accessibility Button - Center Right */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-1/2 -translate-y-1/2 right-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground z-50 shadow-lg hover:scale-110 transition-transform"
        aria-label="תפריט נגישות"
      >
        <Accessibility size={24} />
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed top-1/2 -translate-y-1/2 right-20 w-64 bg-card rounded-xl border border-border shadow-2xl z-50 p-4 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-foreground">נגישות</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
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

            {/* Highlight Links Toggle */}
            <button
              onClick={toggleHighlightLinks}
              className={`w-full flex items-center justify-between rounded-lg p-2 transition-colors ${
                highlightLinks ? 'bg-primary/30' : 'bg-secondary/30 hover:bg-secondary/50'
              }`}
            >
              <span className="text-sm text-foreground">הדגשת קישורים</span>
              <Link2 size={18} />
            </button>

            {/* Text to Speech */}
            <button
              onClick={speakSelectedText}
              className={`w-full flex items-center justify-between rounded-lg p-2 transition-colors ${
                isSpeaking ? 'bg-primary/30' : 'bg-secondary/30 hover:bg-secondary/50'
              }`}
            >
              <span className="text-sm text-foreground">קרא טקסט מסומן</span>
              <Volume2 size={18} className={isSpeaking ? 'animate-pulse' : ''} />
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
