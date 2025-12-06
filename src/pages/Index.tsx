import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import AccessibilityWidget from '@/components/AccessibilityWidget';
import Modal from '@/components/Modal';
import profilePhoto from '@/assets/profile-photo.png';

const Index = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);

  return (
    <div dir="rtl" className="min-h-screen bg-background">
      <Header onOpenAbout={() => setAboutOpen(true)} onOpenResume={() => setResumeOpen(true)} />
      
      <main>
        <Hero onOpenAbout={() => setAboutOpen(true)} onOpenResume={() => setResumeOpen(true)} />
        <Portfolio />
      </main>

      <Footer 
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenAccessibility={() => setAccessibilityOpen(true)}
      />
      
      <FloatingWhatsApp />
      <AccessibilityWidget onOpenStatement={() => setAccessibilityOpen(true)} />

      {/* About Modal */}
      <Modal
        isOpen={aboutOpen}
        onClose={() => setAboutOpen(false)}
        title="בני דניאל - מעצב גרפי ומפתח"
      >
        <div className="text-right leading-relaxed text-foreground">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg shadow-primary/20">
              <img 
                src={profilePhoto} 
                alt="בני דניאל" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="mb-4">
            שלום! אני בני דניאל, מעצב ומפתח דיגיטלי עם התמחות בעיצוב חוויות
            משתמש, בניית אתרים ומיתוג עסקי.
          </p>
          <p className="mb-4">
            המסע שלי בעולם העיצוב הדיגיטלי התחיל מתוך אהבה לדיזיין ופיתוח
            טכנולוגי. אני מאמין שעיצוב טוב הוא לא רק "יפה לעין", אלא כלי אסטרטגי
            שמניע תוצאות עסקיות ממשיות.
          </p>
          <p className="mb-4">
            בתיק העבודות שלי תמצאו פרויקטים מגוונים - מאתרי תדמית דינמיים, דרך
            חנויות אונליין מתקדמות, ועד אפליקציות מובייל עם חוויית משתמש מושלמת.
          </p>
          <p className="font-semibold text-white">
            התמחויות: UI/UX Design, Web Development, Branding, Mobile Design
          </p>
        </div>
      </Modal>

      {/* Resume Modal */}
      <Modal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        title="קורות חיים"
      >
        <div className="text-right leading-relaxed text-foreground">
          <div className="mb-6">
            <h4 className="font-bold text-white mb-2">ניסיון מקצועי</h4>
            <div className="bg-secondary/20 p-4 rounded-lg mb-3">
              <p className="font-semibold text-white">מעצב גרפי ומפתח אתרים</p>
              <p className="text-sm text-muted-foreground">2020 - היום</p>
              <p className="text-sm mt-2">עיצוב ופיתוח אתרים, מיתוג עסקי, עיצוב UI/UX</p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-bold text-white mb-2">כישורים</h4>
            <div className="flex flex-wrap gap-2">
              {['Photoshop', 'Illustrator', 'Figma', 'HTML/CSS', 'JavaScript', 'React', 'WordPress'].map((skill) => (
                <span key={skill} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2">השכלה</h4>
            <div className="bg-secondary/20 p-4 rounded-lg">
              <p className="font-semibold text-white">עיצוב גרפי ומולטימדיה</p>
              <p className="text-sm text-muted-foreground">תעודת מקצוע</p>
            </div>
          </div>
        </div>
      </Modal>

      {/* Privacy Modal */}
      <Modal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
        title="מדיניות פרטיות"
      >
        <div className="text-right max-h-64 overflow-y-auto bg-secondary/20 p-4 rounded-xl text-foreground leading-relaxed">
          <p className="mb-4">
            <strong className="text-white">1. כללי</strong>
            <br />
            ברוכים הבאים לאתר של בני דניאל. השימוש באתר כפוף לתנאים המפורטים להלן. הגלישה באתר מעידה על הסכמתך לתנאים אלו.
          </p>
          <p className="mb-4">
            <strong className="text-white">2. איסוף מידע</strong>
            <br />
            אנו אוספים מידע אנונימי לצורכי סטטיסטיקה ושיפור חווית המשתמש (כגון סוג הדפדפן, זמן שהייה באתר). במידה ותשאיר פרטים ליצירת קשר, נעשה בהם שימוש אך ורק למטרה זו.
          </p>
          <p className="mb-4">
            <strong className="text-white">3. עוגיות (Cookies)</strong>
            <br />
            האתר משתמש ב"עוגיות" לצורך תפעולו השוטף, כולל איסוף נתונים סטטיסטיים ואבטחת מידע. ניתן לשנות את הגדרות הדפדפן ולחסום עוגיות בכל עת.
          </p>
          <p>
            <strong className="text-white">4. קניין רוחני</strong>
            <br />
            כל התכנים באתר זה, לרבות עיצובים, תמונות וקוד, הם קניינו הבלעדי של בני דניאל ואין לעשות בהם שימוש ללא אישור בכתב.
          </p>
        </div>
      </Modal>

      {/* Accessibility Modal */}
      <Modal
        isOpen={accessibilityOpen}
        onClose={() => setAccessibilityOpen(false)}
        title="הצהרת נגישות"
      >
        <div className="text-right max-h-72 overflow-y-auto text-foreground leading-relaxed">
          <p className="mb-4">
            אנו בבני דניאל רואים חשיבות רבה במתן שירות שוויוני לכלל הגולשים ובשיפור השירות הניתן לגולשים עם מוגבלות.
          </p>
          
          <h4 className="font-bold text-white mb-2">רמת הנגישות</h4>
          <p className="mb-4">
            האתר הותאם לדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע"ג 2013. ההתאמות בוצעו עפ"י המלצות התקן הישראלי (ת"י 5568) לנגישות תכנים באינטרנט ברמת AA ומסמך WCAG2.0 הבינלאומי.
          </p>
          
          <h4 className="font-bold text-white mb-2">תיקונים והתאמות שבוצעו:</h4>
          <ul className="list-disc pr-5 mb-4 space-y-1">
            <li>האתר מותאם לדפדפנים הנפוצים ולשימוש בטלפון הסלולרי.</li>
            <li>האתר מספק מבנה סמנטי עבור טכנולוגיות מסייעות ותמיכה בדפוס השימוש המקובל להפעלה עם מקלדת.</li>
          </ul>
          
          <h4 className="font-bold text-white mb-2">יצירת קשר</h4>
          <p>
            אם נתקלתם בקושי לגלוש באתר או שיש לכם הערה בנושא, ניתן ליצור קשר:
          </p>
          <p className="mt-2">טלפון: 053-7261618</p>
          <p>דוא"ל: email@example.com</p>
        </div>
      </Modal>
    </div>
  );
};

export default Index;
