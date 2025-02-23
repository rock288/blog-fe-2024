"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface TypingEffectProps {
  text: string
  speed?: number
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const indexRef = useRef(0)

  useEffect(() => {
    setDisplayedText("")
    setIsTyping(true)
    indexRef.current = 0

    const interval = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayedText((prev) => {
          return prev + text[indexRef.current]
        })
      } else {
        setIsTyping(false)
        clearInterval(interval)
      }
    }, speed)

    return () => {
      clearInterval(interval)
    }
  }, [text, speed])

  useEffect(() => {
    if (displayedText) {
      indexRef.current += 1
    }
  }, [displayedText])

  return (
    <div className="text-2xl font-extrabold">
      {displayedText}
      {isTyping && (
        <motion.span
          animate={{ opacity: [0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        >
          {"_"}
        </motion.span>
      )}
    </div>
  )
}

export default TypingEffect
