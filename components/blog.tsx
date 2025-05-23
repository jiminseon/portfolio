"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Calendar } from "lucide-react"

export default function Blog({ isActive }: { isActive: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const blogPosts = [
    {
      title: "Spring Boot 프로젝트 최적화 경험기",
      excerpt: "대용량 트래픽 처리를 위한 Spring Boot 애플리케이션 최적화 과정을 공유합니다.",
      date: "2024.03.15",
      readTime: "5분",
      tags: ["Spring Boot", "Performance", "Backend"],
    },
    {
      title: "RESTful API 설계 원칙과 실제 적용",
      excerpt: "좋은 API 설계를 위한 원칙들과 실제 프로젝트에서의 적용 사례를 다룹니다.",
      date: "2024.02.28",
      readTime: "7분",
      tags: ["API", "REST", "Design"],
    },
    {
      title: "데이터베이스 인덱스 최적화 전략",
      excerpt: "쿼리 성능 향상을 위한 인덱스 설계와 최적화 방법에 대해 알아봅니다.",
      date: "2024.02.10",
      readTime: "6분",
      tags: ["Database", "MySQL", "Optimization"],
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
        <h2 className="text-3xl md:text-4xl font-light text-gray-400 mb-4">블로그</h2>
        <div className="w-16 h-px bg-red-500 mx-auto" />
      </motion.div>

      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-medium text-gray-700 group-hover:text-red-600 transition-colors duration-300">
                {post.title}
              </h3>
              <ExternalLink
                size={18}
                className="text-gray-400 group-hover:text-red-500 transition-colors duration-300"
              />
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <span>{post.readTime} 읽기</span>
              </div>

              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <button className="bg-white border border-gray-200 text-gray-600 px-6 py-3 rounded-lg hover:border-red-300 hover:text-red-600 transition-colors duration-300">
          더 많은 글 보기
        </button>
      </motion.div>
    </div>
  )
}
