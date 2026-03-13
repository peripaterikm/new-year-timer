export type TimeParts = {
  days: number
  hours: number
  minutes: number
  seconds: number
  diffMs: number
}

export function getNextNewYear() {
  const now = new Date()
  return new Date(now.getTime() + 20000)
}

export function getTimeParts(target: Date, now: Date = new Date()): TimeParts {
  const rawDiff = target.getTime() - now.getTime()
  const diffMs = rawDiff < 0 ? 0 : rawDiff

  const seconds = Math.floor(diffMs / 1000) % 60
  const minutes = Math.floor(diffMs / 60000) % 60
  const hours = Math.floor(diffMs / 3600000) % 24
  const days = Math.floor(diffMs / 86400000)

  return { days, hours, minutes, seconds, diffMs }
}

