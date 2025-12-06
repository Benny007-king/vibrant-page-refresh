import { useState } from 'react';
import { Menu, X, Mail, Phone } from 'lucide-react';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';

interface HeaderProps {
  onOpenAbout: () => void;
  onOpenResume: () => void;
}

const Header = ({ onOpenAbout, onOpenResume }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-[70px] flex justify-between items-center px-[5%] bg-background/90 backdrop-blur-xl border-b border-border/20 z-[1000]">
        {/* Logo */}
        <button onClick={scrollToTop} className="font-rubik font-bold text-xl tracking-wider uppercase hover:opacity-80 transition-opacity">
          BENNY <span className="text-muted-foreground font-light">DANIEL</span>
        </button>

        {/* Desktop Nav - Center */}
        <nav className="hidden md:flex gap-9 absolute left-1/2 -translate-x-1/2">
          <button onClick={scrollToTop} className="nav-link font-medium text-sm tracking-wide">
            Home
          </button>
          <button onClick={onOpenAbout} className="nav-link font-medium text-sm tracking-wide">
            About
          </button>
          <button onClick={onOpenResume} className="nav-link font-medium text-sm tracking-wide text-primary">
            Resume
          </button>
          <button onClick={scrollToWork} className="nav-link font-medium text-sm tracking-wide">
            Portfolio
          </button>
        </nav>

        {/* Desktop Actions - Right */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="mailto:benny@example.com"
            className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors group"
          >
            <Mail size={16} />
            <span className="relative text-sm">
              benny@example.com
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left duration-300" />
            </span>
          </a>
          <a
            href="tel:0537261618"
            className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors group"
          >
            <Phone size={16} />
            <span className="relative text-sm">
              053-726-1618
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left duration-300" />
            </span>
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex gap-2.5 items-center md:hidden">
          <button
            className="text-2xl text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 right-0 w-72 h-screen bg-card z-[1500] p-8 pt-24 flex flex-direction-column gap-4 transition-transform duration-400 border-l border-border/30 shadow-2xl ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ flexDirection: 'column' }}
      >
        <button
          className="absolute top-5 left-5 text-3xl text-white bg-transparent border-none"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X />
        </button>

        <button
          onClick={() => { scrollToTop(); setMobileMenuOpen(false); }}
          className="flex items-center gap-3 text-lg text-foreground py-2 hover:text-primary hover:-translate-x-1 transition-all"
        >
          Home
        </button>
        <button
          onClick={() => {
            onOpenAbout();
            setMobileMenuOpen(false);
          }}
          className="flex items-center gap-3 text-lg text-foreground py-2 hover:text-primary hover:-translate-x-1 transition-all"
        >
          About
        </button>
        <button
          onClick={scrollToWork}
          className="flex items-center gap-3 text-lg text-foreground py-2 hover:text-primary hover:-translate-x-1 transition-all"
        >
          Portfolio
        </button>
        
        <div className="border-t border-border/30 pt-4 mt-4">
          <h4 className="text-primary text-xs uppercase tracking-wider mb-4">Contact</h4>
          <a
            href="mailto:email@example.com"
            className="flex items-center gap-3 text-foreground py-2 hover:text-primary transition-all"
          >
            <Mail size={18} /> שלח מייל
          </a>
          <a
            href="https://wa.me/972537261618"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-foreground py-2 hover:text-primary transition-all"
          >
            <FaWhatsapp size={18} /> וואטסאפ
          </a>
          <a
            href="tel:0537261618"
            className="flex items-center gap-3 text-foreground py-2 hover:text-primary transition-all"
          >
            <Phone size={18} /> 053-726-1618
          </a>
        </div>

        {/* Mobile Socials */}
        <div className="flex justify-center gap-5 mt-auto pb-5">
          <a href="#" className="icon-btn icon-btn-facebook">
            <FaFacebookF size={18} />
          </a>
          <a href="#" className="icon-btn icon-btn-instagram">
            <FaInstagram size={18} />
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[1400]"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
