"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function AboutMe({ isActive }: { isActive: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const frontendSkills = [
    { name: "HTML5", icon: "/icons/html5.svg" },
    { name: "CSS3", icon: "/icons/css3.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "React", icon: "/icons/react.svg" },
  ]

  const backendSkills = [
    { name: "Java", icon: "/icons/java.svg" },
    { name: "Spring Boot", icon: "/icons/spring.svg" },
    { name: "MySQL", icon: "/icons/mysql.svg" },
  ]

  const tools = [
    { name: "Git", icon: "/icons/git.svg" },
    { name: "GitHub", icon: "/icons/github.svg" },
    { name: "VS Code", icon: "/icons/vscode.svg" },
    { name: "Figma", icon: "/icons/figma.svg" },
  ]

  return (
    <div
      ref={ref}
      className="container mx-auto px-4 max-w-6xl"
      style={{ opacity: isActive ? 1 : 0.3, transition: "opacity 0.8s ease" }}
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-6xl font-light text-gray-800 mb-4">About me</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-50 rounded-lg p-8 mb-16 border border-gray-200"
      >
        <h3 className="text-2xl font-light text-gray-800 mb-6">Interview</h3>

        <div className="space-y-8">
          <div>
            <h4 className="text-xl text-gray-800 mb-3">Q. 백엔드로 전향한 이유?</h4>
            <p className="text-gray-600 leading-relaxed">
              웹 디자인에도 활동하며 사용자 중심 디자인, 협업, 백엔드 기초 지식을 쌓았습니다. 사용자와의 소통에 대해
              중요성을 인지하고, 더 밀접하게 상호작용 가능한 프로젝트를 개발하고자 백엔드 개발자로 전향을 결심하게
              되었습니다.
            </p>
          </div>

          <div>
            <h4 className="text-xl text-gray-800 mb-3">Q. 일에 있어 가장 중요하게 생각하는 것이 있다면?</h4>
            <p className="text-gray-600 leading-relaxed">
              항상 <span className="bg-gray-200 px-2 py-1 rounded">역지사지 마인드로 사용자 중심 개발</span>을
              추구합니다. 직관적이고 친숙한 UI 제공과 Chrome Lighthouse를 활용해 성능 최적화에 신경쓰면서, 다양한
              사용자들이 편리하게 서비스를 이용할 수 있도록 기여하고자 합니다.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-20"
      >
        <h3 className="text-3xl font-light text-gray-800 mb-12 text-center">Skill & Tools</h3>

        <div className="space-y-12">
          <div>
            <h4 className="text-xl text-gray-800 mb-6 pl-2">FrontEnd</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {frontendSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white rounded-lg p-6 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm"
                >
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img src={skill.icon || "/placeholder.svg"} alt={skill.name} className="w-12 h-12" />
                  </div>
                  <span className="text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl text-gray-800 mb-6 pl-2">BackEnd</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {backendSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white rounded-lg p-6 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm"
                >
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img src={skill.icon || "/placeholder.svg"} alt={skill.name} className="w-12 h-12" />
                  </div>
                  <span className="text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl text-gray-800 mb-6 pl-2">Tools</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="bg-white rounded-lg p-6 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm"
                >
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img src={tool.icon || "/placeholder.svg"} alt={tool.name} className="w-12 h-12" />
                  </div>
                  <span className="text-gray-700">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center text-gray-500 italic"
      >
        <p>열린 마음으로 피드백을 소중히 여기고, 개발 과정에서 항상 개선할 점을 찾기 위해 노력하고 있습니다.</p>
      </motion.div>
    </div>
  )
}
