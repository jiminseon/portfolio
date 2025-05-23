"use client"

import { useEffect, useState, useRef } from "react"
import { AnimatePresence } from "framer-motion"
import LoadingScreen from "@/components/loading-screen"
import Introduction from "@/components/introduction"
import Navigation from "@/components/navigation"
import AboutMe from "@/components/about-me"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import SideNavigation from "@/components/side-navigation"
import ProjectDetail from "@/components/project-detail"
import TopNavigation from "@/components/top-navigation"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("intro")
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [showTopNav, setShowTopNav] = useState(false)
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({
    intro: null,
    about: null,
    navigation: null,
    projects: null,
    experience: null,
    contact: null,
    projectDetail: null,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      // Show top navigation after navigation section
      const navigationSection = sectionsRef.current.navigation
      if (navigationSection) {
        const navigationBottom = navigationSection.offsetTop + navigationSection.offsetHeight
        setShowTopNav(window.scrollY > navigationBottom - 100)
      }

      Object.entries(sectionsRef.current).forEach(([key, section]) => {
        if (!section) return

        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(key)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const assignRef = (id: string) => (el: HTMLElement | null) => {
    if (el) sectionsRef.current[id] = el
  }

  const scrollToSection = (sectionId: string) => {
    sectionsRef.current[sectionId]?.scrollIntoView({ behavior: "smooth" })
  }

  const handleProjectSelect = (projectId: string) => {
    setSelectedProject(projectId)
    setTimeout(() => {
      scrollToSection("projectDetail")
    }, 100)
  }

  const handleBackToProjects = () => {
    setSelectedProject(null)
    scrollToSection("projects")
  }

  return (
    <main className="relative min-h-screen bg-white text-gray-800">
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

      <TopNavigation activeSection={activeSection} onNavigate={scrollToSection} showNavigation={showTopNav} />

      <SideNavigation activeSection={activeSection} onNavigate={scrollToSection} />

      <div className="relative">
        <section id="intro" ref={assignRef("intro")} className="min-h-screen flex items-center justify-center">
          <Introduction isActive={activeSection === "intro"} />
        </section>

        <section id="about" ref={assignRef("about")} className="min-h-screen py-20">
          <AboutMe isActive={activeSection === "about"} />
        </section>

        <section id="navigation" ref={assignRef("navigation")} className="min-h-screen py-20">
          <Navigation isActive={activeSection === "navigation"} onNavigate={scrollToSection} />
        </section>

        <section id="projects" ref={assignRef("projects")} className="min-h-screen py-20">
          <Projects isActive={activeSection === "projects"} onProjectSelect={handleProjectSelect} />
        </section>

        {selectedProject && (
          <section id="projectDetail" ref={assignRef("projectDetail")} className="min-h-screen py-20">
            <ProjectDetail
              isActive={activeSection === "projectDetail"}
              projectId={selectedProject}
              onBack={handleBackToProjects}
            />
          </section>
        )}

        <section id="experience" ref={assignRef("experience")} className="min-h-screen py-20">
          <Experience isActive={activeSection === "experience"} />
        </section>

        <section id="contact" ref={assignRef("contact")} className="min-h-screen py-20">
          <Contact isActive={activeSection === "contact"} />
        </section>
      </div>
    </main>
  )
}
