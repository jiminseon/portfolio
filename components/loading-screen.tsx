"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  const loadingSteps = [
    "// Initializing development environment...",
    "// Loading dependencies...",
    "// Compiling portfolio components...",
    "// Optimizing for performance...",
    "// Starting development server...",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress < 20) setCurrentStep(0)
    else if (progress < 40) setCurrentStep(1)
    else if (progress < 60) setCurrentStep(2)
    else if (progress < 80) setCurrentStep(3)
    else setCurrentStep(4)
  }, [progress])

  return (
    <motion.div
      className="fixed inset-0 bg-[#1e1e1e] text-[#d4d4d4] font-mono flex flex-col items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-3xl px-4">
        <div className="bg-[#252526] rounded-t-lg p-2 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="mx-auto text-sm text-[#858585]">portfolio-terminal</div>
        </div>

        <div className="bg-[#1e1e1e] border border-[#252526] rounded-b-lg p-4 h-80 overflow-y-auto">
          <div className="space-y-2">
            <div className="text-[#569cd6]">$ npm run dev</div>

            {loadingSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: index <= currentStep ? 1 : 0,
                }}
                transition={{ duration: 0.3, delay: index * 0.5 }}
                className={`text-sm ${index <= currentStep ? "text-[#9cdcfe]" : "text-[#6a9955]"}`}
              >
                {step}
              </motion.div>
            ))}

            {currentStep >= 4 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 2.5 }}
                className="text-[#3c9e3c]"
              >
                ready - started server on 0.0.0.0:3000, url: http://localhost:3000
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: progress > 95 ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-[#dcdcaa] mt-4"
            >
              $ Loading complete! Redirecting to portfolio...
            </motion.div>
          </div>

          <motion.div
            className="mt-6 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="w-full bg-[#2d2d2d] rounded-full h-1.5">
              <motion.div
                className="bg-[#569cd6] h-1.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div className="ml-4 text-xs text-[#858585] min-w-[40px]">{progress}%</div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
