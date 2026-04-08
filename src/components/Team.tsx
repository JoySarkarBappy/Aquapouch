import { motion } from "motion/react";
import { Users, Mail, Phone, MapPin } from "lucide-react";

export default function Team() {
  return (
    <section className="py-24 md:py-32 scroll-mt-20" id="team">
      <div className="container mx-auto px-6">
        <div className="bg-surface-container-lowest rounded-[2rem] md:rounded-[3rem] p-6 sm:p-10 md:p-12 lg:p-16 shadow-sm border border-outline-variant/10 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <span className="inline-block py-2 px-4 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-widest uppercase mb-4 md:mb-6">
                The Team Behind Aquapouch
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-primary">Team Strategy</h2>
              <p className="text-on-surface-variant mb-8 md:mb-10 leading-relaxed text-sm sm:text-base">
                A group of dedicated engineering students from the Department of Materials and Metallurgical Engineering (MME), BUET, committed to solving global water crises through modular innovation.
              </p>
              
              <div className="bg-surface-container p-6 md:p-8 rounded-2xl border border-outline-variant/20 mb-8 md:mb-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Users className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base md:text-lg">Group Members</h4>
                    <p className="text-xs md:text-sm text-on-surface-variant">IDs: 2111001 – 2111006</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                  {[2111001, 2111002, 2111003, 2111004, 2111005, 2111006].map((id) => (
                    <div key={id} className="bg-white/50 px-3 py-2 rounded-lg text-center text-xs md:text-sm font-medium text-primary border border-primary/5">
                      {id}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 md:gap-4">
                <div className="p-3 md:p-4 rounded-2xl bg-primary/5 text-primary border border-primary/10">
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="p-3 md:p-4 rounded-2xl bg-primary/5 text-primary border border-primary/10">
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="p-3 md:p-4 rounded-2xl bg-primary/5 text-primary border border-primary/10">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative aspect-video lg:aspect-[4/3] xl:aspect-[16/10] overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border border-primary/20 group"
            >
              <img 
                src="https://i.postimg.cc/Kvqsv4tb/2026-04-04-00-19-07.jpg" 
                alt="Team Member" 
                className="w-full h-full object-cover object-center brightness-95 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10">
                <div className="inline-block py-1 px-3 md:py-1.5 md:px-4 rounded-full bg-primary text-white text-[8px] md:text-[10px] font-bold tracking-[0.2em] uppercase mb-2 md:mb-3">
                  Aquapouch
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">Team Member</h4>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Info Row */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" id="contact">
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-outline-variant/10 shadow-sm flex items-center gap-4 md:gap-6 group hover:border-primary/20 transition-colors">
            <div className="shrink-0 p-4 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Mail className="w-6 h-6" />
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-primary/60 mb-1">Email</h4>
              <p className="text-sm font-bold truncate hover:text-clip hover:whitespace-normal transition-all" title="andromeda.buet@gmail.com">
                andromeda.buet@gmail.com
              </p>
            </div>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-outline-variant/10 shadow-sm flex items-center gap-4 md:gap-6 group hover:border-primary/20 transition-colors">
            <div className="shrink-0 p-4 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Phone className="w-6 h-6" />
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-primary/60 mb-1">Phone</h4>
              <p className="text-sm font-bold">+880 6448164694</p>
            </div>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-outline-variant/10 shadow-sm flex items-center gap-4 md:gap-6 group hover:border-primary/20 transition-colors sm:col-span-2 lg:col-span-1">
            <div className="shrink-0 p-4 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-primary/60 mb-1">Location</h4>
              <p className="text-sm font-bold">BUET, Dhaka-1000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
