"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  Server,
  Database,
  Zap,
  Globe,
  Terminal,
  ShoppingBag,
  GitBranch,
} from "lucide-react"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "Angular"],
    backend: ["Node.js", "Express", "Django", "Python", "REST APIs", "Docker"],
    database: ["PostgreSQL", "MongoDB", "Firebase", "Redis"],
    blockchain: ["Web3.js", "Solidity", "Smart Contracts", "Ethers.js", "Hardhat"],
    languages: ["JavaScript", "TypeScript", "Python", "Rust", "Solidity"],
  }

  const projects = [
    {
      title: "Nexa",
      description:
        "Decentralized ecommerce marketplace on Base blockchain with smart contract escrows and NFT receipts.",
      tech: ["Next.js", "Solidity", "Hardhat", "Base", "Web3.js"],
      link: "https://nexa-dusky.vercel.app/",
      icon: ShoppingBag,
    },
    {
      title: "Tradechain",
      description:
        "Real-World Asset (RWA) trading platform on Internet Computer Protocol (ICP) enabling tokenized commodities and asset trading with full blockchain transparency.",
      tech: ["ICP", "Motoko", "React", "Next.js", "Blockchain"],
      link: "https://trade-chain-icp.vercel.app/",
      icon: null,
    },
    {
      title: "Rust Escrow",
      description:
        "Secure escrow smart contract implementation in Rust using the Tensor platform, providing atomic transaction guarantees for multi-party agreements.",
      tech: ["Rust", "Tensor", "Smart Contracts", "Blockchain"],
      link: "https://github.com/Timi16/Escrow",
      icon: null,
    },
    {
      title: "Clipsave",
      description: "Streaming platform with optimized CDN and seamless movie delivery.",
      tech: ["Angular", "Node.js", "MongoDB", "Docker"],
      link: "https://movies.clipsave.ng",
      icon: null,
    },
    {
      title: "Linkly",
      description: "Social media management tool with analytics and content automation.",
      tech: ["Django", "React", "PostgreSQL", "Redis"],
      link: "https://linkly.africa",
      icon: null,
    },
    {
      title: "Dehug",
      description: "Decentralized platform for AI model sharing and collaboration.",
      tech: ["React", "Next.js", "Blockchain", "Node.js"],
      link: "https://dehug-ten.vercel.app/",
      icon: null,
    },
  ]

  const experience = [
    {
      role: "Team Lead",
      company: "Veralux",
      period: "2024 - 2025",
      description:
        "Led team initiatives and strategic projects. Contributed to innovative solutions and mentored team members on best practices.",
    },
    {
      role: "Software Engineer",
      company: "CrossFi",
      period: "Aug 2022 - 2024",
      description: "Built scalable dApps, developed Node.js microservices, led performance audits",
    },
    {
      role: "Frontend Developer",
      company: "Forage AI",
      period: "Jul 2021 - Jul 2022",
      description: "Built dashboards with Angular, integrated ML endpoints, improved performance by 40%",
    },
    {
      role: "Frontend Engineer",
      company: "HNG Internship",
      period: "Aug 2020 - May 2021",
      description: "Collaborated on web applications, delivered responsive designs, participated in sprints",
    },
  ]

  const openSourceContributions = [
    {
      title: "ZecDev",
      role: "Contributor",
      years: "2025 - Present",
      description:
        "Contributing to ZecDev projects focused on privacy-preserving technologies and the zcash ecosystem.",
      link: "https://github.com/zecdev",
    },
    {
      title: "Zingolabs",
      role: "Early Stage Contributor",
      years: "2025 - Present",
      description:
        "Early-stage contributor to Zingolabs, working on innovative blockchain solutions and ecosystem tools.",
      link: "https://github.com/zingolabs",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <div className="text-center">
            {/* Badge */}
            <div
              className={`mb-6 sm:mb-8 inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 backdrop-blur-md ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
            >
              <Terminal className="w-4 h-4 text-pink-400" />
              <span className="text-xs sm:text-sm font-medium text-pink-300">Full-Stack & Blockchain Developer</span>
            </div>

            {/* Main heading */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 leading-tight text-balance ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
            >
              Hello<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">.</span>{" "}
              I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Timilehin
              </span>
            </h1>

            {/* Tagline */}
            <p
              className={`text-sm sm:text-base md:text-lg lg:text-xl text-purple-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
            >
              I love building software that pushes boundaries. Passionate about crafting elegant solutions in fintech,
              AI, and blockchain.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white gap-2 group border-0 font-semibold w-full sm:w-auto text-sm sm:text-base"
                onClick={() => window.open("mailto:timilehinolowu46@gmail.com")}
              >
                <Mail className="w-4 h-4" />
                Get In Touch
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 gap-2 w-full sm:w-auto text-sm sm:text-base bg-transparent"
                onClick={() => window.open("https://github.com/Timi16")}
              >
                <Github className="w-4 h-4" />
                View Code
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 sm:py-24 lg:py-32 border-t border-purple-800/30 bg-slate-900/50 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 text-balance">
              Technical
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
                {" "}
                Arsenal
              </span>
            </h2>
            <p className="text-sm sm:text-base text-purple-300">Tools & technologies I use to build amazing things</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card
                key={category}
                className="border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 hover:border-pink-500/50 cursor-pointer group transition-all duration-300 backdrop-blur-sm"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-pink-400 group-hover:text-pink-300 transition-colors capitalize text-lg sm:text-base">
                    {category === "frontend" && <Code2 className="w-5 h-5" />}
                    {category === "backend" && <Server className="w-5 h-5" />}
                    {category === "database" && <Database className="w-5 h-5" />}
                    {category === "blockchain" && <Zap className="w-5 h-5" />}
                    {category === "languages" && <Terminal className="w-5 h-5" />}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge
                        key={skill}
                        className="bg-pink-500/20 text-pink-300 hover:bg-pink-500/30 border-pink-500/30 text-xs sm:text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Contributions Section */}
      <section className="py-16 sm:py-24 lg:py-32 border-t border-purple-800/30 bg-slate-950/50 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 text-balance">
              Open Source
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
                {" "}
                Contributions
              </span>
            </h2>
            <p className="text-sm sm:text-base text-purple-300">Building the future of decentralized technologies</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {openSourceContributions.map((contrib, idx) => (
              <Card
                key={idx}
                className="border-pink-500/30 bg-gradient-to-br from-pink-500/10 to-orange-500/5 hover:border-pink-500/50 overflow-hidden backdrop-blur-sm transition-all duration-300"
              >
                <div className="h-1 bg-gradient-to-r from-pink-500 to-orange-500"></div>
                <CardContent className="pt-6 sm:pt-8">
                  <div className="flex items-start gap-4 mb-4">
                    <GitBranch className="w-6 sm:w-8 h-6 sm:h-8 text-pink-400 flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-white break-words">{contrib.title}</h3>
                      <p className="text-pink-400 font-semibold text-sm sm:text-base">{contrib.role}</p>
                      <Badge className="mt-2 bg-pink-500/20 text-pink-300 border-pink-500/30 text-xs sm:text-sm">
                        {contrib.years}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-purple-200 leading-relaxed mb-6 text-sm sm:text-base">{contrib.description}</p>
                  <Button
                    className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white gap-2 font-semibold text-sm sm:text-base"
                    onClick={() => window.open(contrib.link)}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 sm:py-24 lg:py-32 border-t border-purple-800/30 bg-slate-900/50 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto w-full">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 text-balance">
              Work
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
                {" "}
                Experience
              </span>
            </h2>
            <p className="text-sm sm:text-base text-purple-300">
              Building innovative solutions across fintech and blockchain
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {experience.map((job, idx) => (
              <div
                key={idx}
                className="border-l-2 border-pink-500/50 pl-4 sm:pl-6 py-4 hover:border-orange-500/50 rounded-r-lg pr-4 sm:pr-6 transition-colors duration-300 bg-purple-500/5 hover:bg-purple-500/10"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-pink-400">{job.role}</h3>
                    <p className="text-purple-300 font-medium text-sm sm:text-base">{job.company}</p>
                  </div>
                  <Badge
                    variant="outline"
                    className="border-pink-500/50 text-pink-300 w-fit bg-pink-500/10 text-xs sm:text-sm"
                  >
                    {job.period}
                  </Badge>
                </div>
                <p className="text-purple-200 leading-relaxed text-sm sm:text-base">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 sm:py-24 lg:py-32 border-t border-purple-800/30 bg-slate-950/50 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 text-balance">
              Featured
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
                {" "}
                Innovation
              </span>
            </h2>
            <p className="text-sm sm:text-base text-purple-300">Decentralized platforms reshaping industries</p>
          </div>

          {/* Other Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, idx) => {
              const IconComponent = project.icon
              return (
                <Card
                  key={idx}
                  className="border-pink-500/30 bg-purple-500/5 hover:bg-purple-500/10 hover:border-pink-500/50 overflow-hidden group cursor-pointer transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="h-1 bg-gradient-to-r from-pink-500 to-orange-500 group-hover:h-1.5 transition-all"></div>

                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center justify-between text-base sm:text-lg text-white group-hover:text-pink-400 transition-colors">
                      <span className="flex items-center gap-2 min-w-0">
                        {IconComponent && <IconComponent className="w-5 h-5 flex-shrink-0" />}
                        <span className="truncate">{project.title}</span>
                      </span>
                      <ExternalLink className="w-4 h-4 text-purple-400 group-hover:text-pink-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </CardTitle>
                    <CardDescription className="text-purple-200 leading-relaxed text-xs sm:text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-pink-500/30 text-pink-300 bg-pink-500/10 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white gap-2 mt-4 group/btn font-semibold text-sm sm:text-base"
                      onClick={() => window.open(project.link)}
                    >
                      Explore Project
                      <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 lg:py-32 border-t border-purple-800/30 bg-slate-900/50 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            Let's Build
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
              {" "}
              Something Epic
            </span>
          </h2>

          <p className="text-sm sm:text-base text-purple-200 mb-8 sm:mb-12 leading-relaxed">
            Ready for your next challenge? I'm always excited to collaborate on projects that push boundaries and create
            real impact.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white gap-2 border-0 font-semibold w-full sm:w-auto text-sm sm:text-base"
              onClick={() => window.open("mailto:timilehinolowu46@gmail.com")}
            >
              <Mail className="w-4 h-4" />
              Send Email
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 gap-2 w-full sm:w-auto text-sm sm:text-base bg-transparent"
              onClick={() => window.open("https://linkedin.com/in/timilehin-olowu-9a7832271")}
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 gap-2 w-full sm:w-auto text-sm sm:text-base bg-transparent"
              onClick={() => window.open("https://github.com/Timi16")}
            >
              <Github className="w-4 h-4" />
              GitHub
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: Mail, label: "Email", value: "timilehinolowu46@gmail.com" },
              { icon: Globe, label: "Location", value: "Lagos, Nigeria" },
              { icon: Code2, label: "Status", value: "Open to Opportunities" },
            ].map((contact, idx) => {
              const Icon = contact.icon
              return (
                <Card
                  key={idx}
                  className="border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 hover:border-pink-500/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <CardContent className="pt-4 sm:pt-6">
                    <Icon className="w-6 h-6 text-pink-400 mx-auto mb-2 sm:mb-3" />
                    <p className="text-xs sm:text-sm text-purple-300 mb-1">{contact.label}</p>
                    <p className="font-medium text-white text-xs sm:text-sm">{contact.value}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-800/30 bg-slate-900/80 py-6 sm:py-8 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-purple-300 text-xs sm:text-sm">
            Built with <span className="text-pink-400">⚡</span> by Timilehin Olowu • {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  )
}
