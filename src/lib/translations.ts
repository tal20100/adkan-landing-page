export type Lang = "he" | "en";

export const translations = {
  he: {
    nav: {
      features: "פיצ'רים",
      pricing: "מחירים",
      privacy: "פרטיות",
      faq: "שאלות",
    },
    hero: {
      badge: "בקרוב ב-App Store",
      headline: "עד כאן.",
      subheadline: "הזמן שלך, בשליטה שלך.",
      description:
        "התחרו עם חברים על מי משתמש פחות בטלפון. עקבו אחרי סטריקים, חסמו הסחות דעת, ותנצחו בחזרה את היום שלכם.",
      cta: "הורידו מה-App Store",
      ctaSub: "חינם · iOS 17+",
    },
    howItWorks: {
      title: "איך זה עובד",
      subtitle: "שלושה צעדים. זהו.",
      steps: [
        {
          number: "01",
          title: "הגדירו יעד",
          description:
            "בחרו כמה זמן מסך ליום. האפליקציה עוקבת אוטומטית דרך Apple Screen Time.",
        },
        {
          number: "02",
          title: "התחרו עם חברים",
          description:
            "פתחו קבוצה, הזמינו חברים. תראו מי משתמש הכי פחות כל יום. צברו סטריקים ביחד.",
        },
        {
          number: "03",
          title: "חסמו מה שגונב לכם זמן",
          description:
            "בחרו אפליקציות לחסימה. כשתנסו לפתוח אותן, מסך מגן עוצר אתכם. Hard Mode מוסיף חיכוך נוסף.",
        },
      ],
    },
    features: {
      title: "הכל מה שצריך כדי לנצח",
      subtitle: "פיצ'רים חינם + פרימיום שהופכות את זה למשחק",
      items: [
        {
          title: "תחרות קבוצתית",
          description:
            "הזמינו חברים, פתחו קבוצה ותראו מי באמת שולט בטלפון שלו. עד 3 קבוצות בחינם.",
          icon: "trophy",
          premium: false,
        },
        {
          title: "לוח סטריקים",
          description:
            "כמו GitHub Contributions — כל יום ירוק הוא יום שניצחתם. אל תשברו את הרצף.",
          icon: "calendar",
          premium: false,
        },
        {
          title: "חסימה חכמה",
          description:
            "חסמו אפליקציות שגונבות לכם הכי הרבה זמן. ברמת מערכת ההפעלה, בלי לעקוף.",
          icon: "shield",
          premium: false,
        },
        {
          title: "המוח שלכם",
          description:
            "מסקוט שמגיב לשימוש שלכם — שמח כשאתם מצטיינים, נבהל כשאתם מגזימים.",
          icon: "brain",
          premium: false,
        },
        {
          title: "Hard Mode",
          description:
            "ספירה לאחור, תרגיל חשבון, או הקלדת משפט — תצטרכו באמת לרצות לפתוח את האפליקציה.",
          icon: "lock",
          premium: true,
        },
        {
          title: "אתגרים שבועיים",
          description:
            "כל שבוע אתגר חדש עם הקבוצות שלכם. מי יסיים ראשון?",
          icon: "rocket",
          premium: true,
        },
      ],
    },
    mascot: {
      title: "הכירו את המוח שלכם",
      subtitle: "הוא משתנה לפי השימוש שלכם. כל יום.",
      states: [
        { label: "מצטיין", emoji: "🤩", description: "מתחת ל-50% מהיעד", color: "green" },
        { label: "בכיוון", emoji: "😊", description: "50-100% מהיעד", color: "green-light" },
        { label: "מחליק", emoji: "😰", description: "100-150% מהיעד", color: "warning" },
        { label: "אזהרה", emoji: "😫", description: "150-200% מהיעד", color: "danger" },
        { label: "ספירלה", emoji: "🤯", description: "מעל 200% מהיעד", color: "danger" },
      ],
    },
    blocking: {
      title: "חסימה שבאמת עובדת",
      subtitle: "ברמת מערכת ההפעלה. בלי טריקים.",
      shieldTitle: "⛔ האפליקציה חסומה",
      shieldMessage: "חזרו ליום שלכם. אתם יותר חזקים מסקרול.",
      hardModeTitle: "Hard Mode",
      hardModeItems: [
        "ספירה לאחור של 30 שניות",
        "פתרון תרגיל חשבון",
        "הקלדת \"אני לא צריך את זה עכשיו\"",
      ],
    },
    leaderboard: {
      title: "תחרות אמיתית. מוטיבציה אמיתית.",
      subtitle: "ככה נראה לוח התוצאות בקבוצה שלכם",
      groupName: "החבר׳ה 🔥",
      today: "היום",
      players: [
        { name: "נועה", time: "47 דק׳", rank: 1, trend: "down" },
        { name: "איתי", time: "1ש׳ 12 דק׳", rank: 2, trend: "down" },
        { name: "שירה", time: "1ש׳ 34 דק׳", rank: 3, trend: "up" },
        { name: "דניאל", time: "2ש׳ 05 דק׳", rank: 4, trend: "up" },
        { name: "אתם 😎", time: "—", rank: 5, trend: "neutral" },
      ],
    },
    privacy: {
      title: "מספר אחד. זה כל מה שיוצא מהטלפון.",
      description:
        "נתוני זמן המסך שלכם נשארים על הטלפון. תמיד. אנחנו מסנכרנים רק מספר אחד — הסכום היומי — כדי שהחברים שלכם יראו את הלוח. זה הכל. בלי מעקב לפי אפליקציה. בלי פרופילים. בלי פרסומות. בלי מכירת מידע.",
      badge: "אפס גישה לנתוני אפליקציות",
      stats: [
        { value: "0", label: "אפליקציות שאנחנו רואים" },
        { value: "1", label: "מספר בודד — דקות ביום" },
        { value: "100%", label: "הנתונים שלכם — נשארים אצלכם" },
      ],
    },
    pricing: {
      title: "פשוט. שקוף. בלי הפתעות.",
      free: {
        name: "חינם",
        price: "₪0",
        period: "לתמיד",
        features: [
          "3 קבוצות עד 3 חברים",
          "לוח תוצאות יומי",
          "לוח סטריקים",
          "מסקוט המוח",
          "חסימה בסיסית",
          "ווידג׳ט למסך הבית",
        ],
        cta: "התחילו בחינם",
      },
      premium: {
        name: "פרימיום",
        price: "₪5.90",
        period: "לחודש",
        badge: "3 ימי ניסיון חינם",
        annual: "₪59.90/שנה — חסכו 15%",
        lifetime: "₪99.90 חד פעמי",
        features: [
          "קבוצות ללא הגבלה (עד 30 חברים)",
          "אתגרים שבועיים",
          "הגבלות לפי אפליקציה",
          "חסימה לפי שעות",
          "Hard Mode — שערי חיכוך",
          "מגן חסימה מותאם אישית",
          "תגיות פרימיום ומכפילי ניקוד",
          "סיכום שבועי + חודשי מפורט",
        ],
        cta: "נסו פרימיום בחינם",
      },
    },
    faq: {
      title: "שאלות נפוצות",
      items: [
        {
          q: "המידע שלי בטוח?",
          a: "כן. רק הסכום היומי הכולל מסתנכרן. אנחנו אף פעם לא רואים באילו אפליקציות השתמשתם.",
        },
        {
          q: "זה באמת חוסם אפליקציות?",
          a: "כן. חסימה ברמת מערכת ההפעלה דרך Apple Screen Time. בלי לעקוף.",
        },
        {
          q: "אפשר להשתמש לבד?",
          a: "כן, אבל זה הרבה יותר כיף (ואפקטיבי) עם חברים.",
        },
        {
          q: "מה אם אין לי אייפון?",
          a: "כרגע iOS בלבד. אנדרואיד בדרך.",
        },
      ],
    },
    footer: {
      tagline: "עד כאן. הזמן שלך, בשליטה שלך.",
      madeIn: "🇮🇱 נוצר בישראל",
      links: {
        privacy: "מדיניות פרטיות",
        terms: "תנאי שימוש",
        contact: "צרו קשר",
      },
      copyright: "© 2026 עד כאן. כל הזכויות שמורות.",
    },
  },
  en: {
    nav: {
      features: "Features",
      pricing: "Pricing",
      privacy: "Privacy",
      faq: "FAQ",
    },
    hero: {
      badge: "Coming Soon to App Store",
      headline: "Enough.",
      subheadline: "Your time. Your control.",
      description:
        "Compete with friends to use your phone less. Track streaks, block distractions, and win back your day.",
      cta: "Download on App Store",
      ctaSub: "Free · iOS 17+",
    },
    howItWorks: {
      title: "How it works",
      subtitle: "Three steps. That's it.",
      steps: [
        {
          number: "01",
          title: "Set your goal",
          description:
            "Choose your daily screen time target. The app tracks automatically via Apple Screen Time.",
        },
        {
          number: "02",
          title: "Compete with friends",
          description:
            "Create a group, invite friends. See who uses their phone the least each day. Build streaks together.",
        },
        {
          number: "03",
          title: "Block what steals your time",
          description:
            "Select apps to block. When you try to open them, a shield stops you. Hard Mode adds extra friction.",
        },
      ],
    },
    features: {
      title: "Everything you need to win",
      subtitle: "Free + Premium features that make it a game",
      items: [
        {
          title: "Group Competition",
          description:
            "Invite friends, create a group, and see who really controls their phone. Up to 3 groups free.",
          icon: "trophy",
          premium: false,
        },
        {
          title: "Streak Calendar",
          description:
            "Like GitHub Contributions — every green day is a day you won. Don't break the streak.",
          icon: "calendar",
          premium: false,
        },
        {
          title: "Smart Blocking",
          description:
            "Block apps that steal the most of your time. OS-level, no workarounds.",
          icon: "shield",
          premium: false,
        },
        {
          title: "Your Brain",
          description:
            "A mascot that reacts to your usage — happy when you're crushing it, panicking when you're not.",
          icon: "brain",
          premium: false,
        },
        {
          title: "Hard Mode",
          description:
            "Countdown timer, math problem, or type a phrase — you'll really have to want to open that app.",
          icon: "lock",
          premium: true,
        },
        {
          title: "Weekly Challenges",
          description:
            "New themed challenge every week with your groups. Who finishes first?",
          icon: "rocket",
          premium: true,
        },
      ],
    },
    mascot: {
      title: "Meet your brain",
      subtitle: "It changes based on your usage. Every day.",
      states: [
        { label: "Thriving", emoji: "🤩", description: "Under 50% of goal", color: "green" },
        { label: "On Track", emoji: "😊", description: "50-100% of goal", color: "green-light" },
        { label: "Slipping", emoji: "😰", description: "100-150% of goal", color: "warning" },
        { label: "Warning", emoji: "😫", description: "150-200% of goal", color: "danger" },
        { label: "Spiraling", emoji: "🤯", description: "Over 200% of goal", color: "danger" },
      ],
    },
    blocking: {
      title: "Blocking that actually works",
      subtitle: "OS-level. No tricks.",
      shieldTitle: "⛔ App Blocked",
      shieldMessage: "Get back to your day. You're stronger than the scroll.",
      hardModeTitle: "Hard Mode",
      hardModeItems: [
        "30-second countdown",
        "Solve a math problem",
        "Type \"I don't need this right now\"",
      ],
    },
    leaderboard: {
      title: "Real competition. Real motivation.",
      subtitle: "This is what your group leaderboard looks like",
      groupName: "The Squad 🔥",
      today: "Today",
      players: [
        { name: "Noa", time: "47 min", rank: 1, trend: "down" },
        { name: "Itay", time: "1h 12min", rank: 2, trend: "down" },
        { name: "Shira", time: "1h 34min", rank: 3, trend: "up" },
        { name: "Daniel", time: "2h 05min", rank: 4, trend: "up" },
        { name: "You 😎", time: "—", rank: 5, trend: "neutral" },
      ],
    },
    privacy: {
      title: "One number. That's all that leaves your phone.",
      description:
        "Your screen time data stays on your phone. Always. We only sync one number — your daily total — so your friends can see the leaderboard. That's it. No per-app tracking. No profiles. No ads. No selling your data.",
      badge: "Zero access to app data",
      stats: [
        { value: "0", label: "Apps we can see" },
        { value: "1", label: "Single number — daily minutes" },
        { value: "100%", label: "Your data stays yours" },
      ],
    },
    pricing: {
      title: "Simple. Transparent. No surprises.",
      free: {
        name: "Free",
        price: "$0",
        period: "Forever",
        features: [
          "3 groups of up to 3 friends",
          "Daily leaderboard",
          "Streak calendar",
          "Brain mascot",
          "Basic blocking",
          "Home screen widget",
        ],
        cta: "Start for free",
      },
      premium: {
        name: "Premium",
        price: "₪5.90",
        period: "/month",
        badge: "3-day free trial",
        annual: "₪59.90/year — save 15%",
        lifetime: "₪99.90 one-time",
        features: [
          "Unlimited groups (up to 30 members)",
          "Weekly challenges",
          "Per-app time limits",
          "Time-based blocking rules",
          "Hard Mode — friction gates",
          "Custom shield design",
          "Premium badges & score multipliers",
          "Weekly + monthly detailed reports",
        ],
        cta: "Try Premium free",
      },
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "Is my data safe?",
          a: "Yes. Only your total daily minutes are synced. We never see which apps you used.",
        },
        {
          q: "Does it actually block apps?",
          a: "Yes. OS-level blocking via Apple Screen Time. No workarounds.",
        },
        {
          q: "Can I use it alone?",
          a: "Yes, but it's way more fun (and effective) with friends.",
        },
        {
          q: "What if I don't have an iPhone?",
          a: "iOS only for now. Android coming soon.",
        },
      ],
    },
    footer: {
      tagline: "Enough. Your time, your control.",
      madeIn: "🇮🇱 Made in Israel",
      links: {
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        contact: "Contact",
      },
      copyright: "© 2026 AdKan. All rights reserved.",
    },
  },
} as const;
