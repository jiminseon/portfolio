"use client"

import { motion } from "framer-motion"
import { Mail, Github, ArrowUp } from "lucide-react"

interface SideNavigationProps {
  activeSection: string
  onNavigate: (section: string) => void
}

export default function SideNavigation({ activeSection, onNavigate }: SideNavigationProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const sections = ["intro", "about", "navigation", "projects"]
  if (activeSection === "projectDetail") {
    sections.push("projectDetail")
  }
  sections.push("experience", "contact")

  return (
    <motion.div
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 4 }}
    >
      <button
        onClick={() => window.open("mailto:pitapatsun@gmail.com")}
        className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
        aria-label="Send email"
      >
        <Mail size={20} className="text-gray-600" />
      </button>

      <button
        onClick={() => window.open("https://github.com/jiminseon", "_blank")}
        className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
        aria-label="GitHub profile"
      >
        <Github size={20} className="text-gray-600" />
      </button>

      <button
        onClick={scrollToTop}
        className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="text-gray-600" />
      </button>

      {/* Section indicators */}
      <div className="flex flex-col gap-3 mt-4">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => onNavigate(section)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === section ? "bg-red-500 scale-125" : "bg-gray-400"
            }`}
            aria-label={`Navigate to ${section} section`}
          />
        ))}
      </div>
    </motion.div>
  )
}
