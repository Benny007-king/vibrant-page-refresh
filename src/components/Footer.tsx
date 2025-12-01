import { FaFacebookF, FaInstagram } from 'react-icons/fa';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenAccessibility: () => void;
}

const Footer = ({ onOpenPrivacy, onOpenAccessibility }: FooterProps) => {
  return (
    <footer className="text-center py-16 border-t border-border/30 bg-card flex flex-col items-center gap-5">
      <div className="flex gap-5 flex-wrap justify-center mb-2">
        <button onClick={onOpenPrivacy} className="nav-link text-muted-foreground">
          מדיניות פרטיות
        </button>
        <span className="text-muted-foreground">|</span>
        <button onClick={onOpenAccessibility} className="nav-link text-muted-foreground">
          הצהרת נגישות
        </button>
      </div>

      <div className="flex gap-4">
        <a
          href="#"
          className="w-10 h-10 rounded-full flex items-center justify-center border border-border text-white transition-all hover:-translate-y-1 hover:bg-[hsl(220,89%,52%)] hover:border-[hsl(220,89%,52%)]"
        >
          <FaFacebookF size={16} />
        </a>
        <a
          href="#"
          className="w-10 h-10 rounded-full flex items-center justify-center border border-border text-white transition-all hover:-translate-y-1 hover:bg-[hsl(340,75%,54%)] hover:border-[hsl(340,75%,54%)]"
        >
          <FaInstagram size={16} />
        </a>
      </div>

      <p className="text-muted-foreground text-sm mt-2">
        © 2024 בני דניאל. כל הזכויות שמורות.
      </p>
    </footer>
  );
};

export default Footer;
