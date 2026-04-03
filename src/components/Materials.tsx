import { motion } from "motion/react";
import { Mountain, Gem, Flame, Layers } from "lucide-react";

const layers = [
  {
    title: "Gravel / Stones",
    description: "Act as a coarse sediment pre-filter, trapping large particles, leaves, and visible debris.",
    icon: Mountain,
    accent: "bg-amber-500",
  },
  {
    title: "Zeolite",
    description: "Specialized in chemical purification. Targets heavy metal ions and specific chemical contaminants.",
    icon: Gem,
    accent: "bg-slate-300",
  },
  {
    title: "Activated Charcoal",
    description: "Primary function is adsorption, removing organic compounds, dissolved gases, and chlorine to improve taste and odor.",
    icon: Flame,
    accent: "bg-slate-800",
  },
  {
    title: "Filter Discs",
    description: "Serve as the final polishing stage, providing fine mechanical sieving to ensure maximum clarity.",
    icon: Layers,
    accent: "bg-sky-400",
  },
];

export default function Materials() {
  return (
    <section className="py-24 md:py-32 bg-surface-container-low" id="materials">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">The Multi-Layered Matrix</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Our filtration process mimics nature's own purification journey, using four distinct modular layers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {layers.map((layer, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-outline-variant/10"
            >
              <div className="relative h-48 flex items-center justify-center bg-surface-container-lowest">
                <div className={`absolute inset-0 opacity-5 ${layer.accent}`}></div>
                <layer.icon className={`w-16 h-16 ${layer.accent.replace('bg-', 'text-')} opacity-80 group-hover:scale-110 transition-transform duration-500`} />
                <div className={`absolute bottom-0 left-0 w-full h-1 ${layer.accent}`}></div>
              </div>
              <div className="p-8 text-center md:text-left">
                <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-secondary transition-colors">
                  {layer.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {layer.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
