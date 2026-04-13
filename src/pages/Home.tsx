import { motion } from "framer-motion";
import { Download, ArrowRight, Github, Linkedin } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState, lazy, Suspense } from "react";
import PageTransition from "../components/PageTransition";
import { useTheme } from "../components/ThemeProvider";

const BASE = import.meta.env.BASE_URL;
const HeroScene = lazy(() => import("../components/HeroScene"));

const roles = ["Backend Systems", "AI/ML Pipelines", "Data Engineering", "Scalable APIs"];

function useTypingEffect(words: string[], typingSpeed = 80, deletingSpeed = 50, pauseTime = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timeout = setTimeout(() => {
        setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
      }, speed);
    }
    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

const DOMAINS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "AI / ML",
    desc: "LLM integration, RAG pipelines with FAISS & LangChain, prompt engineering, and deep learning with TensorFlow.",
    gradient: "from-violet-600/20 via-purple-600/10 to-transparent",
    borderGlow: "hover:shadow-violet-500/10",
    iconBg: "from-violet-500/20 to-purple-500/10",
    iconColor: "text-violet-400",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Backend Engineering",
    desc: "Python/FastAPI microservices, REST API design, SQL optimization, serving 1000+ users with 99%+ uptime.",
    gradient: "from-cyan-600/20 via-blue-600/10 to-transparent",
    borderGlow: "hover:shadow-cyan-500/10",
    iconBg: "from-cyan-500/20 to-blue-500/10",
    iconColor: "text-cyan-400",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "DevOps & CI/CD",
    desc: "Docker containerization, GitHub Actions pipelines, automated testing with pytest, and cloud deployments.",
    gradient: "from-pink-600/20 via-rose-600/10 to-transparent",
    borderGlow: "hover:shadow-pink-500/10",
    iconBg: "from-pink-500/20 to-rose-500/10",
    iconColor: "text-pink-400",
  },
];

export default function Home() {
  const typedRole = useTypingEffect(roles);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <PageTransition>
      <div className="w-full flex flex-col items-center">
        <section
          className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden"
          style={{
            background: isDark
              ? "radial-gradient(ellipse at 50% 50%, #0d0b2e 0%, #07060f 70%, #030305 100%)"
              : "radial-gradient(ellipse at 50% 50%, #f0ecff 0%, #f8fafc 70%, #ffffff 100%)",
          }}
        >
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>

          <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6">
                <span className={isDark ? "text-white" : "text-gray-900"}>Hi, I'm </span>
                <span className="text-gradient">Aditya</span>
              </h1>
              <div className="text-lg md:text-xl font-mono mt-4 h-8 flex items-center justify-center gap-1">
                <span className={isDark ? "text-purple-300/70" : "text-purple-500/70"}>&lt;</span>
                <span className={isDark ? "text-white/60" : "text-gray-600"}>{typedRole}</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-0.5 h-5 bg-cyan-400"
                />
                <span className={isDark ? "text-purple-300/70" : "text-purple-500/70"}>/&gt;</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className={`text-sm md:text-base max-w-xl mx-auto mb-8 mt-6 leading-relaxed ${isDark ? "text-white/40" : "text-gray-500"}`}
            >
              Building production microservices at TCS with Python & FastAPI.
              <br />
              CS graduate with an AI major — passionate about scalable systems and intelligent software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col items-center gap-5"
            >
              <a href={`${BASE}Aditya_Singh_Resume.pdf`} download="Aditya_Singh_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <motion.span
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 shadow-xl shadow-purple-500/25 cursor-pointer text-sm animate-gradient-x"
                  style={{ backgroundSize: "200% 200%" }}
                >
                  <Download size={16} /> Download Resume
                </motion.span>
              </a>

              <div className="flex items-center gap-3">
                <a href="https://github.com/aditya0212" target="_blank" rel="noopener noreferrer">
                  <motion.span
                    whileHover={{ scale: 1.15, y: -2, boxShadow: "0 0 20px rgba(192,132,252,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center justify-center w-10 h-10 rounded-full border cursor-pointer backdrop-blur-sm ${
                      isDark ? "border-white/10 bg-white/5 text-white/60 hover:text-white hover:border-purple-400/40"
                        : "border-gray-200 bg-white/50 text-gray-500 hover:text-purple-600 hover:border-purple-300"
                    }`}
                  >
                    <Github size={18} />
                  </motion.span>
                </a>
                <a href="https://linkedin.com/in/aditya-singh-a277461b4" target="_blank" rel="noopener noreferrer">
                  <motion.span
                    whileHover={{ scale: 1.15, y: -2, boxShadow: "0 0 20px rgba(96,165,250,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center justify-center w-10 h-10 rounded-full border cursor-pointer backdrop-blur-sm ${
                      isDark ? "border-white/10 bg-white/5 text-white/60 hover:text-blue-400 hover:border-blue-400/40"
                        : "border-gray-200 bg-white/50 text-gray-500 hover:text-blue-600 hover:border-blue-300"
                    }`}
                  >
                    <Linkedin size={18} />
                  </motion.span>
                </a>
              </div>
            </motion.div>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{
              background: isDark
                ? "linear-gradient(to bottom, transparent, #0c0920)"
                : "linear-gradient(to bottom, transparent, #e8e0ff)",
            }}
          />
        </section>

        <section className="py-28 px-6 w-full max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-5xl font-bold mb-5 tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
              Building <span className="text-gradient">Production Systems</span> that Scale
            </h2>
            <p className={`text-base max-w-2xl mx-auto leading-relaxed ${isDark ? "text-white/40" : "text-gray-500"}`}>
              Backend Engineer at TCS with 1.5+ years owning Python/FastAPI microservices.
              <br />
              CS graduate with an AI major from Bennett University. Hands-on with LLM integration, RAG pipelines, and CI/CD automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {DOMAINS.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`group relative rounded-2xl p-7 card-elevated card-glow transition-all duration-300 ${d.borderGlow} hover:shadow-xl`}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${d.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br ${d.iconBg} ${d.iconColor} ring-1 ring-white/5`}>
                    {d.icon}
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>{d.title}</h3>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-white/40" : "text-gray-500"}`}>{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="pb-28 px-6 w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/about">
              <motion.span
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-purple-600/80 via-fuchsia-500/70 to-pink-500/60 shadow-lg shadow-purple-500/15 cursor-pointer"
              >
                About Me <ArrowRight size={18} />
              </motion.span>
            </Link>
            <Link href="/projects">
              <motion.span
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-violet-600/60 via-indigo-500/50 to-purple-500/40 shadow-lg shadow-violet-500/15 cursor-pointer border border-white/5"
              >
                Projects <ArrowRight size={18} />
              </motion.span>
            </Link>
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-cyan-600/50 via-blue-500/40 to-indigo-500/40 shadow-lg shadow-cyan-500/15 cursor-pointer border border-white/5"
              >
                Contact <ArrowRight size={18} />
              </motion.span>
            </Link>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}
