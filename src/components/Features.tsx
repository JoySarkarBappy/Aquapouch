import { motion } from "motion/react";
import { ZapOff, DollarSign, Zap, Wrench, Truck } from "lucide-react";

const features = [
  {
    title: "Zero electricity",
    description: "Works anywhere, anytime, completely independent of the grid.",
    icon: <ZapOff className="w-8 h-8" />,
    borderColor: "border-primary",
  },
  {
    title: "Affordable",
    description: "Designed for wide accessibility in rural settings.",
    icon: <DollarSign className="w-8 h-8" />,
    borderColor: "border-secondary",
  },
  {
    title: "Immediate supply",
    description: "Flow starts within minutes of assembly for instant relief.",
    icon: <Zap className="w-8 h-8" />,
    borderColor: "border-primary",
  },
  {
    title: "Quick maintenance",
    description: "Modular components can be swapped or cleaned with ease.",
    icon: <Wrench className="w-8 h-8" />,
    borderColor: "border-secondary",
  },
  {
    title: "Ease of transport",
    description: "Lightweight and stackable for disaster relief mobility.",
    icon: <Truck className="w-8 h-8" />,
    borderColor: "border-primary",
  },
];

export default function Features() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">Engineered for the Field</h2>
          <p className="text-on-surface-variant">
            Aquapouch is built with a focus on accessibility and reliability in challenging environments.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col items-center text-center p-8 bg-surface-container-low rounded-3xl border-b-8 ${feature.borderColor} group hover:bg-white hover:shadow-2xl transition-all duration-500`}
            >
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 bg-white shadow-sm text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {feature.icon}
              </div>
              <h5 className="font-bold text-lg mb-3">{feature.title}</h5>
              <p className="text-xs text-on-surface-variant leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
