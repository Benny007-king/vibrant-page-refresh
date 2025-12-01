import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaWhatsapp, FaBehance, FaLinkedinIn } from 'react-icons/fa';

interface HeroProps {
  onOpenAbout: () => void;
}

const Hero = ({ onOpenAbout }: HeroProps) => {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2072&q=80"
          alt="Workspace"
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(30%) brightness(0.4)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background/90 via-background/70 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-[5%] pt-[70px]">
        <div className="max-w-2xl mr-auto md:mr-0 md:ml-auto text-right">
          {/* Name with styling like reference */}
          <div className="mb-8 opacity-0 animate-fade-in-up">
            <span className="text-primary text-lg tracking-wider mb-2 block">GRAPHIC DESIGNER</span>
            <h1 className="font-rubik">
              <span className="text-4xl md:text-5xl lg:text-7xl font-light text-white block mb-2">BENNY</span>
              <span className="text-5xl md:text-6xl lg:text-8xl font-bold gradient-text block">DANIEL</span>
            </h1>
            <p className="text-xl text-primary mt-4">מעצב גרפי ומפתח דיגיטלי</p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl mb-10 text-foreground/80 leading-relaxed opacity-0 animate-fade-in-up animation-delay-200 max-w-lg mr-0 ml-auto md:ml-0">
            מעצב חוויות דיגיטליות ייחודיות. מתמחה בבניית אתרים, מיתוג ועיצוב
            ממשק משתמש שמביא תוצאות מדידות.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap justify-end opacity-0 animate-fade-in-up animation-delay-400">
            <button onClick={scrollToWork} className="btn-main">
              Portfolio
            </button>
            <button onClick={onOpenAbout} className="btn-main">
              Resume
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-12 justify-end opacity-0 animate-fade-in-up animation-delay-600">
            <a href="#" className="text-foreground/60 hover:text-white transition-colors text-lg">
              <FaBehance />
            </a>
            <a href="#" className="text-foreground/60 hover:text-white transition-colors text-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="text-foreground/60 hover:text-white transition-colors text-lg">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-foreground/60 hover:text-white transition-colors text-lg">
              <FaInstagram />
            </a>
            <a href="#" className="text-foreground/60 hover:text-white transition-colors text-lg">
              <FaPinterestP />
            </a>
            <a href="#" className="text-foreground/60 hover:text-white transition-colors text-lg">
              <FaTwitter />
            </a>
            <a href="https://wa.me/972537261618" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-white transition-colors text-lg">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Corner expand icon like reference */}
      <button className="absolute bottom-8 left-8 text-foreground/40 hover:text-white transition-colors">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
        </svg>
      </button>
    </section>
  );
};

export default Hero;
