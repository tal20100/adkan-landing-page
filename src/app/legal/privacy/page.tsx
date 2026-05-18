"use client";

import { useLang } from "@/lib/LangContext";
import Link from "next/link";

export default function PrivacyPage() {
  const { lang } = useLang();

  if (lang === "he") return <HePrivacy />;
  return <EnPrivacy />;
}

function HePrivacy() {
  return (
    <article className="prose-legal" dir="rtl">
      <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block">
        → חזרה לדף הבית
      </Link>
      <h1 className="font-display font-bold text-3xl mb-2">מדיניות פרטיות</h1>
      <p className="text-muted text-sm mb-2">עודכן לאחרונה: מאי 2026</p>
      <div className="inline-flex items-center gap-2 text-sm text-green border border-green/20 bg-green/5 rounded-full px-4 py-1.5 mb-8">
        ✓ לא מוכרים נתונים · לא מעקב · לא פרסומות
      </div>

      <p className="text-foreground/80 mb-8">
        עד כאן (AdKan) היא אפליקציה לניהול זמן מסך עם תחרות חברתית. אנחנו לוקחים פרטיות ברצינות ומאמינים שאפשר לבנות מוצר מעולה בלי לאסוף יותר ממה שצריך.
      </p>

      <Section title="מה אנחנו אוספים">
        <ul>
          <li><strong>מזהה אנונימי</strong> — מזהה ייחודי שנוצר דרך כניסה עם Apple, ללא שם או מייל.</li>
          <li><strong>סה״כ זמן מסך יומי</strong> — מספר דקות אחד בלבד ליום. לא אילו אפליקציות, לא היסטוריית גלישה — רק הסכום.</li>
          <li><strong>שם תצוגה ואמוג׳י</strong> — שאתם בוחרים, לצורך הלידרבורד.</li>
          <li><strong>שמות קבוצות וחברות</strong> — קבוצות שיצרתם ומשתמשים שהזמנתם.</li>
        </ul>
      </Section>

      <Section title="מה אנחנו לא אוספים">
        <ul>
          <li>אילו אפליקציות אתם משתמשים בהן</li>
          <li>היסטוריית גלישה</li>
          <li>מיקום</li>
          <li>אנשי קשר</li>
          <li>מידע פיננסי (תשלומים מטופלים על ידי Apple בלבד)</li>
          <li>מזהי פרסום (IDFA)</li>
          <li>נתוני בריאות</li>
        </ul>
      </Section>

      <Section title="זמן המסך — נשאר במכשיר">
        <p>אנחנו משתמשים ב-API של Apple‏ (DeviceActivity / ScreenTime) למדידת זמן מסך. כל הנתונים הגולמיים נשארים במכשיר שלכם. רק הסכום היומי (מספר דקות) עולה לשרת.</p>
      </Section>

      <Section title="איך אנחנו משתמשים במידע">
        <ul>
          <li>הצגת הלידרבורד לחברי הקבוצה</li>
          <li>מעקב אחר סטריק וביצועים לאורך זמן</li>
          <li>שליחת התראות אם הפעלתם</li>
        </ul>
      </Section>

      <Section title="שיתוף עם צדדים שלישיים">
        <p>אנחנו לא מוכרים ולא חולקים נתונים לצרכי פרסום. אנחנו משתמשים ב-<strong>Supabase</strong> (שרתים באיחוד האירופי — פרנקפורט) לאחסון נתוני המשתמשים, תחת הסכמי עיבוד נתונים תואמי GDPR.</p>
      </Section>

      <Section title="שמירת נתונים">
        <p>הנתונים נשמרים בשרתים באירופה. אנחנו שומרים נתוני זמן מסך ל-90 יום. ניתן לבקש מחיקה מלאה בכל עת.</p>
      </Section>

      <Section title="הזכויות שלכם (GDPR)">
        <ul>
          <li><strong>גישה</strong> — לראות מה שמור אצלנו</li>
          <li><strong>תיקון</strong> — לשנות שם תצוגה ואמוג׳י</li>
          <li><strong>מחיקה</strong> — לבקש מחיקת כל הנתונים (דרך הגדרות האפליקציה או מייל)</li>
          <li><strong>ניוד</strong> — לקבל עותק של הנתונים שלכם</li>
        </ul>
        <p>לבקשות: <a href="mailto:adkanapp@gmail.com" className="text-green hover:underline">adkanapp@gmail.com</a></p>
      </Section>

      <Section title="ילדים">
        <p>האפליקציה אינה מיועדת לילדים מתחת לגיל 13. אנחנו לא אוספים ביודעין מידע מילדים.</p>
      </Section>

      <Section title="שינויים במדיניות">
        <p>שינויים מהותיים יודעו בתוך האפליקציה. התאריך בראש הדף מציין את המועד העדכני ביותר.</p>
      </Section>

      <Section title="יצירת קשר">
        <p><a href="mailto:adkanapp@gmail.com" className="text-green hover:underline">adkanapp@gmail.com</a></p>
      </Section>

      <LegalNav current="privacy" lang="he" />
    </article>
  );
}

function EnPrivacy() {
  return (
    <article className="prose-legal">
      <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block">
        ← Back to home
      </Link>
      <h1 className="font-display font-bold text-3xl mb-2">Privacy Policy</h1>
      <p className="text-muted text-sm mb-2">Last updated: May 2026</p>
      <div className="inline-flex items-center gap-2 text-sm text-green border border-green/20 bg-green/5 rounded-full px-4 py-1.5 mb-8">
        ✓ No data selling · No tracking · No ads
      </div>

      <p className="text-foreground/80 mb-8">
        AdKan is a screen time management app with social competition. We take privacy seriously and believe you can build a great product without collecting more than necessary.
      </p>

      <Section title="What We Collect">
        <ul>
          <li><strong>Anonymous identifier</strong> — A unique ID from Sign in with Apple. No name or email unless you choose to share.</li>
          <li><strong>Daily screen time total</strong> — One integer per day: total minutes on screen. Not which apps, not browsing history — just the sum.</li>
          <li><strong>Display name and emoji</strong> — What you set, used for the group leaderboard.</li>
          <li><strong>Group names and memberships</strong> — Groups you create and members you invite.</li>
        </ul>
      </Section>

      <Section title="What We Don't Collect">
        <ul>
          <li>Which apps you use</li>
          <li>Browsing history</li>
          <li>Location</li>
          <li>Contacts</li>
          <li>Financial information (payments handled by Apple)</li>
          <li>Advertising identifiers (IDFA)</li>
          <li>Health data</li>
        </ul>
      </Section>

      <Section title="Screen Time Data Stays on Device">
        <p>We use Apple's DeviceActivity / ScreenTime API to measure screen time. All raw data stays on your device and is never sent to our servers. Only the daily total (minutes) is uploaded.</p>
      </Section>

      <Section title="How We Use Your Information">
        <ul>
          <li>Show the leaderboard to your group members</li>
          <li>Track your streak and performance over time</li>
          <li>Send notifications if enabled</li>
        </ul>
      </Section>

      <Section title="Third-Party Services">
        <p>We do not sell or share data for advertising. We use <strong>Supabase</strong> (EU servers, Frankfurt) to store user data and leaderboard scores under GDPR-compliant data processing agreements.</p>
      </Section>

      <Section title="Data Retention">
        <p>Data is stored on servers in Europe. We retain screen time data for 90 days. You can request full deletion at any time.</p>
      </Section>

      <Section title="Your Rights (GDPR)">
        <ul>
          <li><strong>Access</strong> — See what we store about you</li>
          <li><strong>Rectification</strong> — Change your display name and emoji</li>
          <li><strong>Erasure</strong> — Request deletion of all your data (via app settings or email)</li>
          <li><strong>Portability</strong> — Receive a copy of your data</li>
        </ul>
        <p>Requests: <a href="mailto:adkanapp@gmail.com" className="text-green hover:underline">adkanapp@gmail.com</a></p>
      </Section>

      <Section title="Children">
        <p>This app is not intended for children under 13. We do not knowingly collect data from children.</p>
      </Section>

      <Section title="Changes">
        <p>Material changes will be announced in the app. The date at the top reflects the most recent update.</p>
      </Section>

      <Section title="Contact">
        <p><a href="mailto:adkanapp@gmail.com" className="text-green hover:underline">adkanapp@gmail.com</a></p>
      </Section>

      <LegalNav current="privacy" lang="en" />
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

function LegalNav({ current, lang }: { current: "privacy" | "terms" | "contact"; lang: string }) {
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
        <Link
          key={l.key}
          href={l.href}
          className={l.key === current ? "text-green font-semibold" : "text-muted hover:text-foreground transition-colors"}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
