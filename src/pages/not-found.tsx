import { motion } from "framer-motion";
import { Link } from "wouter";
import { useTheme } from "../components/ThemeProvider";

export default function NotFound() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="min-h-[80dvh] flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-8xl font-black tracking-tighter text-gradient mb-4">404</h1>
        <p className={`text-xl mb-8 ${isDark ? "text-white/45" : "text-gray-500"}`}>This page doesn't exist.</p>
        <Link href="/">
          <motion.span
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg shadow-purple-500/25 cursor-pointer"
          >
            Go Home
          </motion.span>
        </Link>
      </motion.div>
    </div>
  );
}
