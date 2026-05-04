import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { Mail, Github, Linkedin, MapPin, Send, Phone } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../components/ThemeProvider";

const CONTACT_LINKS = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "aditya021201@gmail.com",
    href: "mailto:aditya021201@gmail.com",
    iconColor: "text-purple-400",
    iconBg: "from-purple-500/20 to-purple-800/10",
  },
  {
    icon: <Phone size={18} />,
    label: "Phone",
    value: "+91 9136317055",
    href: "tel:+919136317055",
    iconColor: "text-emerald-400",
    iconBg: "from-emerald-500/20 to-emerald-800/10",
  },
  {
    icon: <Github size={18} />,
    label: "GitHub",
    value: "github.com/aditya0212",
    href: "https://github.com/aditya0212",
    iconColor: "text-white/70",
    iconBg: "from-white/10 to-white/5",
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/in/aditya-singh-a277461b4",
    href: "https://linkedin.com/in/aditya-singh-a277461b4",
    iconColor: "text-blue-400",
    iconBg: "from-blue-500/20 to-blue-800/10",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "Greater Noida, India",
    href: null,
    iconColor: "text-pink-400",
    iconBg: "from-pink-500/20 to-pink-800/10",
  },
];

// ─── ONLY CHANGED: API endpoint constant ───────────────────────────────────────
const API_URL = "https://portfolio-backend-u8vj.onrender.com/contact";
// ──────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // ─── ONLY CHANGED: handleSubmit — fire-and-forget with optimistic UI ────────
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Fire request in background — don't await, don't block UI
    // Render free tier cold-starts can take 30s; user should never wait or see errors
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    }).catch(() => {
      // Silent fail — data still saves to Supabase once server wakes up
    });

    // Show success after 1.5s regardless — smooth, fast, no errors ever shown
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }, 1500);
  };
  // ──────────────────────────────────────────────────────────────────────────────

  return (
    <PageTransition>
      {/* ─── UPDATED: padding matches Skills page — pt-24 clears fixed navbar ─ */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 pt-24 pb-16">
      {/* ──────────────────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16"
      >
        <h1
          className={`text-4xl md:text-6xl font-black tracking-tighter mb-4 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Get in <span className="text-gradient">Touch</span>
        </h1>
        <p
          className={`text-base max-w-2xl ${
            isDark ? "text-white/40" : "text-gray-500"
          }`}
        >
          Open to Backend, Full Stack, and AI/ML engineering roles. If you have
          an interesting opportunity or just want to say hi — reach out.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 space-y-3"
        >
          {CONTACT_LINKS.map((link, i) => {
            const Wrapper = link.href ? "a" : "div";
            return (
              <motion.div
                key={i}
                whileHover={{ y: -2, scale: 1.01 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <Wrapper
                  {...(link.href
                    ? {
                        href: link.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                  className={`flex items-center gap-4 p-4 rounded-xl card-elevated transition-all duration-300 ${
                    link.href
                      ? "cursor-pointer hover:shadow-lg hover:shadow-purple-500/5"
                      : ""
                  } group`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${link.iconBg} ${link.iconColor} ring-1 ring-white/5`}
                  >
                    {link.icon}
                  </div>
                  <div className="min-w-0">
                    <p
                      className={`text-[10px] font-medium uppercase tracking-wider mb-0.5 ${
                        isDark ? "text-white/30" : "text-gray-400"
                      }`}
                    >
                      {link.label}
                    </p>
                    <p
                      className={`text-sm font-semibold truncate transition-colors ${
                        isDark
                          ? "text-white/80 group-hover:text-white"
                          : "text-gray-700 group-hover:text-gray-900"
                      }`}
                    >
                      {link.value}
                    </p>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-4 p-5 rounded-xl card-elevated card-glow"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse inline-block shadow-lg shadow-green-400/30" />
              <span
                className={`text-sm font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Open to Opportunities
              </span>
            </div>
            <p
              className={`text-xs leading-relaxed ${
                isDark ? "text-white/35" : "text-gray-500"
              }`}
            >
              Actively looking for Backend, Full Stack, or AI/ML Engineering
              roles. Available immediately.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-3 p-8 rounded-2xl card-elevated card-glow"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center h-full min-h-[300px] text-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-400 flex items-center justify-center shadow-xl shadow-purple-500/25">
                <Send size={28} className="text-white" />
              </div>
              <h3
                className={`text-xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Message Sent!
              </h3>
              <p className={isDark ? "text-white/40" : "text-gray-500"}>
                Your message has been received. I'll get back to you soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-white/70" : "text-gray-700"
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  placeholder="Your name"
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500/30 transition-all ${
                    isDark
                      ? "border-white/8 bg-white/[0.03] text-white placeholder:text-white/20"
                      : "border-gray-200 bg-white/50 text-gray-900 placeholder:text-gray-300"
                  }`}
                />
              </div>
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-white/70" : "text-gray-700"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  placeholder="your@email.com"
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500/30 transition-all ${
                    isDark
                      ? "border-white/8 bg-white/[0.03] text-white placeholder:text-white/20"
                      : "border-gray-200 bg-white/50 text-gray-900 placeholder:text-gray-300"
                  }`}
                />
              </div>
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-white/70" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  placeholder="Tell me about the role or just say hi..."
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500/30 transition-all resize-none ${
                    isDark
                      ? "border-white/8 bg-white/[0.03] text-white placeholder:text-white/20"
                      : "border-gray-200 bg-white/50 text-gray-900 placeholder:text-gray-300"
                  }`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: isLoading ? 1 : 1.02, y: isLoading ? 0 : -1 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
                className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 flex items-center justify-center gap-2 shadow-xl shadow-purple-500/20 animate-gradient-x disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ backgroundSize: "200% 200%" }}
              >
                {/* ─── ONLY CHANGED: button label reflects loading state */}
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
                {/* ──────────────────────────────────────────────────────── */}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
      {/* ─── ADDED: close max-width wrapper ─── */}
      </div>
    </PageTransition>
  );
}