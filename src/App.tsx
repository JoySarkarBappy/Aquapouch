/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Materials from "./components/Materials";
import Results from "./components/Results";
import Cost from "./components/Cost";
import Features from "./components/Features";
import Team from "./components/Team";
import FutureInsights from "./components/FutureInsights";
import Footer from "./components/Footer";
import PurchaseModal from "./components/PurchaseModal";

export default function App() {
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

  const openPurchaseModal = () => setIsPurchaseModalOpen(true);
  const closePurchaseModal = () => setIsPurchaseModalOpen(false);

  return (
    <div className="min-h-screen">
      <Navbar onPurchase={openPurchaseModal} />
      <main>
        <Hero onPurchase={openPurchaseModal} />
        <Materials />
        <Results />
        <Cost onPurchase={openPurchaseModal} />
        <Features />
        <Team />
        <FutureInsights />
        <section className="py-16 md:py-24 bg-surface-container-lowest">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-8 md:mb-12 text-primary uppercase tracking-[0.3em]">Funded by</h3>
              <div className="max-w-[280px] sm:max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg border border-outline-variant/10 group bg-white p-6">
                <img 
                  src="https://salamsteel.com/wp-content/uploads/2024/04/250X90-1.png" 
                  alt="Salam Steel" 
                  className="w-full h-auto object-contain group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    console.error("Image failed to load");
                  }}
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <PurchaseModal isOpen={isPurchaseModalOpen} onClose={closePurchaseModal} />
    </div>
  );
}
