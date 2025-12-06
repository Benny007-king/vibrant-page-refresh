import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenAccessibility: () => void;
}

const Footer = ({ onOpenPrivacy, onOpenAccessibility }: FooterProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <footer ref={ref} className="text-center py-16 border-t border-border/30 bg-card flex flex-col items-center gap-5">
      <div className={`flex gap-5 flex-wrap justify-center mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <button onClick={onOpenPrivacy} className="nav-link text-muted-foreground">
          מדיניות פרטיות
        </button>
        <span className="text-muted-foreground">|</span>
        <button onClick={onOpenAccessibility} className="nav-link text-muted-foreground">
          הצהרת נגישות
        </button>
      </div>

      <div className={`flex gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <a
          href="#"
          className="w-10 h-10 rounded-full flex items-center justify-center border border-border text-foreground transition-all hover:-translate-y-1 hover:bg-[hsl(220,89%,52%)] hover:border-[hsl(220,89%,52%)]"
        >
          <FaFacebookF size={16} />
        </a>
        <a
          href="#"
          className="w-10 h-10 rounded-full flex items-center justify-center border border-border text-foreground transition-all hover:-translate-y-1 hover:bg-[hsl(340,75%,54%)] hover:border-[hsl(340,75%,54%)]"
        >
          <FaInstagram size={16} />
        </a>
      </div>

      <p className={`text-muted-foreground text-sm mt-2 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        © 2024 בני דניאל. כל הזכויות שמורות.
      </p>
    </footer>
  );
};

export default Footer;
