"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function AboutMe({ isActive }: { isActive: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const frontendSkills = [
    { name: "Java", icon: "/icons/java.svg" },
    { name: "Spring Boot", icon: "/icons/spring.svg" },
    { name: "HTML5", icon: "/icons/html5.svg" },
    { name: "CSS3", icon: "/icons/css3.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "Python", icon: "/icons/python.svg" },
    { name: "MySQL", icon: "/icons/mysql.svg" },
  ]

  const tools = [
    { name: "GitHub", icon: "/icons/github.svg" },
    { name: "IntelliJ", icon: "/icons/intellij.svg" },
    { name: "VS Code", icon: "/icons/vscode.svg" },
    { name: "AWS", icon: "/icons/aws.svg" },
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
            <h4 className="text-xl text-gray-800 mb-3">Q. 백엔드를 지망하는 이유?</h4>
            <p className="text-gray-600 leading-relaxed">
            저는 <span className="bg-gray-200 px-2 py-1 rounded">보이지 않는 곳에서 시스템이 유기적으로 작동하도록 만드는 과정</span>에 매력을 느껴 백엔드 개발자를 지망하게 되었습니다.
            서버가 요청을 처리하고 데이터가 정확히 흐르도록 설계하는 작업에서 퍼즐을 맞추는 듯한 재미를 느낍니다.
            사용자에게는 보이지 않지만, 서비스의 핵심을 책임지는 백엔드 영역이 저에게 가장 잘 맞는다고 생각합니다.
            </p>
          </div>

          <div>
            <h4 className="text-xl text-gray-800 mb-3">Q. 어떤 개발자가 되고 싶은지?</h4>
            <p className="text-gray-600 leading-relaxed">
              저는 <span className="bg-gray-200 px-2 py-1 rounded">디지털 소외계층도 부담 없이 사용할 
              수 있는 서비스를 만드는 백엔드 개발자</span>가 되고 싶습니다. 기술 발전의 속도에 소외되는 사람이 없도록, 
              누구나 쉽게 접근하고 이해할 수 있는 구조와 흐름을 설계하는 데 관심이 많습니다. 보이지 않는 부분까지 사용자 중심으로 고민하는 개발자가 되겠습니다.
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
        <h3 className="text-3xl font-light text-gray-800 mb-5 text-center">Skill & Tools</h3>
        <h4 className="text-xl font-light text-gray-800 mb-12 text-center">아래 기술을 사용할 수 있습니다.</h4>
        <div className="space-y-12">
          <div>
            <h4 className="text-xl text-gray-800 mb-6 pl-2">Skills</h4>
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
        <p>코드를 짜보고 서버를 구성하며 시행착오를 겪는 과정에서 빠르게 성장해왔습니다.</p>
      </motion.div>
    </div>
  )
}
