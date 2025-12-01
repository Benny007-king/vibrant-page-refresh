import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/972537261618"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="צור קשר בוואטסאפ"
    >
      <FaWhatsapp />
    </a>
  );
};

export default FloatingWhatsApp;
