"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface NavigationProps {
  isActive: boolean
  onNavigate: (section: string) => void
}

export default function Navigation({ isActive, onNavigate }: NavigationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const navItems = [
    { title: "Projects", id: "projects", description: "프로젝트" },
    { title: "Experience", id: "experience", description: "경험" },
    { title: "Contact", id: "contact", description: "연락처" },
  ]

  return (
    <div
      ref={ref}
      className="container mx-auto px-4 max-w-4xl flex items-center justify-center"
      style={{ opacity: isActive ? 1 : 0.3, transition: "opacity 0.8s ease" }}
    >
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-600 text-lg">포트폴리오를 통해 저의 프로젝트와 경험을 확인하실 수 있습니다.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              onClick={() => onNavigate(item.id)}
              className="bg-gray-50 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-100 transition-colors border border-gray-200"
            >
              <h3 className="text-2xl font-medium text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
