"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Introduction({ isActive }: { isActive: boolean }) {
  const [text, setText] = useState("")
  const fullText = "백엔드 개발자 지민선입니다."
  const subText = '"백엔드 로직을 설계할 때면, 보이지 않는 퍼즐을 맞추는 재미에 빠집니다."'

  useEffect(() => {
    if (isActive) {
      let i = 0
      setText("")
      const typingInterval = setInterval(() => {
        if (i < fullText.length) {
          setText(fullText.slice(0, i + 1))
          i++
        } else {
          clearInterval(typingInterval)
        }
      }, 80)

      return () => clearInterval(typingInterval)
    }
  }, [isActive])

  return (
    <div className="text-center px-4 max-w-4xl mx-auto">
      <motion.h1
        className="text-4xl md:text-6xl font-light text-gray-700 mb-8 tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {text}
        <motion.span
          className="inline-block w-1 h-12 md:h-16 bg-red-500 ml-2"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
        />
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 3 }}
      >
        {subText}
      </motion.p>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 4 }}
      >
        <div className="w-px h-16 bg-gray-300 mx-auto" />
        <p className="text-sm text-gray-500 mt-4 tracking-widest">SCROLL</p>
      </motion.div>
    </div>
  )
}
