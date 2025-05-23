"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowLeft, Github, ExternalLink, Code, Server, Database, Users } from "lucide-react"

interface ProjectDetailProps {
  isActive: boolean
  projectId: string
  onBack: () => void
}

export default function ProjectDetail({ isActive, projectId, onBack }: ProjectDetailProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const projects = {
    myadd: {
      title: "MyADD",
      description: "OTT 시청물 기록 IOS 서비스",
      fullDescription:
        "MyADD는 사용자가 다양한 OTT 플랫폼에서 시청한 콘텐츠를 기록하고 관리할 수 있는 iOS 애플리케이션입니다. 사용자는 시청한 영화, 드라마, 다큐멘터리 등을 기록하고, 평점을 매기고, 리뷰를 작성할 수 있습니다. 또한 시청 시간을 추적하여 사용자의 시청 패턴을 분석하고, 맞춤형 콘텐츠를 추천해 줍니다.",
      role: "백엔드 개발",
      responsibilities: [
        "RESTful API 설계 및 개발",
        "CI/CD 자동화",
      ],
      tech: ["Spring Boot", "MySQL", "AWS", "JPA"],
      results: [
        "App store 배포"
      ],
      period: "2023.07 - 2023.08",
      links: {
        github: "https://github.com/my-ADD/myADD-server"
      },
    },
    itemlier: {
      title: "잇템리어",
      description: "인테리어 중고거래 웹 서비스",
      fullDescription:
        "잇템리어는 인테리어 소품, 가구 등을 중고로 거래할 수 있는 웹 서비스입니다. 사용자는 더 이상 사용하지 않는 인테리어 아이템을 판매하거나, 필요한 아이템을 저렴하게 구매할 수 있습니다. 위치 기반 검색, 카테고리별 필터링, 실시간 채팅 등의 기능을 제공하여 사용자 경험을 향상시켰습니다.",
      role: "풀스택 개발",
      responsibilities: [
        "프론트엔드 UI/UX 설계 및 구현",
        "백엔드 API 개발 및 데이터베이스 설계",
        "Session 기반 Spring security를 이용한 로그인 구현"
      ],
      tech: ["JSP", "Spring Boot", "Oracle"],
      results: [
        "프로젝트 2등"
      ],
      period: "2024.03 - 2024.06",
      links: {
        github: "https://github.com/jiminseon/Itemrier_springBoot"
      },
    },
    emodiary: {
      title: "EmoDiary",
      description: "생성형 AI 기반 플레이리스트 및 일기 회고 추천 시스템",
      fullDescription:
        "EmoDiary는 사용자의 일기 내용을 분석하여 감정 상태를 파악하고, 그에 맞는 음악 플레이리스트를 추천해주는 서비스입니다. 또한 과거 일기를 기반으로 회고 포인트를 생성형 AI를 통해 제안하여 사용자의 자기 성찰을 돕습니다. 감정 분석, 음악 추천, 회고 생성 등 다양한 AI 기술이 적용되었습니다.",
      role: "팀장",
      responsibilities: [
        "멜론 데이터 크롤링",
        "감성 분석을 위해 BERT 모델 적용",
        "개인화 로직 구현",
        "Gradio를 이용해 플레이리스트 UI 구현",
      ],
      tech: ["AI API", "Python"],
      results: ["감정 분석 정확도 85% 달성", "사용자 음악 추천 만족도 78% 기록", "일평균 작성 일기 수 2배 증가"],
      period: "2024.09 - 2024.12",
      links: {
        github: "https://github.com/jiminseon/AI_RecommenderSystem"
      },
    },
  }

  const project = projects[projectId as keyof typeof projects]

  if (!project) {
    return (
      <div className="container mx-auto px-4 text-center py-20">
        <h2 className="text-2xl text-gray-800">프로젝트를 찾을 수 없습니다.</h2>
        <button
          onClick={onBack}
          className="mt-4 inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          프로젝트 목록으로 돌아가기
        </button>
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className="container mx-auto px-4 max-w-5xl"
      style={{ opacity: isActive ? 1 : 0.3, transition: "opacity 0.8s ease" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <button
          onClick={onBack}
          className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          프로젝트 목록으로 돌아가기
        </button>
      </motion.div>

      <div className="bg-white rounded-lg overflow-hidden shadow-xl border border-gray-200">
        <div className="aspect-video bg-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
            <div className="text-gray-400 text-lg">Project Screenshot</div>
          </div>
        </div>

        <div className="p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8"
          >
            <div>
              <h1 className="text-3xl font-medium text-gray-800 mb-2">{project.title}</h1>
              <p className="text-gray-600">{project.description}</p>
            </div>
            <div className="flex gap-3">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <h2 className="text-xl text-gray-800 mb-4">프로젝트 개요</h2>
            <p className="text-gray-600 leading-relaxed">{project.fullDescription}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Users size={20} className="text-red-500" />
                <h2 className="text-xl text-gray-800">담당 역할</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-gray-700 mb-2 font-medium">{project.role}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {project.responsibilities.map((item, index) => (
                    <li key={index} className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Code size={20} className="text-red-500" />
                <h2 className="text-xl text-gray-800">기술 스택</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-white text-gray-700 text-sm px-3 py-1 rounded border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Database size={20} className="text-red-500" />
              <h2 className="text-xl text-gray-800">결과</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {project.results.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
