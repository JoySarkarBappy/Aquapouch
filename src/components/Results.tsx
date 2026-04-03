import { motion } from "motion/react";
import { Waves, Verified, Info, ArrowRight, Droplets, FlaskConical } from "lucide-react";

const stats = [
  { name: "pH Level", raw: 7.8, treated: 7.9, unit: "", max: 14 },
  { name: "DO (mg/L)", raw: 1.3, treated: 1.4, unit: "mg/L", max: 2.0 },
  { name: "Conductance", raw: 800, treated: 1000, unit: "µS/cm", max: 1200 },
  { name: "TDS (mg/L)", raw: 400, treated: 450, unit: "mg/L", max: 600 },
];

export default function Results() {
  return (
    <section className="py-24 md:py-32 bg-surface-container-lowest scroll-mt-20" id="results">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Performance Validation</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Basic water tests like pH, Dissolved Oxygen (DO), Total Dissolved Solid (TDS) and Conductance have been conducted with significant improvement.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-11 gap-8 items-stretch">
          {/* Raw Water Box */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-white p-8 rounded-[2rem] border border-outline-variant/10 shadow-sm flex flex-col"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-on-surface-variant/10 flex items-center justify-center text-on-surface-variant">
                <FlaskConical className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Raw Water Profile</h3>
                <p className="text-xs text-on-surface-variant font-medium uppercase tracking-widest">Initial State</p>
              </div>
            </div>

            <div className="space-y-8 flex-grow">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-on-surface-variant/60 uppercase">
                    <span>{stat.name}</span>
                    <span>{stat.raw} {stat.unit}</span>
                  </div>
                  <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(stat.raw / stat.max) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-on-surface-variant/30"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 pt-8 border-t border-outline-variant/10">
              <p className="text-xs text-on-surface-variant italic leading-relaxed">
                Source water collected from local pond showing high turbidity and low dissolved oxygen levels.
              </p>
            </div>
          </motion.div>

          {/* Transition Arrow */}
          <div className="lg:col-span-1 flex items-center justify-center py-4 lg:py-0">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20 rotate-90 lg:rotate-0">
              <ArrowRight className="w-6 h-6" />
            </div>
          </div>

          {/* Treated Water Box */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-white p-8 rounded-[2rem] border-2 border-primary shadow-xl shadow-primary/5 flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4">
              <Verified className="w-8 h-8 text-primary/20" />
            </div>
            
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Droplets className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-primary">Aquapouch Treated</h3>
                <p className="text-xs text-primary font-bold uppercase tracking-widest">Optimized Output</p>
              </div>
            </div>

            <div className="space-y-8 flex-grow">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-primary uppercase">
                    <span>{stat.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] bg-primary/10 px-2 py-0.5 rounded text-primary">
                        +{(((stat.treated - stat.raw) / stat.raw) * 100).toFixed(1)}%
                      </span>
                      <span>{stat.treated} {stat.unit}</span>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-primary/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(stat.treated / stat.max) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                      className="h-full bg-primary shadow-[0_0_8px_rgba(0,115,153,0.4)]"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-outline-variant/10 flex items-center justify-between">
              <p className="text-xs text-primary font-bold">Laboratory Verified Results</p>
              <Verified className="text-primary w-6 h-6" />
            </div>
          </motion.div>
        </div>

        {/* Visual Comparison Image */}
        <div className="mt-16 lg:mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-10 rounded-[3rem] shadow-2xl border border-outline-variant/10 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2">
                <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Waves className="w-6 h-6 text-primary" />
                  Visual Verification
                </h4>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  The physical transformation of the water is as significant as the chemical one. Our multi-layer filtration system removes 99% of visible suspended solids.
                </p>
                <div className="flex gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase">Location</span>
                    <span className="text-xs font-bold">BUET Laboratory</span>
                  </div>
                  <div className="w-px h-8 bg-outline-variant/20"></div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase">Method</span>
                    <span className="text-xs font-bold">Gravity-Fed Multi-Stage</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 w-full">
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-surface-container shadow-inner">
                  <img 
                    alt="Filtration Before and After Comparison" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa64DOaorm8BF1x-SqYv08wFTHLoaPtOrFg-WUXGPip8n1JrY2GJcMog0hXG1uwI-0hMhxO_ScZ1AY1Da_Ks0EzClQK8R3G0mtffx2r38MAYVNlUTXmwuWJC0jxd3WWih0C82Ohe046aGnOFLad4FHAT9JM-TvJUaz2YOj13ouAl6-MqpFahU3N572muZhYVG3zizIiUuZmGS9JMQXZQgLUzCbyrMTDZQScIxUJwJGBg5yTEPdS2oa7TUon99tGVK1kAYAwWoaMoU"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between">
                    <span className="bg-black/60 text-white text-[10px] px-3 py-1 rounded-full uppercase font-bold backdrop-blur-sm">Raw Water</span>
                    <span className="bg-primary/80 text-white text-[10px] px-3 py-1 rounded-full uppercase font-bold backdrop-blur-sm">Aquapouch Pure</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/5 rounded-full border border-primary/10">
            <Info className="w-4 h-4 text-primary" />
            <p className="text-xs text-on-surface-variant font-medium">
              All tests conducted under controlled laboratory conditions at BUET.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
