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
        "사용자 인증 및 권한 관리 시스템 구현",
        "콘텐츠 메타데이터 관리 및 검색 기능 개발",
        "사용자 시청 기록 및 통계 처리 로직 구현",
        "AWS 클라우드 인프라 구축 및 관리",
      ],
      tech: ["Spring Boot", "MySQL", "AWS", "JPA", "Redis", "Docker"],
      challenges: [
        "다양한 OTT 플랫폼의 콘텐츠 메타데이터를 통합하고 관리하는 시스템 설계",
        "대용량 사용자 시청 기록 데이터의 효율적인 처리 및 분석",
        "실시간 추천 시스템 구현을 위한 성능 최적화",
      ],
      solutions: [
        "마이크로서비스 아키텍처를 도입하여 각 기능별 모듈화 및 확장성 확보",
        "Redis 캐싱을 통한 빈번한 조회 데이터 성능 최적화",
        "AWS ECS를 활용한 컨테이너 기반 배포 및 관리 자동화",
      ],
      results: [
        "초기 출시 후 3개월 내 10,000명 이상의 사용자 확보",
        "평균 사용자 세션 시간 15분으로 높은 사용자 참여도 달성",
        "99.9% 이상의 서비스 가용성 유지",
      ],
      period: "2024.03 - 2024.06",
      links: {
        github: "https://github.com/username/myadd",
        live: "https://myadd-app.com",
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
        "실시간 채팅 시스템 구현",
        "위치 기반 검색 기능 개발",
        "결제 시스템 연동",
      ],
      tech: ["JSP", "Spring Boot", "Oracle", "jQuery", "Bootstrap", "MyBatis", "WebSocket"],
      challenges: ["실시간 채팅 및 알림 시스템 구현", "대용량 이미지 처리 및 최적화", "위치 기반 검색 성능 개선"],
      solutions: [
        "WebSocket을 활용한 실시간 양방향 통신 구현",
        "이미지 리사이징 및 압축 처리를 통한 로딩 속도 개선",
        "공간 인덱싱을 활용한 위치 기반 검색 최적화",
      ],
      results: [
        "월간 활성 사용자 5,000명 달성",
        "일 평균 거래 건수 100건 이상 기록",
        "사용자 만족도 조사에서 4.5/5.0 점수 획득",
      ],
      period: "2023.09 - 2023.12",
      links: {
        github: "https://github.com/username/itemlier",
        live: "https://itemlier.com",
      },
    },
    emodiary: {
      title: "EmoDiary",
      description: "생성형 AI 기반 플레이리스트 및 일기 회고 추천 시스템",
      fullDescription:
        "EmoDiary는 사용자의 일기 내용을 분석하여 감정 상태를 파악하고, 그에 맞는 음악 플레이리스트를 추천해주는 서비스입니다. 또한 과거 일기를 기반으로 회고 포인트를 생성형 AI를 통해 제안하여 사용자의 자기 성찰을 돕습니다. 감정 분석, 음악 추천, 회고 생성 등 다양한 AI 기술이 적용되었습니다.",
      role: "백엔드 개발",
      responsibilities: [
        "감정 분석 AI 모델 연동 및 API 개발",
        "음악 추천 알고리즘 설계 및 구현",
        "생성형 AI를 활용한 회고 생성 시스템 개발",
        "사용자 데이터 분석 및 개인화 로직 구현",
        "외부 음악 스트리밍 서비스 API 연동",
      ],
      tech: ["Spring Boot", "PostgreSQL", "AI API", "Python", "Docker", "Kafka"],
      challenges: [
        "텍스트 기반 감정 분석의 정확도 향상",
        "개인화된 음악 추천 알고리즘 개발",
        "대용량 텍스트 처리 및 AI 모델 응답 시간 최적화",
      ],
      solutions: [
        "다양한 NLP 모델을 앙상블하여 감정 분석 정확도 향상",
        "협업 필터링과 콘텐츠 기반 필터링을 결합한 하이브리드 추천 시스템 구현",
        "비동기 처리 및 캐싱을 통한 응답 시간 개선",
      ],
      results: ["감정 분석 정확도 85% 달성", "사용자 음악 추천 만족도 78% 기록", "일평균 작성 일기 수 2배 증가"],
      period: "2024.01 - 2024.02",
      links: {
        github: "https://github.com/username/emodiary",
        live: "https://emodiary.app",
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
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
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
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <Server size={20} className="text-red-500" />
              <h2 className="text-xl text-gray-800">문제 해결</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-gray-800 mb-2 font-medium">도전 과제</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {project.challenges.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-gray-800 mb-2 font-medium">해결 방안</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {project.solutions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

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
