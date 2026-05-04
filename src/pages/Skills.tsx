import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { Award, ExternalLink, Settings, Database, Code, BarChart3, Shield } from "lucide-react";
import { useTheme } from "../components/ThemeProvider";

const skillGroups = [
  {
    category: "Languages",
    color: "from-purple-500 to-violet-600",
    titleColor: "text-purple-400",
    borderColor: "border-purple-500/20",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    color: "from-cyan-500 to-blue-600",
    titleColor: "text-cyan-400",
    borderColor: "border-cyan-500/20",
    skills: [
      { name: "FastAPI", level: 90 },
      { name: "React", level: 85 },
      { name: "LangChain", level: 85 },
      { name: "Flask", level: 80 },
      { name: "Streamlit", level: 80 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    category: "Databases",
    color: "from-pink-500 to-rose-600",
    titleColor: "text-pink-400",
    borderColor: "border-pink-500/20",
    skills: [
      { name: "Supabase", level: 90 },
      { name: "PostgreSQL", level: 90 },
      { name: "SSMS", level: 85 },
      { name: "Firebase Firestore", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Redis", level: 75 },
    ],
  },
  {
    category: "Tools & Platforms",
    color: "from-amber-500 to-orange-600",
    titleColor: "text-amber-400",
    borderColor: "border-amber-500/20",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 85 },
      { name: "Postman", level: 85 },
      { name: "Linux/Bash", level: 80 },
      { name: "Pytest", level: 80 },
      { name: "JIRA", level: 75 },
    ],
  },
  {
    category: "CI/CD & Cloud",
    color: "from-emerald-500 to-green-600",
    titleColor: "text-emerald-400",
    borderColor: "border-emerald-500/20",
    skills: [
      { name: "GitHub Actions", level: 85 },
      { name: "Firebase Hosting", level: 80 },
      { name: "Streamlit Cloud", level: 80 },
      { name: "Vercel", level: 80 },
      { name: "Render", level: 75 },
      { name: "Brevo", level: 75 },
    ],
  },
  {
    category: "AI / ML",
    color: "from-fuchsia-500 to-purple-600",
    titleColor: "text-fuchsia-400",
    borderColor: "border-fuchsia-500/20",
    skills: [
      { name: "LLM APIs", level: 90 },
      { name: "RAG (FAISS)", level: 85 },
      { name: "Prompt Engineering", level: 85 },
      { name: "Pandas/NumPy", level: 85 },
      { name: "Scikit-learn", level: 80 },
      { name: "TensorFlow", level: 75 },
    ],
  },
];

const certIcons = [
  <Settings size={22} className="text-red-400" />,
  <Database size={22} className="text-cyan-400" />,
  <Code size={22} className="text-violet-400" />,
  <BarChart3 size={22} className="text-orange-400" />,
  <Shield size={22} className="text-emerald-400" />,
  <Settings size={22} className="text-blue-400" />,
];

const certifications = [
  {
    name: "Deep Learning Specialization",
    subtitle: "(Professional Certificate)",
    issuer: "DeepLearning.AI",
    link: "https://coursera.org/share/b628d6bbd8d9faf0c1ae9663456769d4",
    logo: "/logos/deeplearningai.svg",
  },
  {
    name: "Azure AI Essentials",
    subtitle: "(Professional Certificate)",
    issuer: "Microsoft",
    link: "https://www.linkedin.com/learning/certificates/fbd05625ab522d0030dcd81106d4a396cea98b321abca96a92571c52f6484581",
    logo: "/logos/microsoft.svg",
  },
  {
    name: "Introduction to Computer Vision",
    subtitle: "(Professional Certificate)",
    issuer: "IBM",
    link: "https://coursera.org/share/13802d5b72c715a2797f2826bcd0d3b5",
    logo: "/logos/ibm.svg",
  },
  {
    name: "Mastering System Design",
    subtitle: "(Professional Certificate)",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-e70436a8-5e95-4f50-8009-91190388f8d3/",
    logo: "/logos/udemy.svg",
  },
  {
    name: "Data Structures and Algorithms",
    subtitle: "(Professional Certificate)",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-8edea096-a905-4fcd-9dcc-e10f43a0d89d/",
    logo: "/logos/udemy.svg",
  },
  {
    name: "Prepare Data for Exploration",
    subtitle: "(Professional Certificate)",
    issuer: "Google",
    link: "https://coursera.org/share/36ed46e984b05f948cec6d2d3018a058",
    logo: "/logos/google.svg",
  },
  {
    name: "Kubernetes in AWS",
    subtitle: "(Professional Certificate)",
    issuer: "Coursera",
    link: "https://coursera.org/share/5e413a1a73f10f9d26aa542e5af4388d",
    logo: "/logos/coursera.svg",
  },
];

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <PageTransition>
      <div className="w-full max-w-6xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h1 className={`text-4xl md:text-6xl font-black tracking-tighter mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
            Tech <span className="text-gradient">Skills</span>
          </h1>
          <p className={`text-base max-w-2xl ${isDark ? "text-white/40" : "text-gray-500"}`}>
            The tools and technologies I work with day-to-day, and reach for when building something new.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-28">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className={`card-elevated card-glow rounded-2xl p-6 transition-all duration-300 ${group.borderColor}`}
            >
              <h3 className={`font-bold text-sm mb-6 ${group.titleColor} flex items-center gap-2`}>
                <span className={`w-1.5 h-5 rounded-full bg-gradient-to-b ${group.color}`} />
                {group.category}
              </h3>
              <div className="space-y-5">
                {group.skills.map((skill, j) => (
                  <div key={j}>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-sm font-medium ${isDark ? "text-white/75" : "text-gray-700"}`}>{skill.name}</span>
                      <span className={`text-xs font-mono ${isDark ? "text-white/30" : "text-gray-400"}`}>{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, delay: j * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        className={`h-full rounded-full bg-gradient-to-r ${group.color} shadow-sm`}
                        style={{ boxShadow: `0 0 8px rgba(192,132,252,0.2)` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="glow-line" />
            <Award className="text-purple-400" size={22} />
            <h2 className={`text-2xl md:text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Certifications</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.a
                key={i}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="card-elevated card-glow rounded-xl p-6 transition-all duration-300 group cursor-pointer block"
              >
                {/* Top Row */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    {certIcons[i % certIcons.length]}
                  </div>

                  <ExternalLink
                    size={14}
                    className="text-white/20 group-hover:text-purple-400 transition-colors"
                  />
                </div>

                {/* Title */}
                <h4 className={`font-semibold text-sm mb-1 leading-tight group-hover:text-gradient transition-all ${isDark ? "text-white" : "text-gray-900"}`}>
                  {cert.name}
                </h4>

                {/* Subtitle */}
                {cert.subtitle && (
                  <p className="text-xs text-purple-400 mb-1">
                    {cert.subtitle}
                  </p>
                )}

                {/* Bottom Row */}
                <div className="flex items-end justify-between mt-3">
                  <p className={`text-xs ${isDark ? "text-white/35" : "text-gray-500"}`}>
                    {cert.issuer}
                  </p>

                  {cert.logo && (
                    <img
                      src={cert.logo}
                      alt={cert.issuer}
                      className="h-6 w-6 object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition duration-300"
                    />
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
