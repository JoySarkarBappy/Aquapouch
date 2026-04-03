import { motion } from "motion/react";

export default function FutureInsights() {
  return (
    <section className="py-24 md:py-32 bg-surface-container-high relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-12 shadow-sm border border-outline-variant/10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Future Insights:</h2>
              <p className="text-on-surface-variant mb-10">
                We are committed to continuous iteration. Our roadmap includes technical milestones to further enhance the system.
              </p>
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary-container/30 border border-primary/10"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <span className="font-bold text-primary block">TDS & Ion Management</span>
                    <p className="text-xs text-on-surface-variant mt-1">Integrating functionalized zeolites to target heavy metals and meet potable standards.</p>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-surface-container border border-outline-variant/20"
                >
                  <div className="w-2 h-2 rounded-full bg-on-surface-variant/40 mt-2"></div>
                  <div>
                    <span className="font-bold text-on-surface-variant block">Antimicrobial "Bio-Shield"</span>
                    <p className="text-xs text-on-surface-variant mt-1">Incorporating ceramic discs to neutralize 99.9% of waterborne pathogens.</p>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-surface-container border border-outline-variant/20"
                >
                  <div className="w-2 h-2 rounded-full bg-on-surface-variant/40 mt-2"></div>
                  <span className="font-bold text-on-surface-variant">Flow Rate Optimization</span>
                </motion.div>
              </div>
            </div>
            <div className="relative group h-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-2xl border border-primary/20"
              >
                <img 
                  alt="Advanced water filtration system" 
                  className="w-full h-full object-cover brightness-100 group-hover:scale-105 transition-all duration-700" 
                  src="https://static-01.daraz.com.bd/p/489397f5788179e9240690edb80bfcbe.jpg"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
