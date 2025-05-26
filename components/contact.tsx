"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Github, Linkedin, Send } from "lucide-react"

export default function Contact({ isActive }: { isActive: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    console.log("Form submitted:", formState)
    alert("메시지가 전송되었습니다. 감사합니다!")
    setFormState({ name: "", email: "", message: "" })
  }

  return (
    <div
      ref={ref}
      className="container mx-auto px-4 max-w-4xl"
      style={{ opacity: isActive ? 1 : 0.3, transition: "opacity 0.8s ease" }}
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Contact</h2>
        <p className="text-gray-600 max-w-lg mx-auto">
          프로젝트 협업, 채용, 또는 궁금한 점이 있으시면 언제든지 연락해주세요.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-light text-gray-800 mb-6">Get in touch</h3>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Mail className="text-gray-600" size={20} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <a href="mailto:min7un3@gmail.com" className="text-gray-800 hover:text-red-600 transition-colors">
                  min7un3@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Github className="text-gray-600" size={20} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">GitHub</p>
                <a
                  href="https://github.com/jiminseon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-red-600 transition-colors"
                >
                  github.com/jiminseon
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-light text-gray-800 mb-6">Send a message</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-600 text-sm mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-600 text-sm mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-600 text-sm mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
            >
              <span>Send Message</span>
              <Send size={16} />
            </button>
          </form>
        </motion.div> */}
      </div>
    </div>
  )
}
