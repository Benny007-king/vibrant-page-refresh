import { X } from 'lucide-react';
import { ReactNode, useEffect, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsClosing(false);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 250);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`modal-overlay ${isClosing ? 'animate-fade-out' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div 
        className={`modal-content ${isClosing ? 'animate-modal-out' : ''}`}
      >
        <button
          onClick={handleClose}
          className="modal-close-btn"
          aria-label="סגור"
        >
          <X size={20} />
        </button>
        <h2 className="text-2xl font-bold text-white mb-6 font-rubik gradient-text">{title}</h2>
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
