import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const projects = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    title: "ממשק ניהול מתקדם",
    category: "UI/UX DESIGN",
  },
  {
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
    title: "זהות ומיתוג עסקי",
    category: "BRANDING",
  },
  {
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    title: "אפליקציית מובייל",
    category: "MOBILE UI",
  },
  {
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
    title: "אתר תדמית",
    category: "WEB DESIGN",
  },
  {
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80",
    title: "חנות אונליין",
    category: "ECOMMERCE",
  },
  {
    image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&w=1200&q=80",
    title: "קמפיין דיגיטלי",
    category: "DIGITAL MARKETING",
  },
];

const Portfolio = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="work" className="py-24 px-[5%] bg-background" ref={sectionRef}>
      <h2 className={`section-title transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        פרויקטים נבחרים
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        {projects.map((project, index) => (
          <article
            key={index}
            className={`project-card group transition-all duration-700 ${
              sectionVisible 
                ? 'opacity-100 translate-y-0 rotate-0 scale-100' 
                : 'opacity-0 translate-y-16 rotate-2 scale-95'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                loading="lazy"
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="project-info">
              <h3 className="text-xl font-bold text-white mb-1 transition-transform duration-300 group-hover:-translate-y-1">{project.title}</h3>
              <span className="text-sm text-primary tracking-wider transition-all duration-300 group-hover:tracking-widest">{project.category}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
