import Link from "next/link";

export default function ContactPage() {
  return (
    <article dir="rtl">
      <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block">
        → חזרה לדף הבית
      </Link>
      <h1 className="font-display font-bold text-3xl mb-8">צרו קשר</h1>

      <p className="text-foreground/80 mb-8">
        יש לכם שאלה, בעיה טכנית, בקשה למחיקת נתונים, או סתם רוצים להגיד שלום?
      </p>

      <div className="rounded-2xl bg-surface border border-border p-6 mb-8">
        <p className="text-sm text-muted mb-1">מייל</p>
        <a href="mailto:adkanapp@gmail.com" className="text-lg font-semibold text-green hover:underline">
          adkanapp@gmail.com
        </a>
        <p className="text-sm text-muted mt-3">אנחנו עושים מאמץ לענות תוך 48 שעות בימי עסקים.</p>
      </div>

      <section className="mb-8">
        <h2 className="font-display font-bold text-xl mb-3 text-foreground">בקשות פרטיות</h2>
        <p className="text-foreground/80">
          למחיקת חשבון ונתונים, שלחו מייל עם הכותרת &quot;מחיקת חשבון&quot; ונטפל בזה תוך 7 ימי עסקים.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-display font-bold text-xl mb-3 text-foreground">דיווח על באגים</h2>
        <p className="text-foreground/80">
          תארו את הבעיה, גרסת האייפון, וגרסת האפליקציה — ונחזור אליכם בהקדם.
        </p>
      </section>

      <LegalNav current="contact" />
    </article>
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
