"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Experience({ isActive }: { isActive: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const experiences = [
    {
      title: "신한투자증권 프로 디지털 아카데미",
      date: "2025.04 - ",
      type: "교육",
      description: "금융 IT 전문가 양성 과정",
    },
    {
      title: "교내 협동학습 경진대회 금상",
      date: "2025.02",
      type: "수상",
      description: "팀 프로젝트 우수 성과 인정",
    },
    {
      title: "UMC 앱/웹 런칭 동아리 5기 Web 파트장",
      date: "2023.09 – 2024.02",
      type: "활동",
      description: "웹 개발 파트 리더십 및 팀원 관리",
    },
    {
      title: "UMC 앱/웹 런칭 동아리 4기 SpringBoot 파트",
      date: "2023.03 – 2023.08",
      type: "활동",
      description: "Spring Boot 백엔드 개발 학습 및 프로젝트 참여",
    },
    {
      title: "교내 소프트웨어 경진대회 장려상",
      date: "2022.11",
      type: "수상",
      description: "소프트웨어 개발 역량 인정",
    },
    {
      title: "NPC 게임 개발 동아리 개발팀 4기",
      date: "2021.06 – 2022.01",
      type: "활동",
      description: "게임 개발 프로젝트 참여 및 협업 경험",
    },
  ]

  return (
    <div
      ref={ref}
      className="container mx-auto px-4 max-w-4xl"
      style={{ opacity: isActive ? 1 : 0.3, transition: "opacity 0.8s ease" }}
    >
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Experience</h2>
        <p className="text-gray-600 mb-20  text-center">
        다양한 프로젝트를 통해 경험을 쌓고 있습니다.
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-300" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative flex items-start mb-12 last:mb-0"
          >
            {/* Timeline dot */}
            <div className="absolute left-8 w-4 h-4 bg-white border-2 border-red-500 rounded-full transform -translate-x-1/2 z-10" />

            {/* Content */}
            <div className="ml-16 bg-white rounded-lg p-6 shadow-sm border border-gray-200 flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-lg font-medium text-gray-800 mb-1 md:mb-0">{exp.title}</h3>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      exp.type === "수상"
                        ? "bg-red-100 text-red-700"
                        : exp.type === "교육"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {exp.type}
                  </span>
                  <span className="text-sm text-gray-500">{exp.date}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
