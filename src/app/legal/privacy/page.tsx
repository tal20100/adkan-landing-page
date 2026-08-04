import Link from "next/link";

export default function PrivacyPage() {
  return (
    <article dir="rtl">
      <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block">
        → חזרה לדף הבית
      </Link>
      <h1 className="font-display font-bold text-3xl mb-2">מדיניות פרטיות</h1>
      <p className="text-muted text-sm mb-2">עודכן לאחרונה: אוגוסט 2026</p>
      <div className="inline-flex items-center gap-2 text-sm text-green border border-green/20 bg-green/5 rounded-full px-4 py-1.5 mb-8">
        ✓ לא מוכרים נתונים · לא מעקב · לא פרסומות
      </div>

      <p className="text-foreground/80 mb-8">
        עד כאן (AdKan) היא אפליקציה לניהול זמן מסך עם תחרות חברתית, זמינה ב-iOS וב-Android. אנחנו לוקחים פרטיות ברצינות ומאמינים שאפשר לבנות מוצר מעולה בלי לאסוף יותר ממה שצריך.
      </p>

      <Section title="מה אנחנו אוספים">
        <ul>
          <li><strong>מזהה אנונימי</strong> — מזהה ייחודי (UUID) שנוצר דרך כניסה, לא קשור למזהה המכשיר שלכם.</li>
          <li><strong>שם תצוגה ואמוג׳י פרופיל</strong> — שאתם בוחרים בהגדרות המשתמש, לצורך הלידרבורד וקבוצות.</li>
          <li><strong>יעד זמן מסך יומי</strong> — מספר הדקות שאתם קובעים כמטרה.</li>
          <li><strong>סה״כ זמן מסך יומי</strong> — מספר דקות אחד בלבד ליום משתמש. לא אילו אפליקציות, לא היסטוריית גלישה — רק הסכום.</li>
          <li><strong>שמות וסמלי קבוצות</strong> — קבוצות שיצרתם.</li>
          <li><strong>פעולות חברות וקבוצה</strong> — הוספת/קבלת חברים, הצטרפות/יציאה מקבוצות.</li>
          <li><strong>סטטוס מנוי</strong> — האם משתמש בגרסה בחינם או בתשלום (iOS בלבד כרגע).</li>
        </ul>
      </Section>

      <Section title="מה אנחנו לא אוספים">
        <ul>
          <li>אילו אפליקציות אתם משתמשים בהן (רק הסכום היומי)</li>
          <li>היסטוריית גלישה</li>
          <li>מיקום</li>
          <li>אנשי קשר</li>
          <li>תמונות או וידאו</li>
          <li>מידע פיננסי (תשלומים מטופלים על ידי Apple או Google בלבד)</li>
          <li>נתוני בריאות</li>
          <li>מזהי מכשיר (IMEI, Android ID, מזהי פרסום)</li>
        </ul>
      </Section>

      <Section title="כניסה (Sign-In)">
        <p><strong>ב-iOS:</strong> כניסה דרך Apple Sign-In — לא מעבירים שום מידע אישי מחשבון Apple לשרתנו. רק ה-token עובר לאימות, וחוזר חזרה מזהה ייחודי.</p>
        <p><strong>ב-Android:</strong> כניסה דרך Google Sign-In דרך Credential Manager של Android — באותה דרך, רק ה-token עובר לאימות, ולא מעבירים מידע אישי מהחשבון.</p>
      </Section>

      <Section title="זמן המסך — נשאר במכשיר שלכם">
        <p><strong>ב-iOS:</strong> אנחנו משתמשים ב-API של Apple (DeviceActivity / FamilyControls) למדידת זמן מסך. כל הנתונים הגולמיים נשארים במכשיר שלכם. רק הסכום היומי (מספר דקות) עולה לשרת שלנו.</p>
        <p><strong>ב-Android:</strong> אנחנו משתמשים ב-UsageStatsManager (API של Android לניטור שימוש). כך גם — כל הנתונים הגולמיים נשארים במכשיר, רק הסכום היומי עולה לשרת.</p>
      </Section>

      <Section title="עוצר אפליקציות (מצב כללי)">
        <p>אם בחרתם בתכונת ה"עוצר אפליקציות" (לחסום גישה לאפליקציה כשמגיעים ליעד), אנחנו משתמשים ב-API של המכשיר כדי לגלות איזו אפליקציה בחזית בהווה:</p>
        <p><strong>ב-iOS:</strong> ShieldConfiguration / ShieldAction extensions — מזהה רק את האפליקציה בפוקוס כרגע, לא קוראת תוכן מסך.</p>
        <p><strong>ב-Android:</strong> Accessibility API — מזהה את האפליקציה בחזית בלבד, לא קוראת טקסט או תוכן.</p>
        <p>אפילו במקרה זה, שום מידע על הגלישה או תוכן מסך לא עוזב את המכשיר.</p>
      </Section>

      <Section title="איך אנחנו משתמשים במידע">
        <ul>
          <li>הצגת הלידרבורד לחברי הקבוצה</li>
          <li>מעקב אחר סטריק וביצועים לאורך זמן</li>
          <li>שליחת התראות אם הפעלתם</li>
          <li>ניהול קבוצות וחברות</li>
        </ul>
      </Section>

      <Section title="שיתוף עם צדדים שלישיים">
        <p>אנחנו לא מוכרים ולא חולקים נתונים לצרכי פרסום. אנחנו משתמשים ב-<strong>Supabase</strong> (שרתים באיחוד האירופי — פרנקפורט) לאחסון נתוני המשתמשים, תחת הסכמי עיבוד נתונים תואמי GDPR.</p>
      </Section>

      <Section title="מנויים ותשלומים">
        <p><strong>iOS:</strong> מנויים מעובדים דרך App Store (StoreKit 2). Apple מטפלת בתשלום ובביטול.</p>
        <p><strong>Android:</strong> תשלומים עדיין לא פעילים. בעתיד, יעברו דרך Google Play Billing.</p>
      </Section>

      <Section title="שמירת נתונים">
        <p>הנתונים נשמרים בשרתים באירופה. הנתונים נשמרים כל עוד החשבון פעיל. ניתן לבקש מחיקה מלאה בכל עת — הנתונים יימחקו בתוך 30 ימים.</p>
      </Section>

      <Section title="הזכויות שלכם (GDPR)">
        <ul>
          <li><strong>גישה</strong> — לראות מה שמור אצלנו</li>
          <li><strong>תיקון</strong> — לשנות שם תצוגה, אמוג׳י, או יעד יומי</li>
          <li><strong>מחיקה</strong> — לבקש מחיקת כל הנתונים (דרך הגדרות האפליקציה או מייל)</li>
          <li><strong>ניוד</strong> — לקבל עותק של הנתונים שלכם בפורמט קריא</li>
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

      <LegalNav current="privacy" />
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
