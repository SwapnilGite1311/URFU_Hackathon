import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Facility from "./pages/Facility";
import Traceability from "./pages/Traceability";
import Verify from "./pages/Verify";
import Contact from "./pages/Contact";

function AnimatedPage({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.99 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.99 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();
  const isVerifyPage = location.pathname.startsWith("/verify");

  return (
    <div className="min-h-screen bg-void bg-grid-fade flex flex-col">
      {!isVerifyPage && <Navbar />}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
            <Route path="/technology" element={<AnimatedPage><Technology /></AnimatedPage>} />
            <Route path="/facility" element={<AnimatedPage><Facility /></AnimatedPage>} />
            <Route path="/traceability" element={<AnimatedPage><Traceability /></AnimatedPage>} />
            <Route path="/verify/:productId" element={<AnimatedPage><Verify /></AnimatedPage>} />
            <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
      </main>
      {!isVerifyPage && <Footer />}
    </div>
  );
}
