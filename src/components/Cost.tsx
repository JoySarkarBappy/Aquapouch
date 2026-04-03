import { motion } from "motion/react";
import { Banknote, Recycle, BarChart3 } from "lucide-react";

interface CostProps {
  onPurchase: () => void;
}

export default function Cost({ onPurchase }: CostProps) {
  return (
    <section className="py-24 md:py-32 bg-primary text-white relative overflow-hidden scroll-mt-20" id="cost">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Efficiency You Can Afford</h2>
          <p className="text-white/80 text-lg">Total cost per unit is only 360 tk. Engineering shouldn't be expensive.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md">
                <Banknote className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Sustainable Materials</h4>
                <p className="text-sm text-white/70">Modular design using low-cost natural substrates that are easily accessible.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md">
                <Recycle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Zero Energy Cost</h4>
                <p className="text-sm text-white/70">Gravity is our power source. Eliminating dependency on electricity in the field.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-8">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative w-64 h-64 md:w-80 md:h-80 bg-white rounded-full shadow-2xl flex items-center justify-center overflow-hidden border-[12px] border-white/20"
            >
              <div className="absolute inset-0 bg-primary/5 flex items-center justify-center text-primary/10">
                <BarChart3 className="w-48 h-48" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white/90 px-6 py-4 rounded-full text-center shadow-lg">
                  <span className="block text-[10px] text-primary uppercase font-bold tracking-widest">Total Build</span>
                  <span className="text-4xl font-bold text-on-surface">360<span className="text-xl ml-1">tk</span></span>
                </div>
              </div>
            </motion.div>
            <motion.button
              onClick={onPurchase}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-10 py-4 rounded-full font-bold shadow-xl hover:bg-white/90 transition-all"
            >
              Buy Now
            </motion.button>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/5"
          >
            <h4 className="font-bold text-xl mb-6">Cost Breakdown</h4>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-sm">
                <span>Zeolite</span>
                <span className="font-bold">200 tk</span>
              </li>
              <li className="flex justify-between items-center text-sm">
                <span>Filter Paper</span>
                <span className="font-bold">100 tk</span>
              </li>
              <li className="flex justify-between items-center text-sm">
                <span>Charcoal</span>
                <span className="font-bold">50 tk</span>
              </li>
              <li className="flex justify-between items-center text-sm">
                <span>Gravel</span>
                <span className="font-bold">10 tk</span>
              </li>
              <li className="pt-4 border-t border-white/20 flex justify-between items-center font-bold">
                <span>Total Investment</span>
                <span className="text-white">360 tk</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
