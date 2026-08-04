import Link from "next/link";

export default function TermsPage() {
  return (
    <article dir="rtl">
      <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block">
        → חזרה לדף הבית
      </Link>
      <h1 className="font-display font-bold text-3xl mb-2">תנאי שימוש</h1>
      <p className="text-muted text-sm mb-8">עודכן לאחרונה: אוגוסט 2026</p>
      <p className="text-foreground/80 mb-8">ברוכים הבאים לעד כאן (AdKan). השימוש באפליקציה מהווה הסכמה לתנאים הבאים.</p>

      <Section title="1. הגדרות">
        <p>&quot;השירות&quot; — אפליקציית עד כאן לניהול זמן מסך.</p>
        <p>&quot;משתמש&quot; — כל מי שמשתמש באפליקציה.</p>
        <p>&quot;תוכן משתמש&quot; — שמות קבוצות, שמות תצוגה, ואמוג׳ים שהמשתמש יצר.</p>
      </Section>

      <Section title="2. זכאות לשימוש">
        <p>האפליקציה מיועדת למשתמשים בני 13 ומעלה. על ידי שימוש בה, אתם מאשרים שאתם עומדים בדרישה זו.</p>
      </Section>

      <Section title="3. חשבון משתמש">
        <p><strong>ב-iOS:</strong> הכניסה מתבצעת דרך Apple Sign-In. אחריות אבטחת המכשיר וחשבון Apple שלכם היא שלכם.</p>
        <p><strong>ב-Android:</strong> הכניסה מתבצעת דרך Google Sign-In. אחריות אבטחת המכשיר וחשבון Google שלכם היא שלכם.</p>
      </Section>

      <Section title="4. שימוש מותר">
        <p>מותר:</p>
        <ul>
          <li>שימוש אישי לניהול זמן מסך ותחרות חברתית בין חברים</li>
          <li>יצירת קבוצות והזמנת אנשים שאתם מכירים</li>
        </ul>
        <p className="mt-2">אסור:</p>
        <ul>
          <li>שימוש לפגיעה, הטרדה, או פגיעה בפרטיות של אחרים</li>
          <li>ניסיון לעקוף מגבלות טכניות של האפליקציה</li>
          <li>שיתוף גישה לחשבון שלכם עם אחרים</li>
        </ul>
      </Section>

      <Section title="5. תשלומים ומנוי">
        <p><strong>iOS (דרך App Store):</strong></p>
        <ul>
          <li>מנוי חודשי: ₪7.90/חודש</li>
          <li>מנוי שנתי: ₪59.90/שנה</li>
          <li>רישיון לכל החיים: ₪99.90 חד-פעמי</li>
          <li>כל שלושת המנויים כוללים תקופת ניסיון של 3 ימים ללא חיוב</li>
          <li>תשלומים מעובדים על ידי Apple דרך App Store (StoreKit 2)</li>
          <li>ביטול מנוי: דרך הגדרות Apple שלכם לפחות 24 שעות לפני חידוש אוטומטי</li>
          <li>לא מוצעים החזרים כספיים על תקופות שהחלו, אלא אם נדרש על פי חוק</li>
        </ul>
        <p><strong>Android:</strong> תשלומים עדיין לא פעילים. בעתיד, יעברו דרך Google Play Billing.</p>
      </Section>

      <Section title="6. קניין רוחני">
        <p>כל התוכן, העיצוב, והקוד של האפליקציה שייכים למפתחת. אין להעתיק, לשכפל, או להפיץ בלא אישור.</p>
      </Section>

      <Section title="7. תוכן משתמש">
        <p>אתם אחראים לתוכן שאתם יוצרים (שמות קבוצות, שמות תצוגה). אין לפרסם תוכן פוגעני, גזעני, או לא חוקי.</p>
      </Section>

      <Section title="8. הגבלת אחריות">
        <p>השירות ניתן &quot;כמות שהוא&quot; (as is). איננו אחראים לנזקים הנובעים מהפסקת שירות, אובדן נתונים, או תקלות טכניות שאינן בשליטתנו.</p>
      </Section>

      <Section title="9. שינויים בשירות">
        <p>אנחנו רשאים לשנות או להפסיק חלקים מהשירות בהתראה מוקדמת ככל האפשר.</p>
      </Section>

      <Section title="10. שינויים בתנאים">
        <p>שינויים מהותיים יודעו לפחות 14 ימים מראש דרך האפליקציה.</p>
      </Section>

      <Section title="11. דין וסמכות שיפוט">
        <p>תנאים אלו כפופים לדיני מדינת ישראל. כל מחלוקת תידון בבתי המשפט המוסמכים בתל אביב.</p>
      </Section>

      <Section title="12. יצירת קשר">
        <p><a href="mailto:adkanapp@gmail.com" className="text-green hover:underline">adkanapp@gmail.com</a></p>
      </Section>

      <LegalNav current="terms" />
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="font-display font-bold text-xl mb-3 text-foreground">{title}</h2>
      <div className="text-foreground/80 space-y-2 [&_ul]:space-y-1.5 [&_ul]:list-disc [&_ul]:ps-5">{children}</div>
    </section>
  );
}

function LegalNav({ current }: { current: string }) {
  const links = [
    { href: "/legal/privacy", label: "מדיניות פרטיות", key: "privacy" },
    { href: "/legal/terms", label: "תנאי שימוש", key: "terms" },
    { href: "/legal/contact", label: "צרו קשר", key: "contact" },
  ];
  return (
    <nav className="mt-12 pt-8 border-t border-border flex flex-wrap gap-4 text-sm">
      {links.map((l) => (
        <Link key={l.key} href={l.href} className={l.key === current ? "text-green font-semibold" : "text-muted hover:text-foreground transition-colors"}>
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
