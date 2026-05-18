"use client";

import { useLang } from "@/lib/LangContext";
import Link from "next/link";

export default function ContactPage() {
  const { lang } = useLang();
  if (lang === "he") return <HeContact />;
  return <EnContact />;
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

function HeContact() {
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
        <h2 className="font-display font-bold text-xl mb-3">בקשות פרטיות</h2>
        <p className="text-foreground/80">
          למחיקת חשבון ונתונים, שלחו מייל עם הכותרת &quot;מחיקת חשבון&quot; ונטפל בזה תוך 7 ימי עסקים.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-display font-bold text-xl mb-3">דיווח על באגים</h2>
        <p className="text-foreground/80">
          תארו את הבעיה, גרסת האייפון, וגרסת האפליקציה — ונחזור אליכם בהקדם.
        </p>
      </section>

      <LegalNav current="contact" lang="he" />
    </article>
  );
}

function EnContact() {
  return (
    <article>
      <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block">
        ← Back to home
      </Link>
      <h1 className="font-display font-bold text-3xl mb-8">Contact</h1>

      <p className="text-foreground/80 mb-8">
        Got a question, technical issue, data deletion request, or just want to say hi?
      </p>

      <div className="rounded-2xl bg-surface border border-border p-6 mb-8">
        <p className="text-sm text-muted mb-1">Email</p>
        <a href="mailto:adkanapp@gmail.com" className="text-lg font-semibold text-green hover:underline">
          adkanapp@gmail.com
        </a>
        <p className="text-sm text-muted mt-3">We aim to respond within 48 hours on business days.</p>
      </div>

      <section className="mb-8">
        <h2 className="font-display font-bold text-xl mb-3">Privacy Requests</h2>
        <p className="text-foreground/80">
          For account and data deletion, email with the subject &quot;Account Deletion&quot; and we&apos;ll handle it within 7 business days.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-display font-bold text-xl mb-3">Bug Reports</h2>
        <p className="text-foreground/80">
          Describe the issue, your iPhone model, and app version — and we&apos;ll get back to you.
        </p>
      </section>

      <LegalNav current="contact" lang="en" />
    </article>
  );
}
