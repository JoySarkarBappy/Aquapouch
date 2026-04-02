import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-effect shadow-[0px_12px_32px_rgba(25,28,29,0.06)] no-line">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 md:py-6 max-w-screen-2xl mx-auto font-headline tracking-tight">
        <div className="text-xl md:text-2xl font-bold text-primary uppercase tracking-widest">
          Aquapouch
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-primary border-b-2 border-primary pb-1 transition-all duration-300 ease-in-out hover:opacity-80" href="#home">Home</a>
          <a className="text-on-surface/60 hover:text-primary transition-all duration-300 ease-in-out hover:opacity-80" href="#materials">Materials</a>
          <a className="text-on-surface/60 hover:text-primary transition-all duration-300 ease-in-out hover:opacity-80" href="#results">Results</a>
          <a className="text-on-surface/60 hover:text-primary transition-all duration-300 ease-in-out hover:opacity-80" href="#cost">Cost</a>
          <a className="text-on-surface/60 hover:text-primary transition-all duration-300 ease-in-out hover:opacity-80" href="#team">Team</a>
          <a className="text-on-surface/60 hover:text-primary transition-all duration-300 ease-in-out hover:opacity-80" href="#contact">Contact</a>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-sm md:text-base"
        >
          Get Started
        </motion.button>
      </div>
    </nav>
  );
}
