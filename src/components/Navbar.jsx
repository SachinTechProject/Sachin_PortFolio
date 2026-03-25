import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = ["Home", "About", "Experience", "Skills", "Education", "Projects", "Contact"];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "backdrop-blur-xl bg-slate-900/90 shadow-lg border-b border-white/10" 
            : "backdrop-blur-sm bg-slate-900/50"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl sm:text-2xl font-bold tracking-tighter cursor-pointer"
            onClick={() => scrollTo("home")}
          >
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              PORT
            </span>
            <span className="text-white">FOLIO</span>
          </motion.div>

          {/* Desktop Navigation - Only visible on screens larger than 1024px */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo(item)}
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium text-sm uppercase tracking-wider relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
          </div>

          {/* Mobile/Tablet Menu Button - Visible on screens up to 1024px */}
          <button
            className="lg:hidden text-white focus:outline-none p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.div>
          </button>
        </div>

        {/* Mobile/Tablet Dropdown Menu - Visible on screens up to 1024px */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10"
            >
              <div className="container mx-auto px-6 py-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      onClick={() => scrollTo(item)}
                      className="text-gray-200 hover:text-blue-400  text-base font-medium text-left py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-300"
                    >
                      <span className="flex justify-center text-start items-center gap-3">
                        <span className="text-blue-400 text-lg">
                          {item === "Home" && "🏠"}
                          {item === "About" && "👤"}
                          {item === "Experience" && "💼"}
                          {item === "Skills" && "⚡"}
                          {item === "Education" && "🎓"}
                          {item === "Projects" && "🚀"}
                          {item === "Contact" && "📧"}
                        </span>
                        {item}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from going under navbar */}
      <div className="h-16 sm:h-20"></div>
    </>
  );
};

export default Navbar;