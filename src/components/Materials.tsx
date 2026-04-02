import { motion } from "motion/react";

const layers = [
  {
    title: "Gravel / Stones",
    description: "Act as a coarse sediment pre-filter, trapping large particles, leaves, and visible debris.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4tciKrW_DVQ4WP8wX1XV8ZDu_pnhgG7s4UeVNSXZMJj1lwy1RVIkkqnaDmB-P4rDlHg5XGMozvtF6pIxxRnx_b4yn2zHEwGnO1GP_JKdUfXvU_MgK9zcnZF2Hw82VDey1ni6KrCat9aqTS7cpXhtx0CA1SPd6m0Okck-SgTDrIsISJQKF1aTdet8WpV3COC71fndS0JPDVaBtpT4J5gY4W6f2qjKin34Hj0OommfI7ZZ-h7v1tOu4TPFelIFqAE8UbexbAqnMWc8",
    accent: "border-amber-500",
  },
  {
    title: "Zeolite",
    description: "Specialized in chemical purification. Targets heavy metal ions and specific chemical contaminants.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4tciKrW_DVQ4WP8wX1XV8ZDu_pnhgG7s4UeVNSXZMJj1lwy1RVIkkqnaDmB-P4rDlHg5XGMozvtF6pIxxRnx_b4yn2zHEwGnO1GP_JKdUfXvU_MgK9zcnZF2Hw82VDey1ni6KrCat9aqTS7cpXhtx0CA1SPd6m0Okck-SgTDrIsISJQKF1aTdet8WpV3COC71fndS0JPDVaBtpT4J5gY4W6f2qjKin34Hj0OommfI7ZZ-h7v1tOu4TPFelIFqAE8UbexbAqnMWc8",
    accent: "border-slate-200",
  },
  {
    title: "Activated Charcoal",
    description: "Primary function is adsorption, removing organic compounds, dissolved gases, and chlorine to improve taste and odor.",
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b840?auto=format&fit=crop&q=80&w=600&h=400",
    accent: "border-slate-900",
  },
  {
    title: "Filter Discs",
    description: "Serve as the final polishing stage, providing fine mechanical sieving to ensure maximum clarity.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600&h=400",
    accent: "border-sky-400",
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
              <div className="relative h-48 overflow-hidden">
                <img 
                  alt={layer.title} 
                  className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${layer.title === 'Gravel / Stones' || layer.title === 'Zeolite' ? 'scale-125' : ''}`} 
                  src={layer.image}
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute bottom-0 left-0 w-full h-1 ${layer.accent.replace('border-', 'bg-')}`}></div>
              </div>
              <div className="p-8">
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
