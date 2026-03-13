
"use client"

import { useNewYearCountdown } from "@/features/countdown/useNewYearCountdown"

export default function Page() {
  const { timeLeft, phase } = useNewYearCountdown()

  if(phase==="celebration"){
    return (
      <div style={{textAlign:"center"}}>
        <h1 style={{fontSize:"48px",marginBottom:"20px"}}>Happy New Year!</h1>
        <video autoPlay muted playsInline controls style={{maxWidth:"600px"}}>
  <source src="/videos/default.mp4" type="video/mp4" />
        </video>
      </div>
    )
  }

  return (
    <div style={{textAlign:"center"}}>
      <h1 style={{fontSize:"40px",marginBottom:"20px"}}>New Year Countdown</h1>
      <div style={{fontSize:"48px",fontWeight:"bold"}}>{timeLeft}</div>
      {phase==="final_countdown" && <div style={{marginTop:"20px",fontSize:"24px",color:"red"}}>Final countdown!</div>}
    </div>
  )
}
