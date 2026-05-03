import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { Mail, Github, Linkedin, MapPin, Send, Phone } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../components/ThemeProvider";

const CONTACT_LINKS = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "aditya021201@gmail.com",
    href: "mailto:aditya021201@gmail.com",
    iconColor: "text-purple-400",
    iconBg: "from-purple-500/20 to-purple-800/10",
  },
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: "+91 9136317055",
    href: "tel:+919136317055",
    iconColor: "text-emerald-400",
    iconBg: "from-emerald-500/20 to-emerald-800/10",
  },
  {
    icon: <Github size={20} />,
    label: "GitHub",
    value: "github.com/aditya0212",
    href: "https://github.com/aditya0212",
    iconColor: "text-white/70",
    iconBg: "from-white/10 to-white/5",
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/aditya-singh-a277461b4",
    href: "https://linkedin.com/in/aditya-singh-a277461b4",
    iconColor: "text-blue-400",
    iconBg: "from-blue-500/20 to-blue-800/10",
  },
  {
    icon: <MapPin size={20} />,
    label: "Location",
    value: "Greater Noida, India",
    href: null,
    iconColor: "text-pink-400",
    iconBg: "from-pink-500/20 to-pink-800/10",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // ✅ UPDATED FUNCTION (ONLY CHANGE)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("message", form.message);

      const res = await fetch("https://portfolio-backend-u8vj.onrender.com", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        alert("Failed to send message ❌");
      }
    } catch (error) {
      alert("Error occurred ❌");
    }
  };

  return (
    <PageTransition>
      <div className="w-full max-w-5xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className={`text-4xl md:text-6xl font-black mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
            Get in <span className="text-gradient">Touch</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-3">
            {CONTACT_LINKS.map((link, i) => {
              const Wrapper = link.href ? "a" : "div";
              return (
                <Wrapper key={i} {...(link.href ? { href: link.href, target: "_blank" } : {})}>
                  <div className="flex items-center gap-4 p-4 rounded-xl card-elevated">
                    {link.icon}
                    <div>
                      <p className="text-xs">{link.label}</p>
                      <p className="text-sm">{link.value}</p>
                    </div>
                  </div>
                </Wrapper>
              );
            })}
          </div>

          <div className="lg:col-span-3 p-8 rounded-2xl card-elevated">
            {submitted ? (
              <div className="text-center">Message Sent!</div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Your name"
                />
                <input
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="your@email.com"
                />
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                />
                <button type="submit">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}