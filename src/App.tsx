import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, Terminal, Briefcase, Code2, Sparkles, Database, Brain, Server, Award } from 'lucide-react';
import { StarField } from './components/StarField';
import { SiPython, SiMysql, SiHtml5, SiCss3, SiTensorflow, SiPytorch, SiKeras, SiScikitlearn, SiPandas, SiNumpy, SiOpencv, SiGooglecloud, SiStreamlit } from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showName, setShowName] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowName(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: "Questor",
      subtitle: "RAG-Based Personal Tutor",
      description: "An intelligent tutoring system that uses Retrieval-Augmented Generation to help students learn from their notes and PDFs. Upload documents, and the AI tutor retrieves, chunks, and uses GEMINI to generate contextual answers.",
      tech: ["Python", "LangChain", "FAISS", "Gemini API", "RAG", "Streamlit"],
      github: "https://github.com/aakankshamalhotra/Questor",
      year: "2025",
      icon: Brain
    },
    {
      title: "Emotion Recognition App",
      subtitle: "Real-Time CNN System",
      description: "Advanced deep learning application that detects six different emotions in real-time using convolutional neural networks. Features dynamic dashboards and an interactive interface for emotion analysis.",
      tech: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN", "Streamlit"],
      github: "https://github.com/aakankshamalhotra/Emotion_Recognition_App",
      year: "2024",
      icon: Sparkles
    },
    {
      title: "COVID Detection System",
      subtitle: "Medical Imaging AI",
      description: "ResNet-based deep learning model for detecting COVID-19 from chest X-ray images with high accuracy. Provides medical professionals with AI-assisted diagnosis capabilities.",
      tech: ["Python", "Keras", "TensorFlow", "ResNet", "OpenCV", "Medical Imaging"],
      github: "https://github.com/aakankshamalhotra/covid_detection",
      year: "2023",
      icon: Database
    },
    {
      title: "Parking Automation System",
      subtitle: "Smart Management Solution",
      description: "Automated parking management system designed to streamline parking operations, reduce congestion, and improve user experience through intelligent automation.",
      tech: ["Python", "Computer Vision", "Automation", "IoT"],
      github: "https://github.com/aakankshamalhotra/project_Parking_Automation_System",
      year: "2023",
      icon: Server
    }
  ];

  const experience = [
    {
      role: "AI Expert Intern",
      company: "Soleb2b",
      period: "Jul – Sep 2025",
      location: "Remote, Canada",
      description: "Building predictive ML models, CRM-focused segmentation, and recommendation systems with AWS SageMaker. Designing and deploying end-to-end ML pipelines with MLOps practices to improve personalization and decision-making.",
      skills: ["AWS SageMaker", "MLOps", "ML Pipelines", "Predictive Modeling"]
    },
    {
      role: "IT Trainee",
      company: "Gaurang Foundation",
      period: "Sep 2024 – May 2025",
      location: "Delhi, India",
      description: "Data collection, cleaning, and preprocessing for social impact projects. Conducted exploratory data analysis (EDA), model evaluation, and developed comprehensive data visualizations and reports.",
      skills: ["Data Analysis", "EDA", "Visualization", "Model Evaluation"]
    },
    {
      role: "Summer Trainee",
      company: "IBM",
      period: "Jul – Aug 2024",
      location: "Delhi, India",
      description: "Acquired AI and Deep Learning skills with Python. Created Watson Chatbot using IBM Cloud and built real-time projects based on deep learning, AI, and machine learning concepts.",
      skills: ["IBM Watson", "AI/ML", "Deep Learning", "Cloud Computing"]
    }
  ];

  const skills = [
    { name: "Python", Icon: SiPython, color: "#3776AB" },
    { name: "Java", Icon: FaJava, color: "#007396" },
    { name: "SQL", Icon: SiMysql, color: "#4479A1" },
    { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", Icon: SiCss3, color: "#1572B6" },
    { name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },
    { name: "PyTorch", Icon: SiPytorch, color: "#EE4C2C" },
    { name: "Keras", Icon: SiKeras, color: "#D00000" },
    { name: "Scikit-learn", Icon: SiScikitlearn, color: "#F7931E" },
    { name: "LangChain", Icon: Code2, color: "#60A5FA" },
    { name: "HuggingFace", Icon: Brain, color: "#FFD21E" },
    { name: "Pandas", Icon: SiPandas, color: "#150458" },
    { name: "NumPy", Icon: SiNumpy, color: "#013243" },
    { name: "Matplotlib", Icon: Sparkles, color: "#11557C" },
    { name: "Seaborn", Icon: Database, color: "#4C8CBF" },
    { name: "OpenCV", Icon: SiOpencv, color: "#5C3EE8" },
    { name: "AWS", Icon: FaAws, color: "#FF9900" },
    { name: "GCP", Icon: SiGooglecloud, color: "#4285F4" },
    { name: "Streamlit", Icon: SiStreamlit, color: "#FF4B4B" },
    { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
    { name: "FAISS", Icon: Server, color: "#00ADD8" },
    { name: "MATLAB", Icon: Code2, color: "#0076A8" }
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 relative overflow-hidden">
      <StarField />

      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.08), transparent 80%)`
        }}
      />

      <div className="relative z-10">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-zinc-800/50"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              className="text-xl font-semibold tracking-tight hover:text-blue-400 transition-colors"
            >
              Aakanksha
            </motion.a>
            <div className="hidden md:flex gap-8 items-center">
              {['about', 'projects', 'experience', 'skills', 'contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  whileHover={{ y: -2 }}
                  className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors capitalize"
                >
                  {item}
                </motion.a>
              ))}
            </div>
            <div className="flex gap-6">
              {[
                { href: "https://github.com/aakankshamalhotra", Icon: Github },
                { href: "https://www.linkedin.com/in/aakanksha-malhotra-407427279/", Icon: Linkedin },
                { href: "mailto:aakanksha.malhotra911@gmail.com", Icon: Mail }
              ].map(({ href, Icon }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="hover:text-blue-400 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.nav>

        <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
          <motion.div
            style={{ scale }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.h1 className="text-4xl md:text-6xl mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-light tracking-wide"
              >
                HI, I AM
              </motion.div>
              <AnimatePresence mode="wait">
                {!showName ? (
                  <motion.div
                    key="engineer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-blue-400 font-light tracking-wide"
                  >
                    AN ENGINEER
                  </motion.div>
                ) : (
                  <motion.div
                    key="name"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="font-bold tracking-tight"
                  >
                    <span className="text-blue-400">AAKANKSHA</span>
                    <br />
                    <span className="text-zinc-500">MALHOTRA</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-6 flex items-center justify-center gap-2 text-zinc-400"
            >
              <Terminal className="w-4 h-4" />
              <span className="text-sm font-mono">AI/ML Engineer</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Building intelligent systems with machine learning and deep learning.
              Specialized in RAG architectures, computer vision, and MLOps.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex gap-4 justify-center"
            >
              <motion.a
                href="mailto:aakanksha.malhotra911@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors inline-flex items-center gap-2 group"
              >
                Get in touch
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-zinc-700 hover:border-zinc-500 rounded-lg transition-colors"
              >
                View work
              </motion.a>
            </motion.div>

            <motion.div
              style={{ opacity }}
              className="mt-20 flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-zinc-600 text-2xl"
              >
                ↓
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <motion.section
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="py-32 px-6 border-t border-zinc-800/50"
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-16"
            >
              About Me
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-4xl font-bold mb-6">Creating intelligent solutions through AI & ML</h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <div className="border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <Briefcase className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Education</h4>
                      <p className="text-zinc-400 text-sm">B.Tech in Information Technology</p>
                      <p className="text-zinc-500 text-sm">ADGIPS | 2022 – 2026 | CGPA: 8.55</p>
                    </div>
                  </div>
                </div>

                <div className="border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <Code2 className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Focus Areas</h4>
                      <p className="text-zinc-400 text-sm">Machine Learning • Deep Learning • Computer Vision • NLP • RAG Systems • MLOps</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </motion.section>

        <motion.section
          id="projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="py-32 px-6 border-t border-zinc-800/50"
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-16"
            >
              Featured Projects
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.a
                  key={index}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -10 }}
                  className="block group"
                >
                  <div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-8 hover:border-zinc-600 transition-all h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                        <project.icon className="w-8 h-8 text-blue-400" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-zinc-500">{project.year}</span>
                        <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-500 mb-4">{project.subtitle}</p>
                    <p className="text-zinc-400 leading-relaxed mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-zinc-800/50 text-zinc-400 rounded-md text-xs border border-zinc-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="experience"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="py-32 px-6 border-t border-zinc-800/50"
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-16"
            >
              Experience
            </motion.h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ x: 10 }}
                  className="group bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 hover:border-zinc-600 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-blue-400 font-semibold mb-1">{exp.company}</p>
                      <p className="text-zinc-500 text-sm">{exp.location}</p>
                    </div>
                    <span className="text-sm text-zinc-500 mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-zinc-400 leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-zinc-800/50 text-zinc-400 rounded-md text-xs border border-zinc-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="py-32 px-6 border-t border-zinc-800/50"
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-16"
            >
              Technical Skills
            </motion.h2>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center gap-3 p-6 bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-xl hover:border-zinc-600 transition-all cursor-pointer group"
                >
                  <div className="relative">
                    <skill.Icon
                      className="w-12 h-12 transition-colors"
                      style={{ color: skill.color }}
                    />
                  </div>
                  <span className="text-xs text-zinc-400 text-center group-hover:text-zinc-100 transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="py-32 px-6 border-t border-zinc-800/50"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={itemVariants} className="text-5xl font-bold mb-6">
              Let's work together
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
              Open to discussing AI/ML projects, research collaborations, and exciting opportunities.
              Let's create something amazing together.
            </motion.p>

            <motion.div variants={itemVariants} className="grid md:grid-cols-4 gap-6 mb-12">
              <a
                href="mailto:aakanksha.malhotra911@gmail.com"
                className="border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all hover:bg-zinc-900/30"
              >
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <p className="font-semibold mb-1">Email</p>
                <p className="text-sm text-zinc-500 break-all">aakanksha.malhotra911@gmail.com</p>
              </a>

              <a
                href="tel:+917827914394"
                className="border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all hover:bg-zinc-900/30"
              >
                <Terminal className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <p className="font-semibold mb-1">Phone</p>
                <p className="text-sm text-zinc-500">+91 7827914394</p>
              </a>

              <a
                href="https://github.com/aakankshamalhotra"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all hover:bg-zinc-900/30"
              >
                <Github className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <p className="font-semibold mb-1">GitHub</p>
                <p className="text-sm text-zinc-500">@aakankshamalhotra</p>
              </a>

              <a
                href="https://www.linkedin.com/in/aakanksha-malhotra-407427279/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all hover:bg-zinc-900/30"
              >
                <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <p className="font-semibold mb-1">LinkedIn</p>
                <p className="text-sm text-zinc-500">Aakanksha Malhotra</p>
              </a>
            </motion.div>

            <motion.a
              variants={itemVariants}
              href="mailto:aakanksha.malhotra911@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-lg group"
            >
              Start a conversation
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-zinc-800/50 py-12 px-6"
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">© 2025 Aakanksha Malhotra. Built with React & Framer Motion.</p>
            <div className="flex gap-6">
              {[
                { href: "https://github.com/aakankshamalhotra", label: "GitHub" },
                { href: "https://www.linkedin.com/in/aakanksha-malhotra-407427279/", label: "LinkedIn" },
                { href: "mailto:aakanksha.malhotra911@gmail.com", label: "Email" }
              ].map(({ href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ y: -2 }}
                  className="text-zinc-500 hover:text-zinc-300 transition-colors text-sm"
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;
