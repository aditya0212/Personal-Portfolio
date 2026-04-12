import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { Github, ExternalLink, Calendar } from "lucide-react";
import { useTheme } from "../components/ThemeProvider";
import { useState } from "react"; // ✅ ADDED

const projects = [
  {
    title: "Power Vocab App",
    images: [
      "/projects/PowerVocab1.png",
      "/projects/PowerVocab2.png",
      "/projects/PowerVocab3.png",
      "/projects/PowerVocab4.png"
    ],
    description: "A full-stack vocabulary learning web app with Google OAuth, real-time Firestore sync, and AI-powered sentence generation via OpenAI API. Features animated card-based learning, per-word progress tracking, streaks, and an adaptive MCQ quiz module.",
    tech: ["React", "TypeScript", "Firebase", "OpenAI API", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Built and deployed on Firebase Hosting with Google OAuth + email auth and protected routes.",
      "Integrated OpenAI API for contextual AI sentence generation per word.",
      "Engineered live user stats (streak, words learned, quiz scores) via React Context and Firestore.",
    ],
    year: "2026",
    gradient: "from-violet-600/15 via-purple-600/5 to-transparent",
    badgeColor: "bg-purple-500/20 text-purple-300 border border-purple-500/20",
    dotColor: "from-purple-500 to-fuchsia-500",
    github: "https://github.com/aditya0212/Power-Vocab",
  },
  {
    title: "AI Data Analyst Copilot",
    images: [
      "/projects/AI1.png",
      "/projects/AI2.png",
      "/projects/AI3.png",
      "/projects/AI4.png"
    ],
    description: "An AI-powered data analysis tool where users query CSV datasets in plain English. The LLM converts input to executable Pandas code and auto-generates Matplotlib visualizations, with a RAG pipeline grounding prompts with live dataset context.",
    tech: ["Python", "FastAPI", "LangChain", "FAISS", "RAG", "Streamlit", "OpenRouter API"],
    highlights: [
      "Built a code sanitization and validation pipeline — reducing runtime errors by ~65%.",
      "Engineered a RAG pipeline using FAISS vector search over dataset schema, cutting hallucinated column references by ~60%.",
      "Deployed on Streamlit Cloud with multi-turn analyst sessions.",
    ],
    year: "2026",
    gradient: "from-cyan-600/15 via-blue-600/5 to-transparent",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/20",
    dotColor: "from-cyan-500 to-blue-500",
    github: "https://github.com/aditya0212/AI_Data_Analyst_Copilot",
  },
  {
    title: "Meca",
    images: [
      "/projects/Meca1.png",
      "/projects/Meca2.png",
      "/projects/Meca3.png",
      "/projects/Meca4.png"
    ],
    description: "A centralized meeting management system to organize and persist virtual meeting links, reducing scheduling overhead for teams. Features automated meeting reminder logic and a responsive UI with structured backend data processing.",
    tech: ["Java", "HTML", "CSS", "JavaScript", "TypeScript"],
    highlights: [
      "Built a centralized meeting management system to organize and persist virtual meeting links, reducing scheduling overhead for teams.",
      "Implemented automated meeting reminder logic, improving on-time attendance rates by eliminating manual follow-ups.",
      "Designed a responsive UI with structured backend data processing, resulting in faster load times and a cleaner user workflow.",
    ],
    year: "2026",
    gradient: "from-pink-600/15 via-rose-600/5 to-transparent",
    badgeColor: "bg-pink-500/20 text-pink-300 border border-pink-500/20",
    dotColor: "from-pink-500 to-rose-500",
    github: "https://github.com/aditya0212/Meca",
  },
];

export default function Projects() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [selectedImage, setSelectedImage] = useState<string | null>(null); // ✅ ADDED

  return (
    <PageTransition>
      <div className="w-full max-w-5xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h1 className={`text-4xl md:text-6xl font-black tracking-tighter mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className={`text-base max-w-2xl ${isDark ? "text-white/40" : "text-gray-500"}`}>
            Real-world solutions crafted with code, data, and intelligent systems.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="card-elevated card-glow rounded-2xl p-8 transition-all duration-300 group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">

                {project.images && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    {project.images.map((img, idx) => (
                      <div key={idx} className="rounded-xl bg-black/5 p-2 flex items-center justify-center">
                        <img
                          src={img}
                          alt={`preview-${idx}`}
                          onClick={() => setSelectedImage(img)} // ✅ ADDED
                          className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105 cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <h2 className={`text-xl font-bold group-hover:text-gradient transition-all ${isDark ? "text-white" : "text-gray-900"}`}>{project.title}</h2>
                    <span className={`text-xs font-mono flex items-center gap-1.5 mt-1 ${isDark ? "text-white/30" : "text-gray-400"}`}>
                      <Calendar size={11} /> {project.year}
                    </span>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border transition-all ${
                      isDark ? "border-white/10 hover:bg-white/5 hover:border-purple-400/30 text-white/50 hover:text-white"
                        : "border-gray-200 hover:bg-purple-50 hover:border-purple-300 text-gray-500 hover:text-purple-600"
                    }`}
                  >
                    <Github size={14} /> GitHub <ExternalLink size={10} />
                  </a>
                </div>

                <p className={`text-sm leading-relaxed mb-5 ${isDark ? "text-white/40" : "text-gray-500"}`}>{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className={`text-xs font-medium px-3 py-1.5 rounded-full ${project.badgeColor}`}>
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3">
                  {project.highlights.map((h, j) => (
                    <li key={j} className={`flex gap-3 text-sm ${isDark ? "text-white/40" : "text-gray-500"}`}>
                      <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 bg-gradient-to-r ${project.dotColor}`} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✅ MODAL ADDED */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              className="max-w-full max-h-full rounded-xl shadow-2xl"
            />
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href="https://github.com/aditya0212" target="_blank" rel="noopener noreferrer">
            <motion.span
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium border text-sm cursor-pointer transition-all duration-300 ${
                isDark ? "border-white/15 hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/10 text-white"
                  : "border-gray-200 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-200/30 text-gray-700"
              }`}
            >
              <Github size={16} /> View All on GitHub
            </motion.span>
          </a>
        </motion.div>
      </div>
    </PageTransition>
  );
}