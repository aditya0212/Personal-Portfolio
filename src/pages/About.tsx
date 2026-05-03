import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { Briefcase, GraduationCap, Heart, Trophy, Sparkles } from "lucide-react";
import { useTheme } from "../components/ThemeProvider";

const BASE = import.meta.env.BASE_URL;

const stats = [
  { value: "5+", label: "MICROSERVICES", color: "text-purple-400", bg: "from-purple-500/15 to-purple-900/5" },
  { value: "100+", label: "QUERIES OPTIMIZED", color: "text-cyan-400", bg: "from-cyan-500/15 to-cyan-900/5" },
  { value: "10+", label: "APIS DESIGNED", color: "text-pink-400", bg: "from-pink-500/15 to-pink-900/5" },
  { value: "70%+", label: "TEST COVERAGE", color: "text-emerald-400", bg: "from-emerald-500/15 to-emerald-900/5" },
];

const experiencePoints = [
  "Architected 5+ Python/SQL microservices across 3+ business units",
  "Optimized 100+ SQL queries, cutting latency by ~40%",
  "Designed 10+ REST APIs, reducing integration failures ~30%",
  "Pushed test coverage from 0% to 70%+ on two core modules",
  "Shipped 2 production modules serving 500+ end users",
  "Built CI pipelines reducing onboarding from 8h to under 2h",
];

const education = [
  {
    institution: "Bennett University",
    degree: "B.Tech in Computer Science Engineering",
    major: "Major in Artificial Intelligence",
    period: "Aug 2020 - Jun 2024",
    location: "Greater Noida, India",
    score: "8.32",
    scoreLabel: "CGPA",
    icon: "\u{1F393}",
    accentColor: "purple",
    coursework: ["ML", "Deep Learning", "DBMS", "DSA", "OS", "OOP", "Networks", "System Design"],
    achievements: ["50% merit scholarship for academic performance", "Project Management Head, Enactus BU", "Social Media Head, IBF (Indian Blockchain Fraternity)"],
  },
  {
    institution: "Greater Valley School",
    degree: "Class XII (CBSE)",
    major: "PCM (Physics, Chemistry, Mathematics)",
    period: "2019",
    location: "Greater Noida, India",
    score: "94%",
    scoreLabel: "PERCENTAGE",
    icon: "\u{1F3C5}",
    accentColor: "cyan",
    coursework: [],
    achievements: ["Gold Medalist"],
  },
  {
    institution: "Guru Harkrishan Public School",
    degree: "Class X (CBSE)",
    major: "",
    period: "2017",
    location: "Delhi, India",
    score: "8.4",
    scoreLabel: "CGPA",
    icon: "\u{1F4D0}",
    accentColor: "pink",
    coursework: [],
    achievements: ["Won Maths Olympiad"],
  },
];

const hobbies = [
  { icon: "\u{1F4AA}", label: "Gym & Fitness", desc: "Daily training is non-negotiable \u2014 it keeps me sharp.", color: "from-rose-500/15 to-transparent" },
  { icon: "\u{1F3CF}", label: "Cricket", desc: "Love both the strategy and the team dynamic.", color: "from-green-500/15 to-transparent" },
  { icon: "\u{1F3F8}", label: "Badminton", desc: "Fast-paced and competitive.", color: "from-blue-500/15 to-transparent" },
  { icon: "\u{1F3BE}", label: "Pickleball", desc: "Enjoying it way more than expected.", color: "from-yellow-500/15 to-transparent" },
  { icon: "\u{1F916}", label: "AI & Tech News", desc: "Keeping up with latest research.", color: "from-violet-500/15 to-transparent" },
  { icon: "\u{1F3AC}", label: "Documentaries", desc: "Tech, history, and science.", color: "from-pink-500/15 to-transparent" },
  { icon: "\u265F\uFE0F", label: "Strategy", desc: "Drawn to clean, well-thought-out solutions.", color: "from-cyan-500/15 to-transparent" },
  { icon: "\u{1F4D6}", label: "Reading", desc: "Books on tech, psychology, and self-growth.", color: "from-amber-500/15 to-transparent" },
];

const courseColors = [
  "bg-purple-500/80", "bg-pink-500/80", "bg-cyan-500/80", "bg-yellow-500/80",
  "bg-green-500/80", "bg-orange-500/80", "bg-blue-500/80", "bg-red-500/80",
];

const accentMap: Record<string, string> = {
  purple: "from-purple-500 to-fuchsia-500",
  cyan: "from-cyan-500 to-blue-500",
  pink: "from-pink-500 to-rose-500",
};

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <PageTransition>
      <div className="w-full max-w-5xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-28 flex flex-col md:flex-row gap-10 items-start"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex-shrink-0 relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500/40 via-pink-500/30 to-cyan-400/20 rounded-2xl opacity-50 blur-[2px] group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative w-40 h-48 md:w-48 md:h-56 rounded-2xl overflow-hidden ring-2 ring-white/10">
              <img
                src={`${BASE}aditya.jpg`}
                alt="Aditya Singh"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={16} className="text-purple-400" />
                <span className="text-xs font-mono text-purple-400/70 uppercase tracking-widest">About Me</span>
              </div>
              <h1 className={`text-4xl md:text-5xl font-black tracking-tighter mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                My <span className="text-gradient">Story</span>
              </h1>
              <h2 className={`text-xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>Aditya Singh</h2>
              <p className={`text-sm mb-5 flex items-center gap-2 ${isDark ? "text-white/45" : "text-gray-500"}`}>
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
                Backend Engineer at TCS | Greater Noida, India
              </p>
              <div className={`space-y-4 text-sm leading-relaxed ${isDark ? "text-white/45" : "text-gray-600"}`}>
                <p>
                  Backend Engineer with 2 years owning Python/FastAPI microservices in production. CS graduate with an AI major from Bennett University, targeting Backend, Data Engineering, and Applied AI roles.
                </p>
                <p>
                  I care about writing clean, testable code, owning my work end-to-end, and shipping things that actually work in production. Systems design, performance optimisation, and developer experience are things I think about constantly.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-28"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="glow-line" />
            <Briefcase className="text-purple-400" size={22} />
            <h2 className={`text-2xl md:text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Experience</h2>
          </div>

          <div className="relative pl-8 border-l-2 border-gradient-to-b border-purple-500/30">
            <div className="absolute left-[-7px] top-0 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-[#0c0820]/80" />

            <div className="card-elevated card-glow rounded-2xl p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Backend Engineer</h3>
                  <p className="text-purple-400 font-semibold text-sm">Tata Consultancy Services (TCS)</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-green-500/20 text-green-400 uppercase tracking-wider border border-green-500/20">Current</span>
                  <span className={`text-xs font-mono ${isDark ? "text-white/35" : "text-gray-400"}`}>Sep 2024 - Present</span>
                </div>
              </div>

              <p className={`text-sm mb-7 leading-relaxed ${isDark ? "text-white/40" : "text-gray-500"}`}>
                Owning Python/FastAPI microservices in production, serving 1000+ users with 99%+ uptime across multiple business units.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-7">
                {stats.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`rounded-xl bg-gradient-to-br ${s.bg} p-4 text-center border border-white/5 transition-all`}
                  >
                    <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
                    <div className={`text-[9px] font-mono uppercase tracking-widest mt-1 ${isDark ? "text-white/30" : "text-gray-400"}`}>{s.label}</div>
                  </motion.div>
                ))}
              </div>

              <ul className="space-y-3">
                {experiencePoints.map((point, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.06 }}
                    className={`flex gap-3 text-sm group ${isDark ? "text-white/45" : "text-gray-600"}`}
                  >
                    <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-shadow" />
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-28"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="glow-line" />
            <GraduationCap className="text-purple-400" size={22} />
            <h2 className={`text-2xl md:text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -3 }}
                className="card-elevated card-glow rounded-2xl p-8 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex gap-4 items-start">
                    <span className="text-3xl">{edu.icon}</span>
                    <div>
                      <h3 className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`}>{edu.institution}</h3>
                      <p className="text-purple-400 font-medium text-sm">{edu.degree}</p>
                      {edu.major && <p className={`text-xs mt-0.5 ${isDark ? "text-white/35" : "text-gray-400"}`}>{edu.major}</p>}
                      <p className={`text-xs mt-1 ${isDark ? "text-white/25" : "text-gray-400"}`}>{edu.period} | {edu.location}</p>
                    </div>
                  </div>
                  <div className={`rounded-xl bg-gradient-to-br ${accentMap[edu.accentColor]} px-5 py-3 text-center flex-shrink-0 shadow-lg`}>
                    <div className="text-2xl font-black text-white">{edu.score}</div>
                    <div className="text-[9px] font-mono text-white/60 uppercase tracking-widest">{edu.scoreLabel}</div>
                  </div>
                </div>

                {edu.coursework.length > 0 && (
                  <div className="mt-5">
                    <p className={`text-xs font-semibold mb-3 flex items-center gap-1.5 ${isDark ? "text-white/50" : "text-gray-500"}`}>{"\u{1F4DA}"} Relevant Coursework</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((c, j) => (
                        <span
                          key={j}
                          className={`text-xs font-bold px-3 py-1.5 rounded-full text-white ${courseColors[j % courseColors.length]} shadow-sm`}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {edu.achievements.length > 0 && (
                  <div className="mt-5">
                    <ul className="space-y-2">
                      {edu.achievements.map((a, j) => (
                        <li key={j} className={`flex gap-2.5 text-sm ${isDark ? "text-white/45" : "text-gray-600"}`}>
                          <Trophy size={13} className="mt-0.5 text-amber-400 flex-shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="glow-line" />
            <Heart className="text-pink-400" size={22} />
            <h2 className={`text-2xl md:text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Beyond the Code</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {hobbies.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="relative rounded-xl p-5 card-elevated overflow-hidden transition-all duration-300 group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${h.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <span className="text-3xl block mb-3">{h.icon}</span>
                  <h4 className={`font-bold text-xs mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>{h.label}</h4>
                  <p className={`text-[10px] leading-relaxed ${isDark ? "text-white/30" : "text-gray-400"}`}>{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
