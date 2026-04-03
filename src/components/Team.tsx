import { motion } from "motion/react";
import { Users, Mail, Phone, MapPin } from "lucide-react";

export default function Team() {
  return (
    <section className="py-24 md:py-32 scroll-mt-20" id="team">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block py-2 px-4 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6">
                The Team Behind Aquapouch
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Team ANDROMEDA</h2>
              <p className="text-on-surface-variant mb-10 leading-relaxed">
                A group of dedicated engineering students from the Department of Materials and Metallurgical Engineering (MME), BUET, committed to solving global water crises through modular innovation.
              </p>
              
              <div className="bg-surface-container p-8 rounded-2xl border border-outline-variant/20 mb-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Group Members</h4>
                    <p className="text-sm text-on-surface-variant">IDs: 2111001 – 2111006</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[2111001, 2111002, 2111003, 2111004, 2111005, 2111006].map((id) => (
                    <div key={id} className="bg-white/50 px-4 py-2 rounded-lg text-center text-sm font-medium text-primary border border-primary/5">
                      {id}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2" id="contact">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-surface-container-lowest p-8 md:p-12 rounded-3xl shadow-xl border border-outline-variant/10"
            >
              <h3 className="text-2xl font-bold mb-8">Contact Info</h3>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="p-4 rounded-2xl bg-primary/5 text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email Us</h4>
                    <p className="text-on-surface-variant text-sm">andromeda.buet@gmail.com</p>
                    <p className="text-on-surface-variant text-xs mt-1">We respond within 24 hours.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="p-4 rounded-2xl bg-primary/5 text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Call Us</h4>
                    <p className="text-on-surface-variant text-sm">+880 6448164694</p>
                    <p className="text-on-surface-variant text-xs mt-1">Available Mon-Fri, 9am-5pm.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="p-4 rounded-2xl bg-primary/5 text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-on-surface-variant text-sm">Department of Materials and Metallurgical Engineering. BUET</p>
                    <p className="text-on-surface-variant text-xs mt-1">Dhaka-1000, Bangladesh.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-outline-variant/20">
                <button className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary-container transition-all">
                  Send a Message
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
