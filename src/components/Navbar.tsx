import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  onPurchase: () => void;
}

export default function Navbar({ onPurchase }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Materials", href: "#materials" },
    { name: "Results", href: "#results" },
    { name: "Cost", href: "#cost" },
    { name: "Team", href: "#team" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect shadow-[0px_12px_32px_rgba(25,28,29,0.06)] no-line">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 md:py-6 max-w-screen-2xl mx-auto font-headline tracking-tight">
        <div className="text-xl md:text-2xl font-bold text-primary uppercase tracking-widest">
          Aquapouch
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              className="text-on-surface/60 hover:text-primary transition-all duration-300 ease-in-out hover:opacity-80 text-sm font-medium" 
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
            className="md:hidden p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors"
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
            className="md:hidden bg-white border-t border-outline-variant/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  className="text-on-surface/80 font-bold text-lg hover:text-primary transition-colors" 
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
