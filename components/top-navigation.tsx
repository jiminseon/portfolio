"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface TopNavigationProps {
  activeSection: string
  onNavigate: (section: string) => void
  showNavigation: boolean
}

export default function TopNavigation({ activeSection, onNavigate, showNavigation }: TopNavigationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(showNavigation)
  }, [showNavigation])

  const navItems = [
    { id: "intro", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ]

  const handleNavigation = (sectionId: string) => {
    // Close the mobile menu first
    setIsMobileMenuOpen(false)

    // Small delay to allow menu closing animation to start
    setTimeout(() => {
      // Call the navigation function passed from parent
      onNavigate(sectionId)
    }, 50)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <motion.div
                className="text-xl font-light text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                지민선
              </motion.div>

              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.id ? "text-red-600" : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  className="text-gray-600 hover:text-gray-800 focus:outline-none"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle mobile menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile menu dropdown */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden overflow-hidden"
                >
                  <div className="px-2 pt-2 pb-4 space-y-1 bg-white/95 border-t border-gray-100">
                    {navItems.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: navItems.indexOf(item) * 0.05 }}
                      >
                        <button
                          onClick={() => handleNavigation(item.id)}
                          className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                            activeSection === item.id
                              ? "text-red-600 bg-red-50"
                              : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                          }`}
                        >
                          {item.label}
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
