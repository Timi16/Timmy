"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Code2,
  Database,
  Server,
  Globe,
  Briefcase,
  GraduationCap,
  Zap,
  Heart,
} from "lucide-react"
export default function Portfolio() {
  const skills = {
    frontend: [
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Code2 },
      { name: "TypeScript", icon: Code2 },
      { name: "JavaScript", icon: Code2 },
      { name: "Tailwind CSS", icon: Code2 },
      { name: "Bootstrap", icon: Code2 },
      { name: "Angular", icon: Code2 },
    ],
    backend: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Server },
      { name: "Django", icon: Server },
      { name: "Flask", icon: Server },
      { name: "REST APIs", icon: Server },
      { name: "WebSockets", icon: Server },
      { name: "Docker", icon: Server },
      { name: "Python", icon: Server },
      { name: "Java", icon: Server },
    ],
    database: [
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "Firebase", icon: Database },
      { name: "SQLite", icon: Database },
    ],
    tools: [
      { name: "GitHub", icon: Github },
      { name: "Docker", icon: Server },
      { name: "CI/CD", icon: Zap },
      { name: "Google Cloud", icon: Globe },
      { name: "GitHub Actions", icon: Zap },
    ],
  }
  const projects = [
    {
      title: "Wager Me",
      description:
        "A comprehensive betting platform with real-time odds, secure transactions, and intuitive user experience.",
      tech: ["React", "Node.js", "PostgreSQL", "WebSockets"],
      link: "https://wagersme.vercel.app/",
      highlights: ["Real-time betting", "Secure payments", "Live odds tracking"],
    },
    {
      title: "Clipsave",
      description:
        "Streaming/Download Platform with seamless movie streaming and downloading capabilities using optimized backend and CDN.",
      tech: ["Angular", "Node.js", "MongoDB", "Docker"],
      link: "https://movies.clipsave.ng",
      highlights: ["Optimized streaming", "CDN integration", "Reduced buffering"],
    },
    {
      title: "Linkly",
      description:
        "Social Media Management Tool with dashboard for scheduling, tracking, and content strategy recommendations.",
      tech: ["Django", "React", "PostgreSQL", "Redis"],
      link: "https://linkly.africa",
      highlights: ["Content automation", "Analytics dashboard", "Team efficiency"],
    },
    {
      title: "Debonk",
      description:
        "A Telegram mini app and sniping bot for decentralized operations. Access via @debonk_bot.",
      tech: ["Node.js", "JavaScript", "Telegram API", "Blockchain"],
      link: "https://t.me/debonk_bot", // Assuming a Telegram link based on @debonk_bot
      highlights: ["Telegram integration", "Sniping functionality", "Decentralized bot operations"],
    },
    {
      title: "Dehug",
      description:
        "Decentralized version of Hugging Face for model sharing and collaboration.",
      tech: ["React", "Next.js", "Blockchain", "Node.js"],
      link: "https://dehug-ten.vercel.app/",
      highlights: ["Decentralized model hosting", "Community collaboration", "Secure sharing"],
    },
    {
      title: "Naira Rolls",
      description:
        "HR payment system built on Base for efficient and secure transactions.",
      tech: ["React", "Node.js", "Blockchain", "Base Network"],
      link: "https://nairarolls.vercel.app/",
      highlights: ["HR payroll management", "On-chain payments", "Secure transactions on Base"],
    },
  ]
  const experience = [
    {
      title: "Software Engineer",
      company: "CrossFi",
      period: "Aug 2022 - 2024",
      location: "Remote",
      achievements: [
        "Built scalable dApps with React and Web3 integration",
        "Developed Node.js microservices for secure smart contract interactions",
        "Led frontend performance audits and implemented CI pipelines with GitHub Actions",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Forage AI",
      period: "Jul 2021 - Jul 2022",
      location: "Remote",
      achievements: [
        "Built intelligent dashboards with Angular and TypeScript",
        "Integrated ML endpoints and improved dashboard responsiveness by 40%",
        "Documented APIs and created frontend test pipelines",
      ],
    },
    {
      title: "Frontend Engineer",
      company: "HNG Internship",
      period: "Aug 2020 - May 2021",
      location: "Remote",
      achievements: [
        "Collaborated on web applications using React, Redux, and RESTful APIs",
        "Delivered pixel-perfect, responsive designs",
        "Participated in team-based sprint cycles with peer reviews",
      ],
    },
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent animate-fade-in">
              Timilehin Olowu
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 font-light animate-fade-in-delay-1">
              Full-Stack Developer & Blockchain Engineer
            </p>
            <p className="text-lg text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-2">
              4+ years of experience building fintech, AI-powered, and blockchain-based web applications. Passionate
              about creating secure, fast, and accessible digital experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={() => window.open("mailto:timilehinolowu46@gmail.com", "_blank")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 text-slate-300 hover:bg-slate-800 bg-transparent"
                onClick={() => window.open("https://github.com/Timi16", "_blank")}
              >
                <Github className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>timilehinolowu46@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+234 901 520 8215</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Proficient in modern technologies and frameworks for building scalable applications
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-slate-800">
                    <Code2 className="h-5 w-5 text-emerald-600" />
                    Frontend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-slate-800">
                    <Server className="h-5 w-5 text-orange-600" />
                    Backend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="bg-orange-50 text-orange-700 hover:bg-orange-100"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-slate-800">
                    <Database className="h-5 w-5 text-purple-600" />
                    Database
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.database.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="bg-purple-50 text-purple-700 hover:bg-purple-100"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-slate-800">
                    <Zap className="h-5 w-5 text-red-600" />
                    DevOps & Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge key={skill.name} variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Work Experience</h2>
              <p className="text-lg text-slate-600">
                Building innovative solutions across fintech, AI, and blockchain domains
              </p>
            </div>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl text-slate-900 flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-emerald-600" />
                          {job.title}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-slate-700 mt-1">
                          {job.company} • {job.location}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="border-slate-300 text-slate-600 w-fit">
                        {job.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Showcasing innovative solutions that solve real-world problems
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-900 flex items-center justify-between">
                      {project.title}
                      <ExternalLink className="h-5 w-5 text-slate-400" />
                    </CardTitle>
                    <CardDescription className="text-slate-600 leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-emerald-200 text-emerald-700">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        View Live Project
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Education & Interests */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-slate-900">
                    <GraduationCap className="h-6 w-6 text-emerald-600" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-slate-800">B.Sc. Applied Mathematics</h3>
                    <p className="text-slate-600">University of Lagos, Nigeria</p>
                    <Badge variant="outline" className="border-slate-300 text-slate-600">
                      Oct 2018 - 2022
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-slate-900">
                    <Heart className="h-6 w-6 text-emerald-600" />
                    Interests & Hobbies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Videography", "Open Source", "Web Performance", "Mentoring Devs"].map((interest) => (
                      <Badge key={interest} className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">{"Let's Build Something Amazing Together"}</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Ready to bring your next project to life? I'm always excited to work on innovative solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={() => window.open("mailto:timilehinolowu46@gmail.com", "_blank")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 text-slate-300 hover:bg-slate-800 bg-transparent"
                onClick={() => window.open("https://linkedin.com/in/timilehin-olowu-9a7832271", "_blank")}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 text-slate-300 hover:bg-slate-800 bg-transparent"
                onClick={() => window.open("https://github.com/Timi16", "_blank")}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-slate-400">
              <div className="flex flex-col items-center gap-2">
                <Mail className="h-6 w-6 text-emerald-400" />
                <span className="text-sm">timilehinolowu46@gmail.com</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Phone className="h-6 w-6 text-emerald-400" />
                <span className="text-sm">+234 901 520 8215</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MapPin className="h-6 w-6 text-emerald-400" />
                <span className="text-sm">Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="container mx-auto px-4 text-center">{/* Copyright text removed */}</div>
      </footer>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fade-in-delay-1 {
          animation: fadeIn 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-2 {
          animation: fadeIn 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
