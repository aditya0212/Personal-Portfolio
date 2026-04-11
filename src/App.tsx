import { Switch, Route, Router as WouterRouter } from "wouter";
import { AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";

import ThemeProvider from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import NotFound from "./pages/not-found";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <ThemeProvider>
      <Preloader onComplete={handleComplete} />
      {loaded && (
        <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, "")}>
          <div className="min-h-[100dvh] flex flex-col relative text-foreground">
            <ScrollProgress />
            <ScrollToTop />
            <Navbar />
            <main className="flex-1 w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <Switch>
                  <Route path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/skills" component={Skills} />
                  <Route path="/contact" component={Contact} />
                  <Route component={NotFound} />
                </Switch>
              </AnimatePresence>
            </main>
          </div>
        </WouterRouter>
      )}
    </ThemeProvider>
  );
}
