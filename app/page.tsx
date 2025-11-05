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
  ChevronDown,
  Terminal,
  Send,
  Smartphone,
  ShoppingBag,
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
    languages: ["JavaScript", "TypeScript", "Python", "Solidity", "Rust"],
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
      title: "Voice Agent",
      description:
        "AI voice interaction platform using Retrieval-Augmented Generation (RAG) with DeepGram STT/TTS, LLaMA embeddings, Pinecone vectors, and LiveKit for real-time audio.",
      tech: ["Next.js", "DeepGram", "Pinecone", "LiveKit", "LLaMA", "Node.js"],
      link: "https://github.com/wisdom6715/Voice-Agent",
      icon: null,
    },
    {
      title: "Eliza OnChain AI Agent",
      description:
        "Intelligent blockchain-integrated AI agent built with Eliza framework, enabling autonomous on-chain operations, smart contract interactions, and Web3 decision-making.",
      tech: ["Eliza", "Web3.js", "Solidity", "Node.js", "AI/ML"],
      link: "#",
      icon: Zap,
    },
    {
      title: "Dextopus",
      description:
        "Bridge aggregator platform with optimized cross-chain swaps and smart contract integration for seamless token transfers across multiple blockchains.",
      tech: ["Solidity", "Hardhat", "Web3.js", "React", "Smart Contracts"],
      link: "https://www.dextopus.com/",
      icon: null,
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
      title: "Wager Me",
      description: "Comprehensive betting platform with real-time odds and secure transactions.",
      tech: ["React", "Node.js", "PostgreSQL", "WebSockets"],
      link: "https://wagersme.vercel.app/",
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
    {
      title: "Debonk",
      description: "Telegram bot for decentralized operations and crypto sniping.",
      tech: ["Node.js", "JavaScript", "Telegram API", "Blockchain"],
      link: "https://t.me/debonk_bot",
      icon: Send,
    },
  ]

  const experience = [
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

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/8 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/8 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600/8 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 w-full">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge with animation */}
            <div
              className={`mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 backdrop-blur-md ${isVisible ? "animate-fade-in" : "opacity-0"}`}
            >
              <Terminal className="w-4 h-4 text-blue-600 animate-pulse" />
              <span className="text-sm font-medium text-blue-700">Full-Stack & Blockchain Developer</span>
            </div>

            {/* Main heading */}
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-tight text-balance ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "100ms" }}
            >
              Hello<span className="text-blue-600 animate-pulse">.</span> I'm Timilehin
            </h1>

            {/* Tagline */}
            <p
              className={`text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "200ms" }}
            >
              <span className="text-blue-600 font-bold">&gt;</span> Crafting elegant digital experiences with
              <span className="text-blue-700 font-semibold"> clean code</span>,
              <span className="text-blue-600 font-semibold"> blockchain innovation</span>, and
              <span className="text-blue-500 font-semibold"> web3 excellence</span>
            </p>

            {/* Description */}
            <p
              className={`text-sm sm:text-base lg:text-lg text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "300ms" }}
            >
              4+ years building fintech, AI-powered, and blockchain applications. Obsessed with performance, security,
              and unforgettable user experiences.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row justify-center gap-4 mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "400ms" }}
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white gap-2 group border-0 font-semibold"
                onClick={() => window.open("mailto:timilehinolowu46@gmail.com")}
              >
                <Mail className="w-4 h-4" />
                Get In Touch
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-300 text-blue-700 hover:bg-blue-50 gap-2 bg-white"
                onClick={() => window.open("https://github.com/Timi16")}
              >
                <Github className="w-4 h-4" />
                View Code
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div
              className={`flex justify-center ${isVisible ? "animate-bounce" : ""}`}
              style={{ animationDelay: "600ms" }}
            >
              <ChevronDown className="w-6 h-6 text-blue-400 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 lg:py-32 border-t border-slate-200 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance animate-fade-in text-slate-900">
                Technical{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                  Arsenal
                </span>
              </h2>
              <p className="text-lg text-slate-600">Tools & technologies I use to build amazing things</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, skillList], idx) => (
                <Card
                  key={category}
                  className="border-blue-200 bg-white hover-lift cursor-pointer group animate-fade-in shadow-sm"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-blue-700 group-hover:text-blue-800 transition-colors capitalize">
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
                        <Badge key={skill} className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 lg:py-32 border-t border-slate-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance text-slate-900">
                Work{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                  Experience
                </span>
              </h2>
              <p className="text-lg text-slate-600">Building innovative solutions across fintech and blockchain</p>
            </div>

            <div className="space-y-6">
              {experience.map((job, idx) => (
                <div
                  key={idx}
                  className="border-l-2 border-blue-300 pl-6 py-4 hover-glow rounded-r-lg pr-6 animate-fade-in"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-blue-700">{job.role}</h3>
                      <p className="text-slate-700 font-medium">{job.company}</p>
                    </div>
                    <Badge variant="outline" className="border-blue-300 text-blue-700 w-fit bg-blue-50">
                      {job.period}
                    </Badge>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Telegram Bot Section */}
      <section className="py-24 lg:py-32 border-t border-slate-200 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance text-slate-900">
                Telegram Bot for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                  Hackathons
                </span>
              </h2>
              <p className="text-lg text-slate-600">Stay updated on the latest hackathon opportunities</p>
            </div>

            <Card className="border-blue-300 bg-gradient-to-br from-blue-50 to-white hover-lift overflow-hidden shadow-md">
              <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-700"></div>
              <CardContent className="pt-8">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <Send className="w-8 h-8 text-blue-700" />
                      <h3 className="text-2xl font-bold text-slate-900">@atupdatesbot</h3>
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-6">
                      Get real-time hackathon updates, opportunities, and resources directly through Telegram. Never
                      miss a chance to build, compete, and win rewards.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {["Real-time Alerts", "Filtered by Region", "Prize Info", "Resources"].map((feature) => (
                        <Badge key={feature} className="bg-blue-100 text-blue-800 border-blue-300">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white gap-2 font-semibold"
                      onClick={() => window.open("https://t.me/atupdatesbot")}
                    >
                      <Send className="w-4 h-4" />
                      Join Channel
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="relative w-full aspect-square max-w-xs">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 to-transparent rounded-lg blur-2xl"></div>
                      <Smartphone className="w-full h-full text-blue-300/40" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 lg:py-32 border-t border-slate-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance text-slate-900">
                Featured{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                  Innovation
                </span>
              </h2>
              <p className="text-lg text-slate-600">Decentralized platforms reshaping industries</p>
            </div>

            {/* Nexa Spotlight */}
            <Card className="border-blue-300 bg-gradient-to-br from-blue-50 to-white hover-lift overflow-hidden mb-12 shadow-md">
              <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-700"></div>
              <CardContent className="pt-8">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <ShoppingBag className="w-8 h-8 text-blue-700" />
                      <h3 className="text-3xl font-bold text-slate-900">Nexa</h3>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-300">On-Chain</Badge>
                    </div>
                    <h4 className="text-xl text-blue-700 font-semibold mb-4">The Future of E-Commerce</h4>
                    <p className="text-slate-700 leading-relaxed mb-6">
                      A decentralized ecommerce marketplace built on the Base blockchain. Buy, sell, and verify products
                      with blockchain transparency. Smart contract escrows ensure secure transactions, while NFT
                      receipts provide verifiable proof of purchase with loyalty rewards.
                    </p>

                    <div className="bg-blue-100/50 rounded-lg p-6 mb-6 border border-blue-200">
                      <h5 className="text-blue-900 font-semibold mb-4">Key Features:</h5>
                      <ul className="space-y-2 text-slate-700 text-sm">
                        <li className="flex items-start gap-3">
                          <span className="text-blue-700 font-bold mt-1">•</span>
                          <span>Smart Contract Escrow for secure payments</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-700 font-bold mt-1">•</span>
                          <span>NFT Proof of Purchase with resale rights</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-700 font-bold mt-1">•</span>
                          <span>USDC payments on Base network</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-700 font-bold mt-1">•</span>
                          <span>No chargebacks, no disputes - immutable records</span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {["Next.js", "Solidity", "Hardhat", "Base", "Web3.js", "Smart Contracts"].map((tech) => (
                        <Badge key={tech} className="bg-blue-100 text-blue-800 border-blue-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white gap-2 font-semibold"
                      onClick={() => window.open("https://nexa-dusky.vercel.app/")}
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Explore Nexa
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="relative w-full aspect-square max-w-sm">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 via-blue-200/20 to-transparent rounded-lg blur-3xl animate-pulse"></div>
                      <div className="absolute inset-0 border border-blue-200 rounded-lg backdrop-blur-sm flex items-center justify-center">
                        <div className="text-center">
                          <ShoppingBag className="w-24 h-24 text-blue-300/60 mx-auto mb-4" />
                          <p className="text-blue-700/70 font-semibold">On-Chain Commerce</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Other Projects Grid */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Other Notable Projects</h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {projects
                .filter((p) => p.title !== "Nexa")
                .map((project, idx) => {
                  const IconComponent = project.icon
                  return (
                    <Card
                      key={idx}
                      className="border-blue-200 bg-white hover-lift overflow-hidden group cursor-pointer animate-fade-in shadow-sm"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className="h-1 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:h-2 transition-all"></div>

                      <CardHeader>
                        <CardTitle className="flex items-center justify-between text-lg text-slate-900 group-hover:text-blue-700 transition-colors">
                          <span className="flex items-center gap-2">
                            {IconComponent && <IconComponent className="w-5 h-5" />}
                            {project.title}
                          </span>
                          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-700 group-hover:translate-x-1 transition-all" />
                        </CardTitle>
                        <CardDescription className="text-slate-600 leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="border-blue-300 text-blue-700 bg-blue-50">
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <Button
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white gap-2 mt-4 group/btn font-semibold"
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
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 lg:py-32 border-t border-slate-200 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance text-slate-900">
              Let's Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                Something Epic
              </span>
            </h2>

            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Ready for your next challenge? I'm always excited to collaborate on projects that push boundaries and
              create real impact.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white gap-2 border-0 font-semibold"
                onClick={() => window.open("mailto:timilehinolowu46@gmail.com")}
              >
                <Mail className="w-4 h-4" />
                Send Email
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-300 text-blue-700 hover:bg-blue-50 gap-2 bg-white"
                onClick={() => window.open("https://linkedin.com/in/timilehin-olowu-9a7832271")}
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-300 text-blue-700 hover:bg-blue-50 gap-2 bg-white"
                onClick={() => window.open("https://github.com/Timi16")}
              >
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Mail, label: "Email", value: "timilehinolowu46@gmail.com" },
                { icon: Globe, label: "Location", value: "Lagos, Nigeria" },
                { icon: Code2, label: "Status", value: "Open to Opportunities" },
              ].map((contact, idx) => {
                const Icon = contact.icon
                return (
                  <Card
                    key={idx}
                    className="border-blue-200 bg-white hover-lift animate-fade-in shadow-sm"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <CardContent className="pt-6">
                      <Icon className="w-6 h-6 text-blue-700 mx-auto mb-3" />
                      <p className="text-sm text-slate-600 mb-1">{contact.label}</p>
                      <p className="font-medium text-slate-900 text-sm">{contact.value}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/80 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-600 text-sm">
            Built with <span className="text-blue-600 animate-pulse">⚡</span> by Timilehin Olowu •{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  )
}
