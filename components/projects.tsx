"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

interface ProjectsProps {
  isActive: boolean
  onProjectSelect: (projectId: string) => void
}

export default function Projects({ isActive, onProjectSelect }: ProjectsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const projects = [
    {
      id: "myadd",
      title: "MyADD",
      description: "OTT 시청물 기록 IOS 서비스",
      role: "백엔드 개발",
      tech: ["Spring Boot", "MySQL", "AWS"],
      period: "2023.07 - 2023.08",
      image: "/icons/myadd.png"
    },
    {
      id: "itemlier",
      title: "잇템리어",
      description: "인테리어 중고거래 웹 서비스",
      role: "풀스택 개발",
      tech: ["JSP", "Spring Boot", "Oracle"],
      period: "2024.03 - 2024.06",
    },
    {
      id: "emodiary",
      title: "EmoDiary",
      description: "생성형 AI 기반 플레이리스트 및 일기 회고 추천 시스템",
      role: "팀장",
      tech: ["Python", "OpenAI API", "Gradio"],
      period: "2024.09 - 2024.12",
      image: "/icons/emodiary.png"
    },
  ]

  return (
    <div
      ref={ref}
      className="container mx-auto px-4 max-w-6xl"
      style={{ opacity: isActive ? 1 : 0.3, transition: "opacity 0.8s ease" }}
    >
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Projects</h2>
        <p className="text-gray-600 mb-20  text-center">
        프로젝트의 세부 사항을 확인해보세요.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 group"
          >
            <div className="aspect-video bg-gray-100 relative overflow-hidden">          
              
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={project.image} />
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-medium text-gray-800">{project.title}</h3>
                <div className="flex gap-2">
                  <button className="p-1.5 rounded-full hover:bg-gray-100 transition-colors">
                    <Github size={16} className="text-gray-600" />
                  </button>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-3 leading-relaxed">{project.description}</p>

              <div className="mb-4">
                <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                  {project.role}
                </span>
              </div>

              <div className="flex flex-wrap gap-1 mb-3">
                {project.tech.map((tech) => (
                  <span key={tech} className="inline-block bg-red-50 text-red-600 text-xs px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-500">{project.period}</p>
                <button
                  onClick={() => onProjectSelect(project.id)}
                  className="text-sm text-gray-600 hover:text-gray-800 flex items-center gap-1 transition-colors"
                >
                  <span>자세히 보기</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
