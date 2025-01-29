"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypingEffectProps {
  text: string
  speed?: number // Tốc độ gõ chữ (ms)
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let index = 0

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + (text[index] ?? ""))
        index++
      } else {
        setIsTyping(false)
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return (
    <div className="text-2xl font-extrabold">
      {displayedText}
      {isTyping ? (
        <motion.span
          animate={{ opacity: [0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        >
          {"|"}
        </motion.span>
      ) : null}
    </div>
  )
}

export default TypingEffect
