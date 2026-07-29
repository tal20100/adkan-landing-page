export function isAndroidUserAgent(userAgent: string | null): boolean {
  if (!userAgent) return false
  return /Android/i.test(userAgent)
}
