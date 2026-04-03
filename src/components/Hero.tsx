import { motion } from "motion/react";

interface HeroProps {
  onPurchase: () => void;
}

export default function Hero({ onPurchase }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden" id="home">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <span className="inline-block py-2 px-4 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6">
            Innovation in Hydration
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary leading-tight mb-8">
            Pure Water. <br /> <span className="text-secondary">Engineered.</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
            A heavy-duty, portable solution that transitions from the lab to the real world. Aquapouch introduces a modular, gravity-fed filtration system designed for immediate water supply.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button 
              onClick={onPurchase}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold shadow-lg hover:shadow-primary/20 transition-all"
            >
              Buy Now
            </motion.button>
            <motion.button 
              onClick={() => document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-outline-variant text-on-surface px-8 md:px-10 py-3 md:py-4 rounded-full font-bold hover:bg-surface-container transition-all"
            >
              View Results
            </motion.button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          <div className="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 w-full max-w-lg aspect-square">
            <img 
              alt="3D Render of Modular Gravity-Fed Filter" 
              className="w-full h-full object-contain drop-shadow-2xl" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2F-Hkss4JodePx37nthauAE2UHDtm7svDlcNm9hinRCwpmwit1Xm6fDBrZHuRy32F68DZ5rr_VanwFJb_U7Y1BaeajYSFLMkz6tfOHxEhY9S95SM8bgmaPwtZxyR6uhhglBUrBCT2t0h_hys0bVUq0e-_d1f2IStURuPx8TYh4hofTaBxG-O8vl8xoQSW-ubk8HtYyKIu9FaNnxse4kvCqH15bNIni7EGfKfjZQmtni0Mq1ZiFFBTjP0rXaCPo9qkXyP7zQgCFpo"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
