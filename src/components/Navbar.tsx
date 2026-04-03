import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

interface NavbarProps {
  onPurchase: () => void;
}

export default function Navbar({ onPurchase }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Materials", href: "#materials", id: "materials" },
    { name: "Results", href: "#results", id: "results" },
    { name: "Cost", href: "#cost", id: "cost" },
    { name: "Features", href: "#features", id: "features" },
    { name: "Insights", href: "#insights", id: "insights" },
    { name: "Team", href: "#team", id: "team" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect shadow-[0px_12px_32px_rgba(25,28,29,0.06)] no-line">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 md:py-6 max-w-screen-2xl mx-auto font-headline tracking-tight">
        <div className="text-xl md:text-2xl font-bold text-primary uppercase tracking-widest">
          Aquapouch
        </div>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              className={`transition-all duration-300 ease-in-out hover:opacity-80 text-[13px] font-bold uppercase tracking-wider ${
                activeSection === link.id 
                  ? "text-primary scale-105" 
                  : "text-on-surface/50 hover:text-primary"
              }`} 
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <motion.button 
            onClick={onPurchase}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-4 md:px-8 py-2 md:py-3 rounded-full font-bold text-xs md:text-base shadow-lg shadow-primary/20 whitespace-nowrap"
          >
            Buy Now
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-outline-variant/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  className={`font-bold text-lg transition-colors ${
                    activeSection === link.id ? "text-primary" : "text-on-surface/80 hover:text-primary"
                  }`} 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <motion.button 
                onClick={() => {
                  onPurchase();
                  setIsMenuOpen(false);
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-6 py-4 rounded-xl font-bold text-center shadow-lg shadow-primary/20"
              >
                Buy Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
