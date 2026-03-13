"use client"

import { useEffect, useState } from "react"
import { getNextNewYear, getTimeParts } from "@/lib/time"

type Phase = "countdown" | "final_countdown" | "celebration"

export function useNewYearCountdown() {
  const [timeLeft, setTimeLeft] = useState("")
  const [phase, setPhase] = useState<Phase>("countdown")

  useEffect(() => {
    const target = getNextNewYear()

    const interval = setInterval(() => {
      const { days, hours, minutes, seconds, diffMs } = getTimeParts(target)

      if (diffMs <= 0) {
        setPhase("celebration")
        setTimeLeft("00:00:00")
        return
      }

      if (diffMs <= 12_000) {
        setPhase("final_countdown")
      } else {
        setPhase("countdown")
      }

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return { timeLeft, phase }
}

