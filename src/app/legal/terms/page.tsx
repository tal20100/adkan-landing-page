"use client";

import { useLang } from "@/lib/LangContext";
import Link from "next/link";

export default function TermsPage() {
  const { lang } = useLang();
  if (lang === "he") return <HeTerms />;
  return <EnTerms />;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="font-display font-bold text-xl mb-3 text-foreground">{title}</h2>
      <div className="text-foreground/80 space-y-2 [&_ul]:space-y-1.5 [&_ul]:list-disc [&_ul]:ps-5">{children}</div>
    </section>
  );
}

function LegalNav({ current, lang }: { current: string; lang: string }) {
  const links =
    lang === "he"
      ? [
          { href: "/legal/privacy", label: "מדיניות פרטיות", key: "privacy" },
          { href: "/legal/terms", label: "תנאי שימוש", key: "terms" },
          { href: "/legal/contact", label: "צרו קשר", key: "contact" },
        ]
      : [
          { href: "/legal/privacy", label: "Privacy Policy", key: "privacy" },
          { href: "/legal/terms", label: "Terms of Use", key: "terms" },
          { href: "/legal/contact", label: "Contact", key: "contact" },
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

function HeTerms() {
  return (
    <article dir="rtl">
      <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block">
        → חזרה לדף הבית
      </Link>
      <h1 className="font-display font-bold text-3xl mb-2">תנאי שימוש</h1>
      <p className="text-muted text-sm mb-8">עודכן לאחרונה: מאי 2026</p>
      <p className="text-foreground/80 mb-8">ברוכים הבאים לעד כאן (AdKan). השימוש באפליקציה מהווה הסכמה לתנאים הבאים.</p>

      <Section title="1. הגדרות">
        <p>"השירות" — אפליקציית עד כאן לניהול זמן מסך.</p>
        <p>"משתמש" — כל מי שמשתמש באפליקציה.</p>
        <p>"תוכן משתמש" — שמות קבוצות, שמות תצוגה, ואמוג׳ים שהמשתמש יצר.</p>
      </Section>

      <Section title="2. זכאות לשימוש">
        <p>האפליקציה מיועדת למשתמשים בני 13 ומעלה. על ידי שימוש בה, אתם מאשרים שאתם עומדים בדרישה זו.</p>
      </Section>

      <Section title="3. חשבון משתמש">
        <p>הכניסה מתבצעת דרך Apple בלבד. אחריות אבטחת המכשיר וחשבון Apple שלכם היא שלכם.</p>
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
        <ul>
          <li>מנוי חודשי: ₪5.90/חודש</li>
          <li>מנוי שנתי: ₪59.90/שנה</li>
          <li>רישיון לכל החיים: ₪99.90 חד-פעמי</li>
          <li>כל שלושת המנויים כוללים תקופת ניסיון של 3 ימים ללא חיוב</li>
          <li>תשלומים מעובדים על ידי Apple דרך App Store</li>
          <li>ביטול מנוי: דרך הגדרות Apple שלכם לפחות 24 שעות לפני חידוש אוטומטי</li>
          <li>לא מוצעים החזרים כספיים על תקופות שהחלו, אלא אם נדרש על פי חוק</li>
        </ul>
      </Section>

      <Section title="6. קניין רוחני">
        <p>כל התוכן, העיצוב, והקוד של האפליקציה שייכים למפתח. אין להעתיק, לשכפל, או להפיץ בלא אישור.</p>
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

      <LegalNav current="terms" lang="he" />
    </article>
  );
}

function EnTerms() {
  return (
    <article>
      <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block">
        ← Back to home
      </Link>
      <h1 className="font-display font-bold text-3xl mb-2">Terms of Service</h1>
      <p className="text-muted text-sm mb-8">Last updated: May 2026</p>
      <p className="text-foreground/80 mb-8">Welcome to AdKan. By using the app, you agree to the following terms.</p>

      <Section title="1. Definitions">
        <p>"Service" — The AdKan screen time management app.</p>
        <p>"User" — Anyone who uses the app.</p>
        <p>"User Content" — Group names, display names, and emojis you create.</p>
      </Section>

      <Section title="2. Eligibility">
        <p>The app is intended for users aged 13 and older. By using it, you confirm that you meet this requirement.</p>
      </Section>

      <Section title="3. Account">
        <p>Login is via Apple only. You are responsible for the security of your device and Apple account.</p>
      </Section>

      <Section title="4. Permitted Use">
        <p>Permitted:</p>
        <ul>
          <li>Personal use for screen time management and friendly competition</li>
          <li>Creating groups and inviting people you know</li>
        </ul>
        <p className="mt-2">Not permitted:</p>
        <ul>
          <li>Harassing, damaging, or invading the privacy of others</li>
          <li>Attempting to circumvent technical restrictions</li>
          <li>Sharing account access with others</li>
        </ul>
      </Section>

      <Section title="5. Payments and Subscriptions">
        <ul>
          <li>Monthly: ₪5.90/month</li>
          <li>Annual: ₪59.90/year</li>
          <li>Lifetime: ₪99.90 one-time</li>
          <li>All plans include a 3-day free trial</li>
          <li>Payments processed by Apple through the App Store</li>
          <li>Cancellation: via Apple settings at least 24 hours before renewal</li>
          <li>No refunds for started periods unless required by law</li>
        </ul>
      </Section>

      <Section title="6. Intellectual Property">
        <p>All content, design, and code belong to the developer. Copying or distributing without permission is prohibited.</p>
      </Section>

      <Section title="7. User Content">
        <p>You are responsible for content you create (group names, display names). Do not post offensive, racist, or illegal content.</p>
      </Section>

      <Section title="8. Limitation of Liability">
        <p>The service is provided &quot;as is.&quot; We are not liable for damages from service interruptions, data loss, or technical issues beyond our control.</p>
      </Section>

      <Section title="9. Changes to Service">
        <p>We may modify or discontinue parts of the service with as much advance notice as possible.</p>
      </Section>

      <Section title="10. Changes to Terms">
        <p>Material changes will be announced at least 14 days in advance via the app.</p>
      </Section>

      <Section title="11. Governing Law">
        <p>These terms are governed by the laws of the State of Israel. Disputes will be resolved in the courts of Tel Aviv.</p>
      </Section>

      <Section title="12. Contact">
        <p><a href="mailto:adkanapp@gmail.com" className="text-green hover:underline">adkanapp@gmail.com</a></p>
      </Section>

      <LegalNav current="terms" lang="en" />
    </article>
  );
}
