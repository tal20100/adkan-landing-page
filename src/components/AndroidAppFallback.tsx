'use client'

import { useEffect, useState } from 'react'

interface Props {
  deepLinkUrl: string
}

export default function AndroidAppFallback({ deepLinkUrl }: Props) {
  const [showFallback, setShowFallback] = useState(false)

  useEffect(() => {
    window.location.href = deepLinkUrl

    const timer = window.setTimeout(() => {
      if (document.visibilityState === 'visible' && !document.hidden) {
        setShowFallback(true)
      }
    }, 1500)

    return () => window.clearTimeout(timer)
  }, [deepLinkUrl])

  if (!showFallback) return null

  return (
    <div
      dir="rtl"
      style={{
        fontSize: '0.95rem',
        color: '#c0c0dd',
        maxWidth: '26rem',
        lineHeight: 1.6,
        margin: '1.5rem 0 0',
      }}
    >
      <p style={{ margin: '0 0 0.75rem' }}>
        צור קשר עם המפתח ב-
        <a
          href="https://instagram.com/adkanapp"
          style={{
            color: '#26AE61',
            textDecoration: 'none',
            fontWeight: 700,
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        {' '} כדי לקבל את ה-APK
      </p>
      <p
        dir="ltr"
        style={{
          margin: '0.75rem 0 0',
          color: '#8888aa',
          fontSize: '0.9rem',
        }}
      >
        Contact us on{' '}
        <a
          href="https://instagram.com/adkanapp"
          style={{
            color: '#8888aa',
            textDecoration: 'underline',
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram (@adkanapp)
        </a>
        {' '} to get the APK
      </p>
    </div>
  )
}
