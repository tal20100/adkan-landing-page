import Image from 'next/image'

function AppleLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

export const runtime = 'edge'

interface Props {
  searchParams: Promise<{ group?: string }>
}

export default async function JoinPage({ searchParams }: Props) {
  const params = await searchParams
  const group = typeof params.group === 'string' ? params.group : null
  const appSchemeUrl = group ? `adkan://join?group=${group}` : null

  return (
    <main
      style={{
        minHeight: '100dvh',
        backgroundColor: '#0F0F24',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        textAlign: 'center',
      }}
    >
      {/* Logo */}
      <Image
        src="/logo.png"
        alt="AdKan עד כאן"
        width={80}
        height={80}
        style={{ borderRadius: '20px', marginBottom: '1.5rem' }}
        priority
      />

      {/* App name */}
      <p
        style={{
          fontSize: '1rem',
          color: '#26AE61',
          fontWeight: 600,
          letterSpacing: '0.05em',
          marginBottom: '0.5rem',
        }}
      >
        עד כאן / AdKan
      </p>

      {group ? (
        <>
          {/* Invite heading */}
          <h1
            style={{
              fontSize: 'clamp(1.4rem, 5vw, 2rem)',
              fontWeight: 700,
              lineHeight: 1.3,
              margin: '0 0 0.75rem',
            }}
          >
            הוזמנת להצטרף לקבוצה
          </h1>
          <p
            style={{
              fontSize: '1rem',
              color: '#a0a0c0',
              marginBottom: '0.25rem',
            }}
          >
            You&apos;ve been invited to join a group
          </p>

          {/* Tagline */}
          <p
            style={{
              fontSize: '0.95rem',
              color: '#c0c0dd',
              maxWidth: '26rem',
              lineHeight: 1.6,
              margin: '1.25rem 0 2.5rem',
            }}
          >
            תתחרו עם חברים על פחות מסכים — כל יום מחדש
            <br />
            <span style={{ color: '#8888aa' }}>
              Compete with friends on less screen time — every day
            </span>
          </p>

          {/* Primary — open in app */}
          {appSchemeUrl && <a
            href={appSchemeUrl}
            style={{
              display: 'block',
              width: '100%',
              maxWidth: '20rem',
              padding: '1rem',
              backgroundColor: '#26AE61',
              color: '#ffffff',
              borderRadius: '14px',
              fontWeight: 700,
              fontSize: '1.05rem',
              textDecoration: 'none',
              marginBottom: '0.875rem',
            }}
          >
            פתח ב-עד כאן / Open in AdKan
          </a>}

          {/* Secondary — App Store */}
          <a
            href="https://apps.apple.com/il/app/adkan/id6768065458"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              width: '100%',
              maxWidth: '20rem',
              padding: '1rem',
              backgroundColor: 'transparent',
              color: '#ffffff',
              borderRadius: '14px',
              border: '2px solid rgba(255,255,255,0.2)',
              fontWeight: 700,
              fontSize: '1.05rem',
              textDecoration: 'none',
            }}
          >
            <AppleLogo />
            הורד את עד כאן / Download AdKan
          </a>
        </>
      ) : (
        <>
          {/* No group — simple download page */}
          <h1
            style={{
              fontSize: 'clamp(1.4rem, 5vw, 2rem)',
              fontWeight: 700,
              lineHeight: 1.3,
              margin: '0 0 0.75rem',
            }}
          >
            הורד את עד כאן
          </h1>
          <p style={{ fontSize: '1rem', color: '#a0a0c0', marginBottom: '0.5rem' }}>
            Download AdKan
          </p>
          <p
            style={{
              fontSize: '0.95rem',
              color: '#c0c0dd',
              maxWidth: '26rem',
              lineHeight: 1.6,
              margin: '1.25rem 0 2.5rem',
            }}
          >
            תתחרו עם חברים על פחות מסכים — כל יום מחדש
            <br />
            <span style={{ color: '#8888aa' }}>
              Compete with friends on less screen time — every day
            </span>
          </p>

          <a
            href="https://apps.apple.com/il/app/adkan/id6768065458"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              width: '100%',
              maxWidth: '20rem',
              padding: '1rem',
              backgroundColor: '#26AE61',
              color: '#ffffff',
              borderRadius: '14px',
              fontWeight: 700,
              fontSize: '1.05rem',
              textDecoration: 'none',
            }}
          >
            <AppleLogo />
            הורד את עד כאן / Download AdKan
          </a>
        </>
      )}
    </main>
  )
}
